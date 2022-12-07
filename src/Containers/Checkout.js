import React, { useEffect, useState } from 'react';
import { Button, Divider, message, Modal, Radio, Steps, Table } from 'antd';
import { UserOutlined, MenuOutlined, DeleteFilled } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import axios from 'axios';

import Register from './Register';
import Login from './Login';
import AddressBook from './Accounts/AddressBook';
// import { setHTMLcontent } from '../features/counter/htmlSlice';
import Iframe from '../Components/Iframe';

const { Step } = Steps;

const Checkout = () => {
    const [current, setCurrent] = useState(0);
    const [total, setTotal] = useState(0);
    const [subTotal, setSubTotal] = useState(0);
    const [gstAmount, setGSTAmount] = useState(0);
    const [tableData, setTableData] = useState([]);
    const [addressData, setAddressData] = useState([]);
    const [isUseAddress, setUseAddress] = useState(false);
    const [HTMLcontent, setHTMLstate] = useState("");

    const isLoginStatus = JSON.parse(localStorage.getItem("login"));

    const products = useSelector(state => state.product);

    useEffect(() => {
        if (isLoginStatus && !isUseAddress) {
            setCurrent(1);
        }
    }, [isLoginStatus, isUseAddress]);

    useEffect(() => {
        getAddress();
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (Object.keys(products).length) {
            let temp = [];

            Object.keys(products).forEach(item => {
                const test = products[item];
                return Object.keys(test).forEach(e => {
                    return (
                        temp = [
                            ...temp,
                            test[e]
                        ]
                    )
                })
            });
            setTableData(temp);
        }
    }, [products]);

    useEffect(() => {
        let tempSubTotal = 0;
        let tempGstAmount = 0;
        tableData.forEach(item => {
            tempSubTotal += (item.total * item.quantity);
            tempGstAmount += ((item.actualPrice * item.quantity) / 100) * 3
        });

        const tempTotal = tempSubTotal + tempGstAmount;
        setTotal(tempTotal);
        setSubTotal(tempSubTotal);
        setGSTAmount(tempGstAmount);
    }, [tableData]);


    // const handleQR = useCallback(() => {
    //     axios.post('http://localhost:3000/qr-code', `amount=${total}`)
    //         .then((res) => {
    //             console.log('res.data', res.data)
    //             // if (res.data) {
    //             //     setHTMLstate(res.data);
    //             //     setHTMLcontent(res.data);
    //             // }
    //         })
    //         .catch((err) => {
    //             console.log("err", err)
    //         });
    // }, [total]);

    // useEffect(() => {
    //     if (HTMLcontent.length) {
    //         handleQR();
    //     }
    // }, [HTMLcontent, handleQR]);

    const getAddress = () => {
        axios.get('http://localhost:8000/getAddress')
            .then((res) => {
                const data = res.data;
                setAddressData(data);
            })
            .catch((err) => {
                if (err) {
                    message.error('Data does not exist');
                }
            })
    };

    const handleRemove = (id) => {
        axios.delete(`http://localhost:8000/deleteAddress?id=${id}`)
            .then((res) => {
                if (res.data) {
                    message.success("Address removed successfully");
                    getAddress();
                }
            })
            .catch((err) => {
                message.error('Something went wrong');
            });
    };

    const onChange = (value) => {
        if (value === 2) {

        } else {
            setCurrent(value);
        }
    };

    const useAddress = () => {
        setCurrent(2);
        setUseAddress(true);
    };

    const handlePayment = () => {
        axios.post('http://localhost:3000/payNow', `email=manojkumar%40gmail.com&phone=9898786832&amount=${total}`)
            .then((res) => {
                if (res.data) {
                    setHTMLstate(res.data);
                    // setHTMLcontent(res.data);
                    // Navigate("/payNow");
                }
            })
            .catch((err) => {
                console.log("err", err)
            });
    }

    const renderContent = () => {
        const columns = [
            {
                title: '#',
                dataIndex: "count"
            },
            {
                title: 'Item',
                render: (data) => {
                    return (
                        <div className='img-wrapper d-flex'>
                            <img src={data.imgURL} alt="small_img" />
                            <div>
                                <div>{data.name}</div>
                                <div>Size: {data.selectedSize}</div>
                            </div>
                        </div>
                    )
                }
            },
            {
                title: 'Qty',
                dataIndex: 'quantity'
            },
            {
                title: 'Price',
                render: (data) => {
                    return (
                        <div>
                            <div><h4>₹{data.price}</h4></div>
                            <div><strong>MRP: </strong>₹{data.actualPrice}</div>
                            <div><strong>Discount: </strong>₹{data.actualPrice - data.price} ({data.offer})%</div>
                            <div><strong>Taxes: </strong>₹{parseFloat((data.actualPrice / 100) * 3).toFixed(2)} (Exclusive)</div>
                        </div>
                    )
                }
            },
            {
                title: 'Item Total',
                render: (data) => (
                    <div><h4>₹{data.quantity * data.total}</h4></div>
                )
            },
        ];

        switch (current) {
            case 1:
                return (
                    <div className='padding'>
                        <div className='w-50'>
                            {addressData.length
                                ? addressData.map((item, index) => {
                                    return (
                                        <div className='address_content grey-color' key={`address_${index}`}>
                                            <div><strong>Name : </strong> {item.full_name + item.student_last_name}</div>
                                            <div><strong>Address : </strong> {item.address}</div>
                                            <div><strong>IN - </strong> {item.zip}</div>
                                            <div><strong>Phone Number : </strong> {item.phone}</div>
                                            <div className='d-flex mt-1'>
                                                <Button
                                                    type='primary'
                                                    onClick={useAddress}
                                                >
                                                    Use as Shipping Address
                                                </Button>
                                                <DeleteFilled onClick={() => handleRemove(item.user_id)} />
                                            </div>
                                        </div>
                                    )
                                })
                                : null
                            }
                            <div>Shipping Address</div>
                            <AddressBook type="checkout" getAddress={getAddress} />
                        </div>
                    </div>
                )
            case 2:
                return (
                    <div style={{ color: "#978f8f" }} className='order-summary'>
                        <div>
                            <h3 style={{ color: "#978f8f" }}>Order Summary</h3>
                            <Table
                                columns={columns}
                                // dataSource={data}
                                dataSource={tableData}
                                pagination={false}
                                bordered
                            />
                            <div className='d-flex justify-content-between mt-2'>
                                <div>
                                    <div style={{ width: "100%" }} className='w-50'>How would you like to pay for your order?</div>
                                    <Radio style={{ padding: "1rem 0" }} defaultChecked={true}>Online Payments</Radio>
                                    <div className='mt-1'>
                                        <div>All transactions are secure and encrypted, and we never</div>
                                        <div>store your credit card information. To learn more, please</div>
                                        <div>view our privacy policy.</div>
                                    </div>
                                </div>
                                <div>
                                    <div className='total-txt'>Sub Total: <b>₹{parseFloat(subTotal).toFixed(2)}</b></div>
                                    <div className='total-txt'>IGST: <b>₹ {parseFloat(gstAmount).toFixed(2)}</b></div>
                                    <div className='total-txt'>Total: <b>₹{parseFloat(total).toFixed(2)}</b></div>
                                </div>
                            </div>
                        </div>
                        {/* <form action="/paynow" method="POST">
                            <button type="submit" className='pay-btn'>Pay Now</button>
                        </form> */}
                        <Button
                            type="primary"
                            className='pay-btn'
                            onClick={handlePayment}
                        >
                            Pay Now
                        </Button>
                    </div>
                )
            case 0:
            default:
                return (
                    <div className='d-flex padding'>
                        <div className='w-50'>
                            <div>New Customer</div>
                            <Radio style={{ padding: "1rem 0" }} defaultChecked={true}>Register Account</Radio>
                            <div>Register</div>
                            <Register type="checkout" />
                        </div>
                        <div className='w-50'>
                            <div>Login</div>
                            <Login type="checkout" />
                        </div>
                    </div>
                )
        }
    }

    return (
        <div>
            <div>
                <div className='checkout_wrapper'>
                    <h1>Checkout</h1>

                    <Steps current={current} onChange={isLoginStatus ? () => { } : onChange} labelPlacement="vertical" className='padding'>
                        <Step title="User Details" icon={<UserOutlined style={{ color: "grey" }} />} />
                        <Step title="Addresses" />
                        <Step title="Order Summary" icon={<MenuOutlined style={{ color: "grey" }} />} />
                    </Steps>

                    <Divider />
                    {renderContent()}
                </div>
                {/* } */}
            </div>

            <Modal
                visible={HTMLcontent.length}
                footer={null}
                className="paytm-modal"
                keyboard={false}
                closable={false}
            >
                <Iframe style={{ "width": "52rem", "height": "70rem" }} source={HTMLcontent} />
            </Modal>
        </div>
    )
}

export default Checkout;