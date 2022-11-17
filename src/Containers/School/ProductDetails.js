import React, { useState } from 'react';
import { Modal } from 'antd';
import { Carousel } from 'react-responsive-carousel';
import { useNavigate } from 'react-router-dom';

import ProductContent from './ProductContent';
import { renderModalContent } from './SchoolGoods';
import { schoolDetails } from './Utils';

const ProductDetails = () => {

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
        const pathname = window.location.pathname.replace("/product/", "");
        let schoolDetailsData = schoolDetails;
        let finalArr = [], columns = [];
        if (schoolDetailsData % 4 !== 0) {
            schoolDetailsData = [
                ...schoolDetailsData,
                {}
            ]
        }

        if (pathname.toLowerCase().includes('nhis')) {
            schoolDetailsData = schoolDetailsData.filter(item => item.name.toLowerCase().includes('nh') && !item.name.toLowerCase().includes('nhg') && item.url.toLowerCase() !== pathname)
        }

        if (pathname.toLowerCase().includes('cis')) {
            schoolDetailsData = schoolDetailsData.filter(item => item.name.toLowerCase().includes('cis') && item.url.toLowerCase() !== pathname)
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
        <div className='product_details_wrapper'>
            <ProductContent
                type='details'
                pageType="sellers"
            />

            <div className='bottom-content'>
                <div className='content-1'>
                    <div className='header'>Description of product</div>
                    <ProductContent type="description" />
                </div>
                <div className='content-2'>
                    <div className='header'>Related products</div>
                    <Carousel
                        infiniteLoop={true}
                        showThumbs={false}
                        showIndicators={false}
                        showStatus={false}
                    >
                        {renderRows()}
                    </Carousel>
                </div>
            </div>

            <Modal
                open={isProductOpen}
                onCancel={handleClose}
                width={modalContent === "sizeGuide" ? "80rem" : "100rem"}
                footer={null}
                destroyOnClose={true}
            >
                {renderModalContent(modalContent, productData, setModalContent)}
            </Modal>
        </div>
    )
}

export default ProductDetails;
