import React from 'react';
import { Button, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

const OrderStatus = () => {
    const Navigate = useNavigate(); 

    return (
        <div className='order_status_wrapper'>
            <div className='content_section'>
                <div>
                    <div>Find</div>
                    <div>Your</div>
                    <div className='font-bold'>Order</div>
                </div>
                <span className='seperator'></span>
                <div>
                    <div className='font-bold'>Look it up with your shipping number.</div>
                    <div className='d-flex flex-column'>
                        <Input />
                        <Button
                            type="primary"
                        >
                            Continue
                        </Button>
                    </div>
                    <div className='font-small'>
                        <div>
                            <span>Wish to track your order with your Order ID? </span>
                            <span className='anchor-txt' onClick={() => Navigate("/user/login")}>Login</span>
                        </div>
                        <div>
                            <span>Need more information? </span>
                            <span className='anchor-txt'>Get In Touch</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default OrderStatus;