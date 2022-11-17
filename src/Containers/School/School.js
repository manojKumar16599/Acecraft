import React from 'react';
// import { DownOutlined } from '@ant-design/icons';

import { SCHOOL_1, SCHOOL_2, SCHOOL_3, SCHOOL_4 } from '../../Media';

const School = () => {
    return (
        <div className='enterprise_container school_wrapper'>
            <div style={{ backgroundImage: `url(${SCHOOL_1})` }} className='enterprise_wrapper'>
                <div class="text-center bottomLink">
                    <div>Designer uniforms <strong>for the doers.</strong></div>
                    {/* <DownOutlined /> */}
                </div>
            </div>
            <div className='fixed-header mt-1'>
                <div className='flex-center'>
                    <a href="/browse/school">
                        <img src="http://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/jain.jpeg" alt="school_1" height="50px" /><br />JGI
                    </a>
                    <a href="/browse/school">
                        <img src="http://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/rvschool.png" alt="school_2" height="50px" /><br />RV
                    </a>
                    <a href="/browse/school">
                        <img src="http://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/sophias.jpg" alt="school_3" height="50px" /><br />SOPHIA
                    </a>
                    <a href="/browse/school">
                        <img src="http://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/kumarans.png" alt="school_4" height="50px" /><br />KUMARANS
                    </a>
                    <a href="/browse/new-horizon-gurukul">
                        <img src="https://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/Logo-%20New%20Horizon%20Gurukul.jpg"  alt="school_5" height="50px" /><br />NEW HORIZON <br /> GURUKUL
                    </a>
                    <a href="/browse/cisb">
                        <img src="https://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/cgis.png" alt="school_6" height="50px" /><br />CISB
                    </a>
                    <a href="/browse/new-horizon-international-school">
                        <img src="https://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/NHIS%20LOGO%20Jpeg.jpg" alt="school_7" height="50px" /><br />NHIS
                    </a>
                </div>
            </div>
            <div className='content-1 flex-center flex-column'>
                <div>Aesthetically advanced,</div>
                <div>our designer uniforms are <strong>a cut above the rest,</strong></div>
                <strong className='bold-txt'>a cut above the rest,</strong>
            </div>
            <div style={{ backgroundImage: `url(${SCHOOL_2})` }} className='content-2 flex-center flex-column p-relative'>
                <div class="text-center bottomLink">
                    <div>Perfection. Now <strong>delivering to your doorstep.</strong></div>
                    {/* <DownOutlined /> */}
                </div>
            </div>
            <div style={{ backgroundImage: `url(${SCHOOL_2})` }} className='content-2 p-relative'>
                <div className='text-center bottomLink'>
                    <div>Less hassle. <strong>More hustle.</strong></div>
                    <div>Our end-to-end e-commerce facility with</div>
                    <div><strong>superior technology enables us to</strong></div>
                    <div><strong>deliver your order right to your doorstep.</strong></div>
                </div>
            </div>
            <div className='school-content-3'>
                <div>
                    <div style={{ fontSize: '40px' }}><strong>Be at ease.</strong></div>
                    <div style={{ fontSize: '40px' }}><strong>Everyday.</strong></div>
                    <div style={{ marginTop: '1.5rem' }}>Our uniforms keep your children looking great</div>
                    <div>from the first day of school until the end-of-the-year picnic.</div>
                </div>
                <div>
                    <img src={SCHOOL_3} alt="SCHOOL_3" />
                </div>
            </div>
            <div style={{ backgroundImage: `url(${SCHOOL_4})` }} className='content-4 content-3 flex-center flex-column'>
                <div className='content flex-center flex-column'>
                    <div>Designer Uniforms</div>
                    <div className='d-flex'>
                        <div className='seperator'></div>
                        <div className='pad-1'>by</div>
                        <div className='seperator'></div>
                    </div>
                    <div className='ace-txt'>acecraft</div>
                </div>
                <div style={{ fontSize: '20px' }} className="text-center">
                    <div style={{ marginTop: '1.5rem' }}>Establish a <strong>signature look</strong> for your school.</div>
                    <div style={{ marginTop: '3rem' }}>Looking to change your supplier?</div>
                    <div style={{ marginTop: '1.5rem' }} className='flex-center'>
                        <div className='btn'>Get In Touch</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default School;