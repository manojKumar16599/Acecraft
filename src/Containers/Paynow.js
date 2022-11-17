import React from 'react'
import { useSelector } from 'react-redux'

const Paynow = () => {

    const HTMLcontent = useSelector((state) => state.html);
    console.log("HTMLcontent", HTMLcontent)

    return (
        <div>
            <div style={{ "color": "red" }}>PAY NOW PAGE</div>
            {HTMLcontent.length
                ? 
                <div>
                    <iframe title='htmlContent' src={"<form method=\"post\"action=\"https://securegw-stage.paytm.in/theia/api/v1/showPaymentPage?mid=dNvqjU07537249670109&orderId=TEST_1667818307403\"name=\"paytm\"><tableborder=\"1\"><tbody><inputtype=\"hidden\"name=\"mid\"value=\"dNvqjU07537249670109\"><inputtype=\"hidden\"name=\"orderId\"value=\"TEST_1667818307403\"><inputtype=\"hidden\"name=\"txnToken\"value=\"fe795335ed3049c78a57271075f2199e1526969112097\"></tbody></table><scripttype=\"text/javascript\">document.paytm.submit();</script></form>"}></iframe>
                </div>
                : null
            }
        </div>
    )
}

export default Paynow
