import React, { useEffect, useState } from 'react';
import { Checkbox, InputNumber, Modal, Select } from 'antd';
import { get } from 'lodash'

import { SCHOOL_5, SIZE_GUIDE } from '../../Media';
import { schoolDetails } from './Utils';
import ProductContent from './ProductContent';
import { useNavigate } from 'react-router-dom';

const { Option } = Select;

export const renderModalContent = (key, productData, setModalContent, handleChange, setIsProductOpen = () => { }) => {
    switch (key) {
        case "sizeGuide":
            return (
                <div className='product_modal'>
                    <h2>SIZE GUIDE</h2>
                    <div className='flex-center'>
                        <img src={SIZE_GUIDE} alt="SIZE_GUIDE" className='size_guide' />
                    </div>
                </div>
            )
        case "product":
        default:
            return (
                <ProductContent
                    productData={productData}
                    setModalContent={setModalContent}
                    handleChange={handleChange}
                    type="general"
                    pageType="vendor"
                />
            )
    }
}

const SchoolGoods = () => {

    const [isProductOpen, setIsProductOpen] = useState(false);
    const [isDisplayFilters, setIsDisplayFilters] = useState(false);
    const [productData, setProductData] = useState({});
    const [modalContent, setModalContent] = useState('');
    const [finalArrData, setFinalArrData] = useState(schoolDetails);
    const [priceFilter, setPriceFilter] = useState("");
    const [topFilterValue, setTopFilterValue] = useState({});


    useEffect(() => {
        if (schoolDetails.length) {
            setFinalArrData(schoolDetails);
        }
    }, [schoolDetails]);

    const Navigate = useNavigate();
    const pathname = window.location.pathname.replace("/browse/", "");

    const boyProducts = finalArrData.filter(item => item.hasOwnProperty('gender') && get(item, 'gender').includes("boys"));
    const girlProducts = finalArrData.filter(item => item.hasOwnProperty('gender') && !get(item, 'gender').includes("boys"));
    const nh_grade_1 = finalArrData.filter(item => item.hasOwnProperty('grade') && get(item, 'grade').includes("nhg_1"));
    const nh_grade_2 = finalArrData.filter(item => item.hasOwnProperty('grade') && !get(item, 'grade').includes("nhg_2"));
    const nh_grade_3 = finalArrData.filter(item => item.hasOwnProperty('grade') && get(item, 'grade').includes("nhg_3"));
    const nh_grade_4 = finalArrData.filter(item => item.hasOwnProperty('grade') && !get(item, 'grade').includes("nhg_4"));

    useEffect(() => {
        if (pathname.toLowerCase() === "new-horizon-gurukul") {
            setFinalArrData(schoolDetails.filter(item => item.hasOwnProperty("school") && get(item, "school").includes("new-horizon-gurukul")))
        } else if (pathname.toLowerCase() === "cisb") {
            setFinalArrData(schoolDetails.filter(item => get(item, "name").toLowerCase().includes("cis")))
        } else if (pathname.toLowerCase() === "new-horizon-international-school") {
            setFinalArrData(schoolDetails.filter(item => item.hasOwnProperty("school") && get(item, "school").includes("new-horizon-international-school")))
        } else {
            setFinalArrData(schoolDetails);
        }
    }, [pathname])


    const genderOptions = [
        {
            label: <div>Boys <label>({boyProducts.length})</label></div>,
            value: 'boys',
        },
        {
            label: <div>Girls <label>({girlProducts.length})</label></div>,
            value: 'girls',
        }
    ];

    const gradeOptions = [
        {
            label: <div>NHG Grade 1-4 <label>({nh_grade_1.length})</label></div>,
            value: 'nhg_1',
        },
        {
            label: <div>NHG Grade 11-12 <label>({nh_grade_2.length})</label></div>,
            value: 'nhg_2',
        },
        {
            label: <div>NHG Grade 5-10 <label>({nh_grade_3.length})</label></div>,
            value: 'nhg_3',
        },
        {
            label: <div>NHIS Nursery-Grade 5 <label>({nh_grade_4.length})</label></div>,
            value: 'nhg_4',
        }
    ];

    const brandOptions = [
        {
            label: <div>Acecraft <label>({finalArrData.length})</label></div>,
            value: 'acecraft',
        }
    ];

    const handleChange = (value) => {
        setPriceFilter(value);
    };

    const handleClose = () => {
        if (modalContent === "sizeGuide") {
            setModalContent("product");
        } else {
            setIsProductOpen(false);
        }
    };

    const handleQuickView = (e, item) => {
        e.stopPropagation();
        setIsProductOpen(true);
        setProductData(item);
        setModalContent('product');
    }

    const renderRows = () => {
        let schoolDetailsData = schoolDetails;
        let finalArr = [], columns = [];
        if (schoolDetailsData % 3 !== 0) {
            schoolDetailsData = [
                ...schoolDetailsData,
                {}
            ]
        }

        if (pathname.toLowerCase() === "new-horizon-gurukul") {
            schoolDetailsData = schoolDetails.filter(item => item.hasOwnProperty("school") && get(item, "school").includes("new-horizon-gurukul"));
        } else if (pathname.toLowerCase() === "cisb") {
            schoolDetailsData = schoolDetails.filter(item => get(item, "name").toLowerCase().includes("cis"));
        } else if (pathname.toLowerCase() === "new-horizon-international-school") {
            schoolDetailsData = schoolDetails.filter(item => item.hasOwnProperty("school") && get(item, "school").includes("new-horizon-international-school"));
        }

        if (priceFilter === "lowToHigh") {
            schoolDetailsData = schoolDetailsData.sort((a, b) => a.offerPrice - b.offerPrice);
        } else if (priceFilter === "HighToLow") {
            schoolDetailsData = schoolDetailsData.sort((a, b) => b.offerPrice - a.offerPrice);
        } else if (priceFilter === "ascOrder") {
            //Ascending Order
            schoolDetailsData = schoolDetailsData.sort((a, b) => (b.url > a.url ? -1 : 1));
        } else if (priceFilter === "dscOrder") {
            //Descending Order
            schoolDetailsData = schoolDetailsData.sort((a, b) => (a.url > b.url ? -1 : 1));
        }

        if (topFilterValue.hasOwnProperty('gender')) {
            if (topFilterValue && topFilterValue.gender && topFilterValue.gender.includes("boys")) {
                schoolDetailsData = schoolDetailsData.filter(item => item && item.gender && item.gender.includes("boys"));
            } else if (topFilterValue && topFilterValue.gender && topFilterValue.gender.includes("girls")) {
                schoolDetailsData = schoolDetailsData.filter(item => item && item.gender && !item.gender.includes("boys"));
            } else if (get(topFilterValue, 'gender').includes("boys", "girls")) {
                schoolDetailsData = schoolDetails;
            }
        }

        if (topFilterValue.hasOwnProperty('grade')) {
            if (get(topFilterValue, "grade").includes("nhg_1")) {
                schoolDetailsData = schoolDetailsData.filter(item => item && item.grade && item.grade.includes("nhg_1"));
            } else if (get(topFilterValue, "grade").includes("nhg_2")) {
                schoolDetailsData = schoolDetailsData.filter(item => item && item.grade && item.grade.includes("nhg_2"));
            } else if (get(topFilterValue, "grade").includes("nhg_3")) {
                schoolDetailsData = schoolDetailsData.filter(item => item && item.grade && item.grade.includes("nhg_3"));
            } else if (get(topFilterValue, "grade").includes("nhg_4")) {
                schoolDetailsData = schoolDetailsData.filter(item => item && item.grade && item.grade.includes("nhg_4"));
            }
        }

        schoolDetailsData.forEach((item, index) => {
            if (item && item.image && item.name) {
                // prepare the array
                columns.push(
                    <div
                        key={index}
                        className="loop-content p-relative flex-center flex-column col-md-4 c-pointer"
                        onClick={() => Navigate(`/product/${item.url}`)}
                    >
                        <div style={{ backgroundImage: `url(${item.image})` }} className="cart-img" ></div>
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

            // after three items add a new row
            if ((index + 1) % 3 === 0) {
                finalArr.push(<div className="row mt-4 align-baseline">{columns}</div>);
                columns = [];
            }
        })
        return finalArr;
    };

    const onFilterChange = (value, name) => {
        if (value.length && name) {
            setTopFilterValue({
                ...topFilterValue,
                [name]: value
            });
        } else {
            let data = topFilterValue;
            delete data[name]
            setTopFilterValue(data);
        }
    };

    return (
        <div className='schoolGoods_container'>
            <div style={{ backgroundImage: `url(${SCHOOL_5})` }} className='schoolGoods_wrapper flex-center flex-column text-center'>
                <div>Decode</div>
                <div>your kind of designer uniforms</div>
            </div>
            <div className='uniform_content p-relative'>
                <div className='flex-center'>
                    <div className='filter-content' onMouseOver={() => setIsDisplayFilters(true)} onMouseLeave={() => setIsDisplayFilters(false)}>
                        <div>PRICE</div>
                        <div>BRAND</div>
                        {pathname !== "cisb" && <div>GENDER</div>}
                        {pathname !== "cisb" && <div>GRADE</div>}
                    </div>
                </div>
                <div
                    className={isDisplayFilters ? 'd-flex display-content d-block' : 'd-flex display-content'}
                    onMouseOver={() => setIsDisplayFilters(true)}
                    onMouseLeave={() => setIsDisplayFilters(false)}
                >
                    <div className='d-flex mt-1'>
                        <div className='d-flex w-30'>
                            <div className='d-flex'>
                                <InputNumber placeholder='From' /> - <InputNumber placeholder='To' />
                            </div>
                            <div className='button-design flex-center'>Go</div>
                        </div>

                        <Checkbox.Group
                            options={brandOptions}
                            className="w-30 d-flex align-items-center flex-column mt-1"
                            onChange={(e) => onFilterChange(e, "brand")}
                        />

                        {pathname !== "cisb" && <Checkbox.Group
                            options={genderOptions}
                            className="w-30 d-flex align-items-start flex-column mt-1 pl-4"
                            onChange={(e) => onFilterChange(e, "gender")}
                        />}
                        {pathname !== "cisb" && <Checkbox.Group
                            options={gradeOptions}
                            className="w-30  mt-1"
                            onChange={(e) => onFilterChange(e, "grade")}
                        />}
                    </div>
                </div>

                <div style={{ padding: '0 1rem' }}>
                    <div className='d-flex justify-content-between mt-2 main-header'>
                        <div className='item-txt'><strong>{window.location.pathname.includes("browse") ? `${pathname.replace("-", " ").toUpperCase()}` : "SCHOOL"}</strong> - {finalArrData.length} items</div>
                        <Select
                            placeholder="Sort By:"
                            onChange={handleChange}
                        >
                            <Option value="lowToHigh">Price: Low to High</Option>
                            <Option value="HighToLow">Price: High to Low</Option>
                            <Option value="ascOrder">Name: Ascending Order</Option>
                            <Option value="dscOrder">Name: Descending Order</Option>
                        </Select>
                    </div>

                    <div className='main-content'>
                        {pathname === "cisb"
                            ? <div>Canadian International School Bangalore</div>
                            : (pathname === "new-horizon-gurukul"
                                ? <div>New Horizon Gurukul</div>
                                : (pathname === "new-horizon-international-school"
                                    ? <div>NEW HORIZON INTERNATIONAL SCHOOL</div>
                                    : <p>
                                        <span style={{ fontSize: '18px' }}><strong>NEW HORIZON GURUKUL</strong></span>
                                    </p>
                                )
                            )
                        }

                        <div>
                            {renderRows()}
                        </div>
                    </div>
                </div>
            </div>

            <Modal
                open={isProductOpen}
                onCancel={handleClose}
                width={modalContent === "sizeGuide" ? "80rem" : "100rem"}
                footer={null}
                destroyOnClose={true}
            >
                {renderModalContent(modalContent, productData, setModalContent, handleChange, setIsProductOpen)}
            </Modal>
        </div>
    )
};

export default SchoolGoods;