import React from 'react';
import { RightOutlined } from '@ant-design/icons';

import { HOME_IMG_1, HOME_IMG_2, HOME_IMG_3 } from '../Media';

import './style.css';

const HomePage = () => {
    return (
        <div>
            <div className='home-page-wrapper p-relative'>
                <div style={{ backgroundImage: `url(${HOME_IMG_1})` }} className='home-img-1'>
                    <div className='inner-content img-1'>
                        <div className='box-content'>
                            <div className='box-text-1'>Choose Class</div>
                            <div className='box-text-2'>over the common.</div>
                        </div>
                        <div className='bottom-link'>ACECRAFT FOR COLLEGES <RightOutlined /></div>
                    </div>
                </div>
                <div className='d-flex'>
                    <div className='hover-content'>
                        <div style={{ backgroundImage: `url(${HOME_IMG_2})` }} className="home-img-2">
                            <div className='inner-content img-2'>
                                <div className='box-content'>
                                    <div className='box-text-1'>A grade</div>
                                    <div className='box-text-2'>of Greatness.</div>
                                </div>
                                <div className='bottom-link'>ACECRAFT FOR SCHOOLS <RightOutlined /></div>
                            </div>
                        </div>
                    </div>
                    <div className='hover-content'>
                        <div style={{ backgroundImage: `url(${HOME_IMG_3})` }} className="home-img-2">
                            <div className='inner-content img-3'>
                                <div className='box-content'>
                                    <div className='box-text-1'>workwear</div>
                                    <div className='box-text-2'>Redefined.</div>
                                </div>
                                <div className='bottom-link'>ACECRAFT FOR ENTERPRISES <RightOutlined /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default HomePage;