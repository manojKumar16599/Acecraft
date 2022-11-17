//REST API demo in Node.js
var express = require('express'); // requre the express framework
var app = express();
const fs = require("fs");
const bodyParser = require("body-parser");
const http = require('http')
const https = require('https')
const qs = require('querystring')
const path = require('path')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Endpoint to Get a list of cart products
app.get('/getProducts', function (req, res) {
    fs.readFile(__dirname + "/" + "cart.json", 'utf8', function (err, data) {
        res.end(data); // you can also use res.send()
    });
})

//The add products endpoint
app.post('/addProducts', function (req, res) {
    // Step 1: read existing users
    fs.readFile(__dirname + "/" + "cart.json", 'utf8', function (err, data) {
        if (Object.keys(req?.body).length === 1) {
            data = req?.body;
        } else {
            data = JSON.parse(data);
            const lastValue = Object.keys(data).pop();
            const nextProduct = `product_${parseInt(lastValue?.split('_')[1]) + 1}`;
            // Step 2: append user variable to list
            data[nextProduct] = req?.body;
        }
        res.end(JSON.stringify(data));

        fs.writeFile(
            "./cart.json",
            JSON.stringify(data),
            (err, result) => {
                if (err) {
                    const status = 401;
                    const message = err;
                    res.status(status).json({ status, message });
                    return;
                }
            }
        )
    });
})

app.put('/updateProduct', function (req, res) {
    const bodyData = req?.body;
    fs.readFile(__dirname + "/" + "cart.json", 'utf8', function (err, data) {
        data = JSON.parse(data);
        data = bodyData;

        res.end(JSON.stringify(data));

        fs.writeFile(
            "./cart.json",
            JSON.stringify(data),
            (err, result) => {
                if (err) {
                    const status = 401;
                    const message = err;
                    res.status(status).json({ status, message });
                    return;
                }
            }
        )
    });
})

app.delete('/deleteProduct', function (req, res) {
    const id = req?.query?.id;
    fs.readFile(__dirname + "/" + "cart.json", 'utf8', function (err, data) {
        data = JSON.parse(data);
        delete data[`product_${id}`];

        let newObj = {}
        Object.keys(data).forEach((item, index) => {
            newObj = {
                ...newObj,
                [`product_${index + 1}`]: {
                    ...data?.[item],
                    id: data?.[item]?.id > id ? data?.[item]?.id - 1 : data?.[item]?.id
                }
            }
        });

        console.log("newObj", newObj)

        res.end(JSON.stringify(newObj));

        fs.writeFile(
            "./cart.json",
            JSON.stringify(newObj),
            (err, result) => {
                if (err) {
                    const status = 401;
                    const message = err;
                    res.status(status).json({ status, message });
                    return;
                }
            }
        )
    });
})

app.get('/getAddress', function (req, res) {
    fs.readFile(__dirname + "/" + "address.json", 'utf8', function (err, data) {
        res.end(data); // you can also use res.send()
    });
})

app.post('/addAddress', function (req, res) {
    fs.readFile(__dirname + "/" + "address.json", 'utf8', function (err, data) {
        data = JSON.parse(data);
        data = [...data, req?.body];
        res.end(JSON.stringify(data));

        fs.writeFile(
            "./address.json",
            JSON.stringify(data),
            (err, result) => {
                if (err) {
                    const status = 401;
                    const message = err;
                    res.status(status).json({ status, message });
                    return;
                }
            }
        )
    });
})

app.delete('/deleteAddress', function (req, res) {
    const id = req?.query?.id;
    fs.readFile(__dirname + "/" + "address.json", 'utf8', function (err, data) {
        data = JSON.parse(data);
        console.log("id", id, data)
        const newData = data?.filter(item => parseInt(id) !== item?.user_id);

        console.log("newData", newData)

        res.end(JSON.stringify(newData));

        fs.writeFile(
            "./address.json",
            JSON.stringify(newData),
            (err, result) => {
                if (err) {
                    const status = 401;
                    const message = err;
                    res.status(status).json({ status, message });
                    return;
                }
            }
        )
    });
})

// Import paytm checksum utility
const PaytmChecksum = require('./config/cheksum')
const PaytmConfig = require('./config/config')

const server = http.createServer()

