import React from 'react';
import { ACECRAFT_1, ACECRAFT_2, ACECRAFT_MAP } from '../Media';

const Production = () => {
    return (
        <div className='production_wrapper'>
            <div className='production_1'>
                <video width="100%" autoplay="autoplay" muted loop playsInline controls>
                    <source src="http://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/Banner 1.mp4" type="video/mp4" />
                </video>
                <div className='video_info'>
                    <div className='heading-txt'>This is how our uniforms are made.</div>
                    <div>We curate every step of our production, from sourcing the raw materials to the</div><div>construction of the finished uniform. We continuously refine and improve every detail</div>
                    <div>of our construction process in order to offer the highest quality product possible.</div>
                </div>
            </div>
            <div style={{ backgroundImage: `url(${ACECRAFT_MAP})` }} className='production_2'>
                <div className='prod-2_content'>
                    <div className='heading-txt'>Proudly made in India.</div>
                    <div>All our uniforms are exclusively made in India under good</div>
                    <div>working standards, high skill levels and fair wages. We have</div>
                    <div>a closed and trusted relationship with all of our suppliers</div>
                    <div>and we work towards the common goal of heightening the</div>
                    <div>standards of modern clothing production.</div>
                </div>
            </div>
            <div className='production_1'>
                <video width="100%" autoplay="autoplay" muted loop playsInline controls>
                    <source src="http://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/banner_3.mp4" type="video/mp4" />
                </video>
                <div className='video_info'>
                    <div className='heading-txt'>The making of our fabrics.</div>
                    <div>Over a thousand needles work together in unison to transform the cones of string</div>
                    <div>into a uniform roll of fabric.</div>
                    <div>Settings such as tension and density of the fabric is controlled and experimented with</div>
                    <div>at this stage to produce a smooth and durable blend.</div>
                </div>
            </div>
            <div className='production_4'>
                <div style={{ backgroundImage: `url(${ACECRAFT_1})` }} className='production_2 prod-4'>
                    <div className='prod-2_content'>
                        <div className='heading-txt'>
                            <div>Constructing our</div>
                            <div>uniforms.</div>
                        </div>
                        <div>
                            <div>This is where our uniforms start to take shape. Each</div>
                            <div>garment is carefully sewn together using tried and tested</div>
                            <div>techniques.</div>
                        </div>
                        <div className='mt-1'>
                            <div>In contrary to most mass-produced factories where each</div>
                            <div>part of the garment is assembled by a different person, our</div>
                            <div>uniforms are constructed by the same person from start to</div>
                            <div>finish.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='production_1 mrl-6'>
                <div className='flex-center'>
                    <video width="100%" autoplay="autoplay" muted loop playsInline controls>
                        <source src="http://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/Banner 5 1st half.mp4" type="video/mp4" />
                    </video>
                    <video width="100%" autoplay="autoplay" muted loop playsInline controls>
                        <source src="http://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/Banner 5 2nd half.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className='text-center branding_info'>
                    <div className='heading-txt'>Branding.</div>
                    <div>
                        <div>Your identity is integral.</div>
                        <div>We make sure that our garments have the customized logo and branding as desired by you. We use three methods to represent what you believe in:</div>
                        <div className='mt-1'>
                            <div>- Embroidery</div>
                            <div>- Screen Print</div>
                            <div>- Sublimation Print</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='production_4'>
                <div style={{ backgroundImage: `url(${ACECRAFT_2})` }} className='production_2 prod-4 bz-contain'>
                    <div className='prod-2_content'>
                        <div className='heading-txt'>Finishing quality check.</div>
                        <div>
                            <div>The garment is given a final check to ensure that the</div>
                            <div>measurements are as specified by the customer. Each</div>
                            <div>uniform is also checked for construction errors or other</div>
                            <div>irregularities.</div>
                        </div>
                        <div className='mt-1'>
                            <div>The garment is given a quick ironing and packaged</div>
                            <div>carefully before being shipped.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='production_1 mt-2'>
                <video width="100%" autoplay="autoplay" muted loop playsInline controls>
                    <source src="http://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/Assembly Line.mp4" type="video/mp4" />
                </video>
                <div className='video_info'>
                    <div className='heading-txt'>Shipped across the country.</div>
                    <div>Our uniforms are shipped nationwide using express shipping, and are delivered</div>
                    <div>straight to the preferred address of the customer.</div>
                </div>
            </div>
        </div>
    )
};

export default Production;