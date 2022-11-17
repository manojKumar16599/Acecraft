import React from 'react';
import { ABOUT_US_1, ABOUT_US_2, ABOUT_US_3, ABOUT_US_4, ABOUT_US_5, ABOUT_US_BG } from '../Media';

const AboutUs = () => {
    return (
        <div className='enterprise_container about_us_wrapper'>
            <div style={{ backgroundImage: `url(${ABOUT_US_BG})` }} className='enterprise_wrapper'>
                <div class="text-center bottomLink">
                    <span>Acecraft was founded in Bengaluru, India, in the summer of 2016.</span>
                </div>
            </div>
            <div className='content-1'>
                <h1>Brand Story</h1>
                <div className='mt-1'>
                    <div>Being the best, for the best.</div>
                    <div>Ever since our inception in 2016, we have always strived to change one</div>
                    <div>aspect - the stagnant nature of organizational clothing. What was initially</div>
                    <div>started as a student startup, has now evolved to become one of India's</div>
                    <div>fastest-growing clothing companies. At acecraft, we believe in creating</div>
                    <div>products that not only look premium but feel that way as well. Each</div>
                    <div>garment reflects what we stand for as a brand, as well as the organization</div>
                    <div>it is perfectly handcrafted for. Fueled by high-quality fabrics, backed by</div>
                    <div>unique product design and complemented by exquisite craftsmanship,</div>
                    <div>every product we create is an experience in itself.</div>
                    <div className='mt-1'>Welcome to the reinvented.</div>
                    <div className='mt-1'>Welcome to acecraft.</div>
                </div>

                <div className='about-info-1'>
                    <h1>What We Believe</h1>
                    <div className='flex-center w-100'>
                        <div className='w-50'>
                            <div>To reinvent uniforms and emphasize on dressing</div>
                            <div>done the smart way, focusing on product design, fit,</div>
                            <div>feel and finish.</div>
                            <div className='mt-1'>We celebrate the principles of a truly custom-made</div>
                            <div>uniform, and embrace the technology that allows us</div>
                            <div>to make it available to everyone, everywhere.</div>
                        </div>
                        <img src={ABOUT_US_1} alt="ABOUT_US_1" className='about-img w-50' />
                    </div>
                </div>
                <div style={{ backgroundColor: '#000000', color: '#978F8F', fontSize: '18px' }}>
                    <div className='about-info-1'>
                        <h1 className='grey-colors'>What we make</h1>
                        <div className='flex-center w-100'>
                            <img src={ABOUT_US_2} alt="ABOUT_US_2" className='about-img w-50' />
                            <div className='w-50'>Designer uniforms, custom-fitted for every customer.</div>
                        </div>
                    </div>
                    <div className='about-info-1'>
                        <div className='flex-center w-100'>
                            <div className='w-50'>
                                <div>We deeply believe in using only the</div>
                                <div>highest quality materials, with a</div>
                                <div>superior look and feel, and a durability</div>
                                <div>that will dramatically increase the</div>
                                <div>lifespan of the product.</div>
                            </div>
                            <img src={ABOUT_US_3} alt="ABOUT_US_3" className='about-img w-50' />
                        </div>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${ABOUT_US_4})` }} className='about-info-2 flex-end'>
                    <div className='inner-content grey-color'>
                        <div>Our materials are sourced from the</div>
                        <div>best vendors around India and are</div>
                        <div>hand-selected based on their quality,</div>
                        <div>and the ethically sound nature of their</div>
                        <div>production.</div>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${ABOUT_US_5})` }} className='about-info-2 flex-start'>
                    <div className='inner-content grey-color'>All our production is done in India.</div>
                </div>
                <div className='about-info-3'>
                    <h2 className='grey-color'>Our Team</h2>
                    <div>
                        <div className='boxed'>
                            <div>Aman Jain</div>
                            <p>CEO & Founder</p>
                        </div>
                        <div className='boxed'>
                            <div>Varun Meghani</div>
                            <p>CMO & Co- Founder</p>
                        </div>
                        <div className='boxed'>
                            <div>Santhosh S</div>
                            <p>Customer Relations Executive</p>
                        </div>
                        <div className='boxed'>
                            <div>Prajwal Ravi</div>
                            <p>Customer Relations Executive</p>
                        </div>
                        <div className='boxed'>
                            <div>Divakar R</div>
                            <p>Production Merchandiser</p>
                        </div>
                    </div>
                    <div className='mt-1'>
                        <div className='boxed'>
                            <div>Mansoor Ahmed</div>
                            <p>Junior Production Merchandiser</p>
                        </div>
                        <div className='boxed'>
                            <div>Prerana Jain</div>
                            <p>Administrator</p>
                        </div>
                        <div className='boxed'>
                            <div>Harsha</div>
                            <p>Back End Support Staff</p>
                        </div>
                        <div className='boxed'>
                            <div>Shashi Kumar</div>
                            <p>Back End Support Staff</p>
                        </div>
                        <div className='boxed'>
                            <div>Muthappa</div>
                            <p>Back End Support Staff</p>
                        </div>
                    </div>
                    <h1 className='grey-color'>Want To Join The Team?</h1>
                    <div className='mt-1 grey-color'>Send your Resume to job@acecraft.in</div>
                </div>
            </div>
        </div>
    )
};

export default AboutUs;