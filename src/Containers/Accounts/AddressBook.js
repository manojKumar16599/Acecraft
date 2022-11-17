import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Checkbox, Select, message } from 'antd';
import axios from 'axios';

const { Option } = Select;

const AddressBook = ({ type = "", getAddress = () => {} }) => {
    const [isAddress, setIsAddress] = useState(false);

    useEffect(() => {
        if (type && type === "checkout") {
            setIsAddress(true);
        }
    }, [type]);

    const handleSubmit = (formProps) => {
        if (type === "checkout") {
            console.log("formProps", formProps);
            const bodyData = {
                ...formProps,
                user_id: new Date().getTime(),
                country: "IN"
            }
            axios.post('http://localhost:8000/addAddress', bodyData)
                .then((res) => {
                    if (res.data) {
                        getAddress();
                        message.success('Address added successfully');
                    }
                })
                .catch((err) => {
                    message.error('Something went wrong');
                });
        }
    };

    const promotedOptions = [
        { label: "Nursery", value: "nursery" },
        { label: "LKG", value: "lkg" },
        { label: "UKG", value: "ukg" },
        { label: "Grade 1", value: "grade_1" },
        { label: "Grade 2", value: "grade_2" },
        { label: "Grade 3", value: "grade_3" },
        { label: "Grade 4", value: "grade_4" },
        { label: "Grade 5", value: "grade_5" },
        { label: "Grade 6", value: "grade_6" },
        { label: "Grade 7", value: "grade_7" },
        { label: "Grade 8", value: "grade_8" },
        { label: "Grade 9", value: "grade_9" },
        { label: "Grade 10", value: "grade_10" },
        { label: "Grade 11", value: "grade_11" },
        { label: "Grade 12", value: "grade_12" },
    ]

    const renderContent = () => {
        if (isAddress) {
            return (
                <div className='tab-content'>
                    {type && type === "checkout"
                        ? null
                        : <div style={{ fontSize: '20px' }} className='d-flex justify-content-between'>
                            <div style={{ color: "#978f8f" }}>ADD NEW ADDRESSES</div>
                            <div className='c-pointer' onClick={() => setIsAddress(false)}>Close</div>
                        </div>
                    }
                    <div className='inner-content'>
                        <Form
                            name="Address_form"
                            onFinish={handleSubmit}
                            className="w-100"
                        >
                            <div style={{ color: "#978f8f", fontSize: "15px", fontWeight: "bold" }}>Student First Name</div>
                            <Form.Item
                                name="full_name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Required field',
                                    },
                                ]}
                            >
                                <Input placeholder="Name" />
                            </Form.Item>
                            <div style={{ color: "#978f8f", fontSize: "15px", fontWeight: "bold" }}>Student Last Name</div>
                            <Form.Item
                                name="student_last_name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Required field',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <div style={{ color: "#978f8f", fontSize: "15px", fontWeight: "bold" }}>Parent First Name</div>
                            <Form.Item
                                name="parent_first_name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Required field',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <div style={{ color: "#978f8f", fontSize: "15px", fontWeight: "bold" }}>Parent Last Name</div>
                            <Form.Item
                                name="parent_last_name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Required field',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <div style={{ color: "#978f8f", fontSize: "15px", fontWeight: "bold" }}>Admission Number</div>
                            <Form.Item
                                name="admission_number"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Required field',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <div style={{ color: "#978f8f", fontSize: "15px", fontWeight: "bold" }}>Grade Being Promoted To</div>
                            <Form.Item
                                name="grade_being_promoted_to"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Required field',
                                    },
                                ]}
                            >
                                <Select
                                    placeholder="Sort By:"
                                >
                                    {promotedOptions.map((item, index) => {
                                        return (
                                            <Option key={index} value={item.value}>{item.label}</Option>
                                        )
                                    })}
                                </Select>
                            </Form.Item>
                            <div style={{ color: "#978f8f", fontSize: "15px", fontWeight: "bold" }}>Address</div>
                            <Form.Item
                                name="address"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Required field',
                                    },
                                ]}
                            >
                                <Input placeholder='Address' />
                            </Form.Item>
                            <div style={{ color: "#978f8f", fontSize: "15px", fontWeight: "bold" }}>Landmark</div>
                            <Form.Item
                                name="landmark"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Required field',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <div style={{ color: "#978f8f", fontSize: "15px", fontWeight: "bold" }}>City</div>
                            <Form.Item
                                name="city"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Required field',
                                    },
                                ]}
                            >
                                <Input placeholder='City' />
                            </Form.Item>
                            <div style={{ color: "#978f8f", margin: "1.5rem 0" }}>Service available only in India</div>
                            <div style={{ color: "#978f8f", fontSize: "15px", fontWeight: "bold" }}>State</div>
                            <Form.Item
                                name="state"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Required field',
                                    },
                                ]}
                            >
                                <Input placeholder='Select State' />
                            </Form.Item>
                            <div style={{ color: "#978f8f", fontSize: "15px", fontWeight: "bold" }}>Pin Code</div>
                            <Form.Item
                                name="zip"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Required field',
                                    },
                                ]}
                            >
                                <Input placeholder='Pin Code' />
                            </Form.Item>
                            <div style={{ color: "#978f8f", fontSize: "15px", fontWeight: "bold" }}>Contact Number</div>
                            <Form.Item
                                name="phone"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Required field',
                                    },
                                ]}
                            >
                                <Input placeholder='Phone' />
                            </Form.Item>
                            <div style={{ color: "#978f8f", fontSize: "15px", fontWeight: "bold" }}>Alternate Contact Number</div>
                            <Form.Item
                                name="alternate_contact_number"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Required field',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            {type && type === "checkout"
                                ? <Form.Item
                                    name="make_default"
                                    valuePropName="checked"
                                >
                                    <Checkbox>Check if Shipping and Billing address are different.</Checkbox>
                                </Form.Item>
                                : null
                            }
                            <Button
                                type='primary'
                                htmlType='submit'
                                className='mt-3'
                            >
                                {type && type === "checkout" ? "Ship To This Address" : "Save Address"}
                            </Button>
                        </Form>
                    </div>
                </div>
            )
        } else {
            return (
                <div className='tab-content'>
                    <div style={{ fontSize: '20px' }} className='d-flex justify-content-between'>
                        <div style={{ color: "#978f8f" }}>YOUR ADDRESSES</div>
                        <div onClick={() => setIsAddress(true)} className="c-pointer">Add Address</div>
                    </div>
                    <div style={{ padding: "2rem 2rem" }} className='inner-content flex-center'>
                        <div>No address are available in your address book!</div>
                    </div>
                </div>
            )
        }
    }

    return (
        <div>{renderContent()}</div>
    )
};

export default AddressBook;
