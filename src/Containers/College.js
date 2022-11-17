import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import {
    COLLEGE_11,
    COLLEGE_21,
    COLLEGE_3,
    COTTON_IMG,
    SCREENSHOT_1,
    SCREENSHOT_2,
    SCREENSHOT_3,
    VISCOSE_IMG,
    WOOLEN_BALL,
    WOOL_IMG
} from '../Media';

const College = () => {
    return (
        <div className='college_wrapper'>
            <div style={{ backgroundImage: `url(${COLLEGE_11})` }} className="bg-section">
                <div>
                    <div className='heading-txt'>The acecraft Collection.</div>
                    <p>
                        <div>Simple. Sharp.</div>
                        <div>Detailed perfection that makes you</div>
                        <div>look good and feel great. Put it on. It's like magic.</div>
                    </p>
                    <div className='d-flex justify-content-end'>
                        <div>Classic</div>
                        <div className='seperator'></div>
                        <div>Absolute</div>
                        <div className='seperator'></div>
                        <div>Signature</div>
                    </div>
                </div>
            </div>
            <div className='inner-content'>
                <div className='flex-center flex-column'>
                    <img src={WOOLEN_BALL} alt="Woolen_ball" className='req-imgs' />
                    <div style={{ color: '#00000096' }}>
                        <div className='header'>Naturally Cutting-Edge.</div>
                        <div>
                            <div>The ‘best of both worlds’ has a new definition. Every fabric in</div>
                            <div>the acecraft line-up is made from a blend of two fibres to</div>
                            <div>give you the best range. No tech involved - it’s just the touch</div>
                            <div>of nature.</div>
                        </div>
                    </div>
                </div>
                <div className='d-flex align-content'>
                    <img src={WOOL_IMG} alt="WOOL_IMG" className='req-imgs' />
                    <div style={{ color: '#00000096' }}>
                        <div className='header'>The Blended Wool</div>
                        <div>
                            <div>The Blended Wool is a class apart - with a mix of polyester</div>
                            <div>for its wrinkle/crease-resistance and wool for warmth and</div>
                            <div>absorbency, end your day looking the same as how you</div>
                            <div>began it.</div>
                        </div>
                    </div>
                </div>
                <div className='d-flex align-content'>
                    <div style={{ color: '#00000096' }}>
                        <div className='header'>The Blended Cotton</div>
                        <div>
                            <div>The Blended Cotton is extremely strong and breathable.</div>
                            <div>Easy to iron, this variant shrinks lesser than pure cotton and</div>
                            <div>retains its colour, which makes it a favourite choice for your</div>
                            <div>everyday college wear.</div>
                        </div>
                    </div>
                    <img src={COTTON_IMG} alt="COTTON_IMG" className='req-imgs' />
                </div>
                <div className='d-flex align-content'>
                    <img src={VISCOSE_IMG} alt="VISCOSE_IMG" className='req-imgs' />
                    <div style={{ color: '#00000096' }}>
                        <div className='header'>The Blended Viscose</div>
                        <div>
                            <div>The Blended Viscose addition combines two ends of the</div>
                            <div>spectrum - durability and a sense of softness. While the</div>
                            <div>polyester contributes to resilience and shape retention, the</div>
                            <div>viscose adds on to the overall absorbency, both sharpening</div>
                            <div>and softening your look at the same time.</div>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${COLLEGE_21})` }} className='comfy-content'>
                    <div className='align-content'>
                        <div>THE ACECRAFT FIT</div>
                        <div className='header'>
                            <div>Comfy.</div>
                            <div>Very comfy.</div>
                        </div>
                        <div>It’s not just the fabric - it’s also the fit.</div>
                        <div>shoulders and sleeves fit right while the body feels</div>
                        <div>relaxed, making it undoubtedly the best.</div>
                    </div>
                </div>
                <div className='carousel_content d-flex'>
                    <div style={{ width: '40%' }}>
                        <div className='header'>
                            <div>Your pre-trial.</div>
                            <div>Powered by our AI.</div>
                        </div>
                        <div className='mt-1'>
                            <div>The acecraft Measurement Process is one</div>
                            <div>among the world's most accurate methods.</div>
                            <div>We set up a pre-trial event in your campus</div>
                            <div>and make each one try on the right fit. No</div>
                            <div>more guessing the right size business.</div>
                        </div>
                    </div>
                    <div style={{ width: '60%' }}>
                        <Carousel
                            autoPlay={true}
                            infiniteLoop={true}
                            showThumbs={false}
                            showIndicators={false}
                            showStatus={false}
                        >
                            <div>
                                <img src={SCREENSHOT_1} alt="SCREENSHOT_1" />
                            </div>
                            <div>
                                <img src={SCREENSHOT_2} alt="SCREENSHOT_2" />
                            </div>
                            <div>
                                <img src={SCREENSHOT_3} alt="SCREENSHOT_3" />
                            </div>
                        </Carousel>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${COLLEGE_3})` }} className="footer_credits" >
                    <div className='content_wrapper'>
                        <div className='content'>
                            <div>Designer Uniforms</div>
                            <p class="signature">by</p>
                            <div className='ace-txt'>acecraft</div>
                        </div>
                        <div className='flex-center'>
                            <div className='btn'>Get In Touch</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default College;