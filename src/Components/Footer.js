import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FACEBOOK_LOGO, INSTA_LOGO, LINKEDIN_LOGO } from '../Media';

const Footer = () => {
    const Navigate = useNavigate();

    return (
        <div className='footer-wrapper'>
            <div className='img-wrapper'>
                <a href='https://www.facebook.com/people/Acecraft/100054617762042/' target='blank'>
                    <div style={{ backgroundImage: `url(${FACEBOOK_LOGO})` }} className='footer-img'></div>
                </a>
                <a href='https://www.instagram.com/acecraft.in/' target='blank'>
                    <div style={{ backgroundImage: `url(${INSTA_LOGO})` }} className='footer-img'></div>
                </a>
                <a href='https://www.linkedin.com/in/acecraft-clothing-4b451445/' target='blank'>
                    <div style={{ backgroundImage: `url(${LINKEDIN_LOGO})` }} className='footer-img'></div>
                </a>
            </div>
            <div className='footer-content'>
                <div onClick={() => Navigate('/page/about-us')}>ABOUT</div>
                <div onClick={() => Navigate('/page/care')}>CARE</div>
                <div onClick={() => Navigate('/page/returns')}>RETURNS</div>
                <div onClick={() => Navigate('/page/production')}>PRODUCTION</div>
                <div onClick={() => Navigate('/page/terms-condition')}>TERMS</div>
                <div onClick={() => Navigate('/page/get-help')}>GET HELP</div>
            </div>
        </div>
    )
};

export default Footer;