server.on('request', (req, res) => {
    console.log("req.url", req.url)
    switch (req.url) {

        case "/checkout":
            // fs.readFile(path.join(__dirname + "../../public/index.html"), (err, data) => {
            fs.readFile(path.join(__dirname + "index.html"), (err, data) => {
                if (err) {
                    res.writeHead(404)
                    res.end(JSON.stringify(err))
                    return
                }
                res.writeHead(200)
                res.end(data)
            })
            break

        case "/payNow":
            let body = ''

            const orderId = 'TEST_' + new Date().getTime()

            req.on('error', (err) => {
                console.error(err.stack)
            }).on('data', (chunk) => {
                body += chunk
            }).on('end', () => {
                console.log("body", body)
                let data = qs.parse(body)
                console.log("data", data)

                const paytmParams = {}

                paytmParams.body = {
                    "requestType": "Payment",
                    "mid": PaytmConfig.PaytmConfig.mid,
                    "websiteName": PaytmConfig.PaytmConfig.website,
                    "orderId": orderId,
                    "callbackUrl": "http://localhost:3001/checkout",
                    "txnAmount": {
                        "value": data?.amount,
                        "currency": "INR",
                    },
                    "userInfo": {
                        "custId": data?.email,
                    },
                };

                PaytmChecksum.generateSignature(JSON.stringify(paytmParams.body), PaytmConfig.PaytmConfig.key).then(function (checksum) {

                    paytmParams.head = {
                        "signature": checksum
                    };

                    var post_data = JSON.stringify(paytmParams);

                    var options = {

                        /* for Staging */
                        hostname: 'securegw-stage.paytm.in',

                        /* for Production */
                        // hostname: 'securegw.paytm.in',

                        port: 443,
                        path: `/theia/api/v1/initiateTransaction?mid=${PaytmConfig.PaytmConfig.mid}&orderId=${orderId}`,
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Content-Length': post_data.length
                        }
                    };

                    var response = "";
                    var post_req = https.request(options, function (post_res) {
                        post_res.on('data', function (chunk) {
                            response += chunk;
                        });

                        post_res.on('end', function () {
                            response = JSON.parse(response)
                            console.log('txnToken:', response);

                            res.writeHead(200, { 'Content-Type': 'text/html' })
                            res.write(`<html>
                                <head>
                                    <title>Show Payment Page</title>
                                </head>
                                <body>
                                    <center>
                                        <h1>Please do not refresh this page...</h1>
                                    </center>
                                    <form method="post" action="https://securegw-stage.paytm.in/theia/api/v1/showPaymentPage?mid=${PaytmConfig.PaytmConfig.mid}&orderId=${orderId}" name="paytm">
                                        <table border="1">
                                            <tbody>
                                                <input type="hidden" name="mid" value="${PaytmConfig.PaytmConfig.mid}">
                                                    <input type="hidden" name="orderId" value="${orderId}">
                                                    <input type="hidden" name="txnToken" value="${response.body.txnToken}">
                                         </tbody>
                                      </table>
                                                    <script type="text/javascript"> document.paytm.submit(); </script>
                                   </form>
                                </body>
                             </html>`)
                            res.end()
                        });
                    });

                    post_req.write(post_data);
                    post_req.end();
                });
            })

            break

        // case '/qr-code':
        //     let QR_body = '';
        //     const orderId_QR = 'TEST_' + new Date().getTime();

        //     req.on('error', (err) => {
        //         console.error(err.stack)
        //     }).on('data', (chunk) => {
        //         QR_body += chunk
        //     }).on('end', () => {
        //         let data = qs.parse(QR_body)

        //         var paytmParams = {};

        //         paytmParams.body = {
        //             "mid": PaytmConfig.PaytmConfig.mid,
        //             "orderId": orderId_QR,
        //             "amount": data?.amount,
        //             "businessType": "UPI_QR_CODE",
        //             "posId": "S12_123"
        //         };

        //         PaytmChecksum.generateSignature(JSON.stringify(paytmParams.body), PaytmConfig.PaytmConfig.key).then(function (checksum) {

        //             paytmParams.head = {
        //                 "clientId": "C11",
        //                 "version": "v1",
        //                 "signature": checksum
        //             };

        //             var post_data = JSON.stringify(paytmParams);

        //             var options = {

        //                 hostname: 'securegw-stage.paytm.in',

        //                 port: 443,
        //                 path: '/paymentservices/qr/create',
        //                 method: 'POST',
        //                 headers: {
        //                     'Content-Type': 'application/json',
        //                     'Content-Length': post_data.length
        //                 }
        //             };

        //             var response = "";
        //             var post_req = https.request(options, function (post_res) {
        //                 post_res.on('data', function (chunk) {
        //                     response += chunk;
        //                 });

        //                 post_res.on('end', function () {
        //                     console.log('Response: ', response);
        //                 });
        //             });

        //             post_req.write(post_data);
        //             post_req.end();
        //         });
        //     })

        case '/':
            let callbackResponse = ''

            req.on('error', (err) => {
                console.error(err.stack)
            }).on('data', (chunk) => {
                callbackResponse += chunk
            }).on('end', () => {
                let data = qs.parse(callbackResponse)
                console.log(data)

                data = JSON.parse(JSON.stringify(data))

                const paytmChecksum = data.CHECKSUMHASH

                var isVerifySignature = PaytmChecksum.verifySignature(data, PaytmConfig.PaytmConfig.key, paytmChecksum)
                if (isVerifySignature) {
                    console.log("Checksum Matched");

                    var paytmParams = {};

                    paytmParams.body = {
                        "mid": PaytmConfig.PaytmConfig.mid,
                        "orderId": data.ORDERID,
                    };

                    PaytmChecksum.generateSignature(JSON.stringify(paytmParams.body), PaytmConfig.PaytmConfig.key).then(function (checksum) {
                        paytmParams.head = {
                            "signature": checksum
                        };

                        var post_data = JSON.stringify(paytmParams);

                        var options = {

                            /* for Staging */
                            hostname: 'securegw-stage.paytm.in',

                            /* for Production */
                            // hostname: 'securegw.paytm.in',

                            port: 443,
                            path: '/v3/order/status',
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'Content-Length': post_data.length
                            }
                        };

                        // Set up the request
                        var response = "";
                        var post_req = https.request(options, function (post_res) {
                            post_res.on('data', function (chunk) {
                                response += chunk;
                            });

                            post_res.on('end', function () {
                                console.log('Response: ', response);
                                res.write(response)
                                res.end()
                            });
                        });

                        // post the data
                        post_req.write(post_data);
                        post_req.end();
                    });
                } else {
                    console.log("Checksum Mismatched");
                }
            })

    }
})

server.listen(3000, 'localhost', () => {
    console.log("Server listening on port: 3000")
})

// Create a server to listen at port 8080
var APIServer = app.listen(8000, function () {
    var host = APIServer.address().address
    var port = APIServer.address().port
    console.log("REST API demo app listening at http://%s:%s", host, port)
})