import React from 'react';

const Wallet = () => {
    return (
        <div className='tab-content'>
            <div style={{ fontSize: '20px' }}>
                <div style={{ color: "#978f8f" }}>YOUR WALLET</div>
            </div>
            <div style={{ padding: "2rem 2rem" }} className='inner-content flex-center'>
                <div>Your wallet is empty .</div>
            </div>
        </div>
    )
};

export default Wallet;
