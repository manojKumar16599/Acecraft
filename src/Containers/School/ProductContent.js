import React, { useEffect, useState } from 'react';
import { InputNumber, message, Select } from 'antd';
import ReactImageMagnify from '@blacklab/react-image-magnify';
import { useNavigate } from 'react-router-dom';
import { get } from 'lodash'

import { schoolDetails } from './Utils';
import axios from 'axios';
import { setProducts } from '../../features/counter/counterSlice';
import { useDispatch, useSelector } from 'react-redux';

const { Option } = Select;

const ProductContent = ({
    productData,
    setModalContent,
    handleChange,
    type = '',
    pageType = ''
}) => {
    const [selectedData, setSelectedData] = useState({});
    const [selectedImage, setSelectedImage] = useState('');
    // const [cartData, setCartData] = useState({});

    let pathname = window.location.pathname;
    pathname = pathname.replace("/product/", "");
    const Navigate = useNavigate();
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product);

    const getCartProducts = () => {
        axios.get('http://localhost:8000/getProducts')
            .then((res) => {
                // setCartData(res.data);
                dispatch(setProducts(res.data));
            })
            .catch((err) => {
                message.error('Data does not exist');
            })
    };

    const addCartProducts = (prodData, type = '') => {
        let data = prodData;
        delete prodData.descContent;
        delete prodData.image;
        let bodyData = {
            "product_1": {
                ...data,
                id: 1,
                quantity: 1,
                total: data.offerPrice,
                selectedSize: data && data.sizeOptions && data.sizeOptions[0]
            }
        }

        if (Object.keys(products.value).length) {
            if (Object.keys(products.value).length === 1) {
                data = products.value['product_1'];
            } else {
                data = products.value;
                var { [Object.keys(data).pop()]: lastItem } = data;
                data = lastItem;
            }

            bodyData = {
                ...prodData,
                id: data.id + 1,
                quantity: 1,
                total: data.offerPrice,
                selectedSize: data && data.sizeOptions && data.sizeOptions[0]
            }
        }

        axios.post('http://localhost:8000/addProducts', bodyData)
            .then((res) => {
                if (res.data) {
                    getCartProducts();
                    if (type === "buy_now")
                        Navigate("/cart")
                }
            })
            .catch((err) => {
                console.log("err", err)
            });
    };

    useEffect(() => {
        if (productData) {
            setSelectedData(productData);
        } else {
            let currentData = schoolDetails.filter(item => item.url === pathname)[0];
            setSelectedData(currentData);
        }
    }, [pathname, productData])

    useEffect(() => {
        getCartProducts();
        // eslint-disable-next-line
    }, []);

    if (type === "description") {
        return (
            <div className='description_wrapper'>
                {selectedData.descContent}
            </div>
        )
    }

    return (
        <div className='product_modal'>
            <div className='d-flex'>
                <div className={selectedData.hasOwnProperty("imageArr") && get(selectedData, "imageArr").length ? 'd-flex imageArr' : "d-flex"}>
                    <div>
                        {selectedData.hasOwnProperty("imageArr") && get(selectedData, "imageArr").map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    style={{ backgroundImage: `url(${item})` }}
                                    className='imageViews'
                                    onClick={() => setSelectedImage(item)}
                                ></div>
                            )
                        })}
                    </div>
                    {window.location.pathname.includes("/product") && type === "details"
                        ? <div className={productData ? 'img-wrapper' : ''}>
                            <div>
                                <ReactImageMagnify
                                    imageProps={{
                                        alt: 'CART_IMG',
                                        src: selectedImage ? selectedImage : selectedData.image,
                                        height: 600,
                                        width: 400
                                    }}
                                    magnifiedImageProps={{
                                        src: selectedImage ? selectedImage : selectedData.image,
                                        height: 1000,
                                        width: 600
                                    }}
                                    magnifyContainerProps={{
                                        height: 500,
                                        width: 300
                                    }}
                                    portalProps={{
                                        id: "portal-test-id",
                                        horizontalOffset: 10
                                    }}
                                    className={productData ? 'product_img' : 'mr-10'}
                                />
                            </div>
                        </div>
                        : <div className='img-wrapper'>
                            <div
                                style={{ backgroundImage: `url(${selectedImage ? selectedImage : selectedData.image})` }}
                                className='bg-img'
                            ></div>
                        </div>
                    }
                </div>
                <div>
                    <h1>{selectedData.name}</h1>
                    <div>Product Code: {selectedData.code}</div>
                    <div>Brand: ACECRAFT</div>
                    <div
                        onClick={() => Navigate(`/${pageType}/59980759f69b508f13469212`)}
                    >
                        <strong>Sold By:</strong> <span className='c-pointer'>Alchemy</span>
                    </div>
                    <div className='seperator'></div>

                    <div className='d-flex justify-content-between'>
                        <div>
                            <h1>₹{selectedData.offerPrice}</h1>
                        </div>
                        <div className='button-design' style={{ height: "30px" }}>{selectedData.offer}% OFF</div>
                    </div>
                    <div className='text-dec-line-thr'>₹{selectedData.actualPrice}</div>
                    <div className='seperator'></div>
                    <div className='button-design c-pointer' style={{ width: "94px" }} onClick={() => setModalContent("sizeGuide")}>SIZE GUIDE</div>
                    {selectedData.isNotSize
                        ?
                        <div>
                            <div className='d-flex' style={{ marginTop: "3rem" }}>
                                <div className='button-design size'>Length:</div>
                                <Select
                                    defaultValue={selectedData.lengthOptions[0]}
                                    style={{
                                        width: 120,
                                    }}
                                    onChange={handleChange}
                                    placeholder="Please select"
                                >
                                    {selectedData.lengthOptions.map((item, index) => (
                                        <Option value={item}>{item}</Option>
                                    ))}
                                </Select>
                            </div>
                            <div className='d-flex' style={{ marginTop: "3rem" }}>
                                <div className='button-design size'>Waist:</div>
                                <Select
                                    defaultValue={selectedData.waistOptions[0]}
                                    style={{
                                        width: 120,
                                    }}
                                    onChange={handleChange}
                                    placeholder="Please select"
                                >
                                    {selectedData.waistOptions.map((item, index) => (
                                        <Option value={item}>{item}</Option>
                                    ))}
                                </Select>
                            </div>
                        </div>
                        :
                        <div className='d-flex' style={{ marginTop: "3rem" }}>
                            <div className='button-design size'>Size:</div>
                            <Select
                                defaultValue={selectedData.hasOwnProperty("sizeOptions") && get(selectedData, "sizeOptions[0]")}
                                style={{
                                    width: 120,
                                }}
                                onChange={handleChange}
                                placeholder="Please select"
                            >
                                {selectedData.hasOwnProperty("sizeOptions") && get(selectedData, "sizeOptions").map((item, index) => (
                                    <Option value={item}>{item}</Option>
                                ))}
                            </Select>
                        </div>
                    }

                    <div className='seperator'></div>
                    <div className='button-design quantity'>Quantity</div>
                    <div className='d-flex'>
                        <InputNumber defaultValue={1} />
                        <div
                            className='button-design huge c-pointer'
                            onClick={() => addCartProducts(selectedData)}
                        >
                            Add to Cart
                        </div>
                        <div
                            className='button-design huge c-pointer'
                            onClick={() => addCartProducts(selectedData, 'buy_now')}
                        >
                            Buy Now
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductContent;
