import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactSVG } from 'react-svg';

import { CAUTION_IMG, AC_FLIP2, CARE_ICON_1, CARE_ICON_2, CARE_ICON_3, AC_FLIP1, CARE_ICON_4, CARE_ICON_5, CARE_ICON_6, AC_FLIP3, CARE_ICON_7, CARE_ICON_8, CARE_ICON_9, AC_FLIP4, CARE_ICON_10, CARE_ICON_11 } from '../Media';

const Care = () => {
    const Navigate = useNavigate();

    return (
        <div className='care-wrapper'>
            <div className='caution-section'>
                <ReactSVG src={CAUTION_IMG} className="caution-img" />
                <div>
                    <div className='caution_txt'>CAUTION</div>
                    <div>Your acecraft garment is special.</div>
                    <div>It needs the right care to last</div>
                    <div>longer and age well.</div>
                </div>
            </div>
            <div className='d-flex justify-content-around'>
                <img src={AC_FLIP2} alt="AC_flip" className='ac-flip-img' />
                <div>
                    <div>
                        <div className='text-1'>Wash less.</div>
                        <div className='text-2'>Wash delicately.</div>
                        <div>
                            <div>The truth is, the more you wash a cotton garment, the faster it wears out. Wash your</div>
                            <div>acecraft garments delicately by hand or in the most gentle machine cycle. It does not</div>
                            <div>need to be in water for more than 15 minutes. Always wash whites with whites and darks</div>
                            <div>with darks.</div>
                        </div>
                    </div>
                    <div className='d-flex img-wrapper'>
                        <div className='flex-center flex-column'>
                            <div className='process-txt'>DELICATE WASH</div>
                            <img src={CARE_ICON_1} alt="care_icon_1" className='process-img' />
                        </div>
                        <div className='flex-center flex-column'>
                            <div className='process-txt'>WASH INSIDE OUT</div>
                            <img src={CARE_ICON_2} alt="care_icon_2" className='process-img' />
                        </div>
                        <div className='flex-center flex-column'>
                            <div className='process-txt'>NO TWISTING</div>
                            <img src={CARE_ICON_3} alt="care_icon_3" className='process-img' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-end mt-1'>
                <div>
                    <div>
                        <div className='text-2'>Easy on the detergents.</div>
                        <div>
                            <div>Chemicals are what they are. While they clean a garment, they also take away the good</div>
                            <div>stuff. Use minimal detergent and no bleach. Avoid putting detergent directly on the fabric</div>
                            <div>that can leave spots. Dry cleaning is extreme, only your blazers will require it.</div>
                        </div>
                    </div>
                    <div className='d-flex img-wrapper'>
                        <div className='flex-center flex-column'>
                            <div className='process-txt'>MILD DETERGENT</div>
                            <img src={CARE_ICON_4} alt="care_icon_4" className='process-img' />
                        </div>
                        <div className='flex-center flex-column'>
                            <div className='process-txt'>NO BLEACH</div>
                            <img src={CARE_ICON_5} alt="care_icon_5" className='process-img' />
                        </div>
                        <div className='flex-center flex-column'>
                            <div className='process-txt'>DRY CLEANING</div>
                            <img src={CARE_ICON_6} alt="care_icon_6" className='process-img' />
                        </div>
                    </div>
                </div>
                <img src={AC_FLIP1} alt="AC_flip" className='ac-flip-img' />
            </div>
            <div className='d-flex mt-1'>
                <img src={AC_FLIP3} alt="AC_flip" className='ac-flip-img' />
                <div>
                    <div>
                        <div className='text-2'>Hand dry.</div>
                        <div>
                            <div>Those spinning and drying machines are super harsh. Hang or flat dry your acecraft</div>
                            <div>product. Avoid exposure to harsh sunlight as that can cause the colour to fade.</div>
                        </div>
                    </div>
                    <div className='d-flex img-wrapper'>
                        <div className='flex-center flex-column'>
                            <div className='process-txt'>HANG DRY</div>
                            <img src={CARE_ICON_7} alt="care_icon_7" className='process-img' />
                        </div>
                        <div className='flex-center flex-column'>
                            <div className='process-txt'>FLAT AIR DRY</div>
                            <img src={CARE_ICON_8} alt="care_icon_8" className='process-img' />
                        </div>
                        <div className='flex-center flex-column'>
                            <div className='process-txt'>NO TUMBLE DRY</div>
                            <img src={CARE_ICON_9} alt="care_icon_9" className='process-img' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-end mt-1'>
                <div>
                    <div>
                        <div className='text-2'>Correct grooming.</div>
                        <div>
                            <div>Place the iron on full heat while the garment is still damp. Iron carefully without stretching.</div>
                            <div>Use a lint roller on your blazers so that they continue to look new.</div>
                        </div>
                    </div>
                    <div className='d-flex img-wrapper'>
                        <div className='flex-center flex-column'>
                            <div className='process-txt'>STEAM IRON</div>
                            <img src={CARE_ICON_10} alt="care_icon_4" className='process-img' />
                        </div>
                        <div className='flex-center flex-column'>
                            <div className='process-txt'>USE LINT ROLLER</div>
                            <img src={CARE_ICON_11} alt="care_icon_5" className='process-img' />
                        </div>
                    </div>
                </div>
                <img src={AC_FLIP4} alt="AC_flip" className='ac-flip-img' />
            </div>
            <div className='care-footer'>
                <div className='info'>
                    <div>Follow the guidelines, wash your product right and it will look great. If you still have any issues, let us know. We want you</div>
                    <div>to love wearing your uniforms.</div>
                </div>
                <div className='box-content' onClick={() => Navigate('/page/get-help')}>REPORT AN ISSUE</div>
            </div>
        </div>
    )
};

export default Care;