import React from 'react';

const OrderHistory = () => {
    return (
        <div className='tab-content'>
            <div style={{ fontSize: '20px' }}>
                <div style={{ color: "#978f8f" }}>YOUR ORDERS</div>
            </div>
            <div style={{ padding: "2rem 2rem" }} className='inner-content flex-center'>
                <div>You have not made any previous orders!</div>
            </div>
        </div>
    )
};

export default OrderHistory;
