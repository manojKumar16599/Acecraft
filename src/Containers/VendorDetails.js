import React, { useState } from 'react';
import { Modal } from 'antd';
import { useNavigate } from 'react-router-dom';
import { StarFilled } from '@ant-design/icons';

import { AIREN_MASK_IMG, SELLER_IMG } from '../Media'
import { renderModalContent } from './School/SchoolGoods';
import { schoolDetails } from './School/Utils';

const VendorDetails = ({ type = "" }) => {
    const [isProductOpen, setIsProductOpen] = useState(false);
    const [productData, setProductData] = useState({});
    const [modalContent, setModalContent] = useState('');

    const Navigate = useNavigate();

    const handleQuickView = (e, item) => {
        e.stopPropagation();
        setIsProductOpen(true);
        setProductData(item);
        setModalContent('product');
    }

    const handleClose = () => {
        if (modalContent === "sizeGuide") {
            setModalContent("product");
        } else {
            setIsProductOpen(false);
        }
    };

    const renderRows = () => {
        const schoolDetailsItems = schoolDetails;
        let schoolDetailsData = schoolDetailsItems;
        if (window.location.pathname.includes("vendor")) {
            schoolDetailsData = schoolDetailsItems.slice(0);
            schoolDetailsData.splice(1, 0, {
                name: 'AIREN MASK',
                image: AIREN_MASK_IMG,
                url: "airen-mask",
            })
        }
        let finalArr = [], columns = [];
        if (schoolDetailsData % 4 !== 0) {
            schoolDetailsData = [
                ...schoolDetailsData,
                {}
            ]
        }

        schoolDetailsData.forEach((item, index) => {
            if (item && item.image && item.name) {
                columns.push(
                    <div
                        key={index}
                        className="loop-content p-relative flex-center flex-column col-md-4 c-pointer"
                        onClick={() => Navigate(`/product/${item.url}`)}
                    >
                        <div style={{ backgroundImage: `url(${item.image})` }} className="product_img" ></div>
                        <div className='img-name'>{item.name}</div>
                        <div
                            className='quick-view'
                            onClick={(e) => handleQuickView(e, item)}
                        >
                            QUICK VIEW
                        </div>
                    </div>
                );
            }

            if ((index + 1) % 4 === 0) {
                finalArr.push(<div className="row mt-4 align-baseline">{columns}</div>);
                columns = [];
            }
        })
        return finalArr;
    };

    return (
        <div className={type === "sellers" ? 'seller_wrapper sellers grey-color' : 'seller_wrapper bg-white grey-color'}>
            {type !== "sellers"
                ?
                <div>
                    <img src={SELLER_IMG} alt="seller_img" className='seller_img' />
                    <div className='content-1'>
                        <div class="inner-content"></div>
                    </div>
                    <div className='content-2'>
                        <h3 style={{ padding: "15px 10px 54px 150px" }} className="grey-color"> Alchemy <br /></h3>
                    </div>
                </div>
                : <div>
                    <h3 className="grey-color item-text" style={{ fontSize: "32px" }}>Alchemy</h3>
                    <div className='d-flex mt-1'>
                        <div>Average Rating:</div>
                        <div>
                            <StarFilled />
                            <StarFilled />
                            <StarFilled />
                            <StarFilled />
                            <StarFilled />
                        </div>
                    </div>
                </div>
            }

            <div className={type !== "sellers" ? 'd-flex align-items-center' : "mt-1"}>
                {type === "sellers" && <div className='w-100 divider'></div>}
                <h3 className={type === "sellers" ? "grey-color mt-1" : "grey-color item-text"}>All Items</h3>
                {type !== "sellers" && <div className='w-100 divider'></div>}
            </div>

            <div className='product_details_wrapper'>{renderRows()}</div>

            <Modal
                open={isProductOpen}
                onCancel={handleClose}
                width={modalContent === "sizeGuide" ? "80rem" : "100rem"}
                footer={null}
                destroyOnClose={true}
            >
                {renderModalContent(modalContent, productData, setModalContent)}
            </Modal>
        </div >
    )
}

export default VendorDetails;
