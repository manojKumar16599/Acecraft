import React from 'react';
import { DownOutlined } from '@ant-design/icons';

import { ENTERPRISES_1, ENTERPRISES_2, ENTERPRISES_3, ENTERPRISES_4, ENTERPRISE_FOOTER_IMG_1, ENTERPRISE_FOOTER_IMG_2, STEP_ICON_1, STEP_ICON_2, STEP_ICON_3, STEP_ICON_4, STEP_ICON_5, STEP_ICON_6 } from '../Media';

const Enterprise = () => {
    return (
        <div className='enterprise_container'>
            <div style={{ backgroundImage: `url(${ENTERPRISES_1})` }} className='enterprise_wrapper'>
                <div class="text-center bottomLink">
                    <div>Workwear that works.</div>
                    <DownOutlined />
                </div>
            </div>
            <div className='content-1'>
                <h1>Work Relaxed.</h1>
                <div>When we designed our uniforms, we wore them to work every day.</div>
                <div className='mt-1'>We still do. They’re comfy, relaxed and designed to suit your workplace.</div>
                <div className='d-flex justify-content-around'>
                    <div style={{ backgroundImage: `url(${ENTERPRISES_2})` }} className="box">
                        <h4>F(IT) MATTERS</h4>
                        <h2>A size for every one.</h2>
                    </div>
                    <div style={{ backgroundImage: `url(${ENTERPRISES_3})` }} className="box">
                        <h4>PERSONALISED BRANDING</h4>
                        <h2>Your design.
                            <div>Our customization.</div>
                        </h2>
                    </div>
                    <div style={{ backgroundImage: `url(${ENTERPRISES_4})` }} className="box">
                        <h4>TEAM UP FOR TEAM WEAR</h4>
                        <h2>
                            <div>Bulk orders</div>
                            <div>delivered</div>
                            <div>seamlessly.</div>
                        </h2>
                    </div>
                </div>
            </div>
            <div className='content-2'>
                <h1>This is how we do it.</h1>
                <div className='w-100 d-flex'>
                    <div className='step-content'>
                        <div className='d-flex align-content'>
                            <div className='pad-1'>1</div>
                            <div className='seperator'></div>
                        </div>
                        <img src={STEP_ICON_1} alt="STEP_ICON_1" />
                        <h2 className='flex-center flex-column'>
                            <div>Single line</div>
                            <div>brief</div>
                        </h2>
                    </div>
                    <div className='step-content'>
                        <div className='d-flex'>
                            <div className='seperator'></div>
                            <div className='pad-1'>2</div>
                            <div className='seperator'></div>
                        </div>
                        <img src={STEP_ICON_2} alt="STEP_ICON_2" />
                        <h2 className='flex-center flex-column'>
                            <div>Mind</div>
                            <div>mapping</div>
                        </h2>
                    </div>
                    <div className='step-content'>
                        <div className='d-flex'>
                            <div className='seperator'></div>
                            <div className='pad-1'>3</div>
                            <div className='seperator'></div>
                        </div>
                        <img src={STEP_ICON_3} alt="STEP_ICON_3" />
                        <h2 className='flex-center flex-column'>
                            <div>Design and</div>
                            <div>details</div>
                        </h2>
                    </div>
                    <div className='step-content'>
                        <div className='d-flex'>
                            <div className='seperator'></div>
                            <div className='pad-1'>4</div>
                            <div className='seperator'></div>
                        </div>
                        <img src={STEP_ICON_4} alt="STEP_ICON_4" />
                        <h2 className='flex-center flex-column'>Sampling</h2>
                    </div>
                    <div className='step-content'>
                        <div className='d-flex'>
                            <div className='seperator'></div>
                            <div className='pad-1'>5</div>
                            <div className='seperator'></div>
                        </div>
                        <img src={STEP_ICON_5} alt="STEP_ICON_5" />
                        <h2 className='flex-center flex-column'>Manufacturing</h2>
                    </div>
                    <div className='step-content'>
                        <div className='d-flex'>
                            <div className='seperator'></div>
                            <div className='pad-1'>6</div>
                        </div>
                        <img src={STEP_ICON_6} alt="STEP_ICON_6" />
                        <h2 className='flex-center flex-column'>Delivery</h2>
                    </div>
                </div>
            </div>
            <div className='content-3 p-relative'>
                <div style={{ backgroundImage: `url(${ENTERPRISE_FOOTER_IMG_1})` }} className="footer-bg"></div>
                <div style={{ backgroundImage: `url(${ENTERPRISE_FOOTER_IMG_2})` }} className="footer-bg"></div>
                <div className='content_wrapper flex-center flex-column text-center'>
                    <div className='content'>
                        <div>Designer Uniforms</div>
                        <div className='d-flex'>
                            <div className='seperator'></div>
                            <div className='pad-1'>by</div>
                            <div className='seperator'></div>
                        </div>
                        <div className='ace-txt'>acecraft</div>
                    </div>
                    <div className='flex-center'>
                        <div className='btn'>Get In Touch</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Enterprise;