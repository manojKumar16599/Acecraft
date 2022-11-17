import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RightOutlined } from '@ant-design/icons';

import { RETURNS_LAPTOP, RETURNS_PAGE } from '../Media';

const Returns = () => {
    const Navigate = useNavigate();

    return (
        <div className='returns-wrapper'>
            <div className='content-1'>
                <div className='p-1'>
                    <div>Returning an acecraft uniform is as easy as ordering one.</div>
                    <div>We have a 100% exchange/refund policy within 5 days of delivery.</div>
                </div>
                <div>
                    <div className='heading-txt'>1. Request A Return</div>
                    <div>Go to your account, select Order History and initiate an exchange.</div>
                    <div>Select the new uniforms and follow the steps.</div>
                </div>
                <div style={{ backgroundImage: `url(${RETURNS_LAPTOP})`}} className="laptop-img"></div>
            </div>
            <div style={{ backgroundImage: `url(${RETURNS_PAGE})`}} className='content-2'>
                <div className='heading-txt text-center'>2. Prepare To Return</div>
                <div className='info-1'>
                    <div>Get hold of the acecraft</div>
                    <div>tamper proof bag.</div>
                    <div>Don’t have it? Use a</div>
                    <div>strong envelope instead.</div>
                </div>
                <div className='info-2'>
                    <div className='info-text'>Not Sure Yet?</div>
                    <div>
                        <div className='box-content' onClick={() => Navigate('/page/get-help')}>Get In Touch With Us</div>
                        <RightOutlined />
                    </div>
                </div>
                <div className='info-3'>
                    <div>Make sure the uniforms</div>
                    <div>are absolutely unused</div>
                    <div>and the tags are intact.</div>
                </div>
            </div>
        </div>
    )
};

export default Returns;