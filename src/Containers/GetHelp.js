import React from 'react';
import { CART_ICON_EMAIL, CART_ICON_PHONE, HELP_PAGE_BG } from '../Media';

const GetHelp = () => {
    return (
        <div className='help-wrapper'>
            <div style={{ backgroundImage: `url(${HELP_PAGE_BG})` }} className="help-bg-image p-relative flex-center">
                <div className='help-info'>
                    <h1>
                        <div>How can</div>
                        <div>we help?</div>
                    </h1>
                    <div className='d-flex'>
                        <div className='box-content flex-center'>Account/Orders</div>
                        <div className='box-content flex-center'>Payment</div>
                        <div className='box-content flex-center'>Shipping</div>
                        <div className='box-content flex-center'>Others</div>
                    </div>
                </div>
            </div>
            <div className='help-footer'>
                <div className='inner-content'>
                    <div>Call us directly at</div>
                    <div className='d-flex align-items-center'>
                        <div style={{ backgroundImage: `url(${CART_ICON_PHONE})` }} className='help-footer-img'></div>
                        <div className='bold-grey-txt'>+91 8722501111</div>
                    </div>
                    <div><span className='bold-grey-txt'>10:30am</span> to <span className='bold-grey-txt'>5:30pm</span></div>
                    <div><span className='bold-grey-txt'>Monday</span> to <span className='bold-grey-txt'>Saturday</span></div>
                </div>
                <div className='inner-content'>
                    <div>Email us at</div>
                    <div className='d-flex align-items-center'>
                        <div style={{ backgroundImage: `url(${CART_ICON_EMAIL})` }} className='help-footer-img'></div>
                        <div className='bold-grey-txt'>care@acecraft.in</div>
                    </div>
                    <div>After email we will get back</div>
                    <div>to you within 2 business days.</div>
                </div>
            </div>
        </div>
    )
};

export default GetHelp;