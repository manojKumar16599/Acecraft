import React, { useState } from 'react'
import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom'

const PersonalInfo = () => {
    const [isEdit, setIsEdit] = useState(false);

    const Navigate = useNavigate();

    const handleSubmit = (formProps) => {
        console.log("formProps", formProps);
    };

    const renderContent = () => {
        const pathname = window.location.pathname;
        if (pathname.includes("change_password")) {
            return (
                <div className='tab-content'>
                    <div style={{ fontSize: '20px' }}>
                        <div style={{ color: "#978f8f" }}>CHANGE PASSWORD</div>
                    </div>
                    <div className='inner-content'>
                        <Form
                            name="change_pwd_form"
                            onFinish={handleSubmit}
                            className="w-50"
                        >
                            <div style={{ color: "#978f8f", fontSize: "15px", fontWeight: "bold" }}>Current Password:</div>
                            <Form.Item
                                name="current_password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Required field',
                                    },
                                ]}
                            >
                                <Input.Password placeholder="Current Password" />
                            </Form.Item>
                            <div style={{ color: "#978f8f", fontSize: "15px", fontWeight: "bold" }}>New Password:</div>
                            <Form.Item
                                name="new_password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Required field',
                                    },
                                ]}
                            >
                                <Input.Password placeholder="New Password" />
                            </Form.Item>
                            <div style={{ color: "#978f8f", fontSize: "15px", fontWeight: "bold" }}>Confirm Password</div>
                            <Form.Item
                                name="confirm_password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Required field',
                                    },
                                ]}
                            >
                                <Input.Password placeholder="Confirm Password" />
                            </Form.Item>
                            <Button
                                type='primary'
                                htmlType='submit'
                                className='mt-3'
                            >
                                Submit
                            </Button>
                        </Form>
                        <div
                            className='btn'
                            onClick={() => Navigate("/account/profile")}
                        >
                            Cancel
                        </div>
                    </div>
                </div>
            )
        } else if (isEdit) {
            return (
                <div className='tab-content'>
                    <div style={{ fontSize: '20px' }} className='d-flex justify-content-between'>
                        <div style={{ color: "#978f8f" }}>EDIT INFO</div>
                        <div className='c-pointer' onClick={() => setIsEdit(false)}>Close</div>
                    </div>
                    <div className='inner-content'>
                        <Form
                            name="change_pwd_form"
                            onFinish={handleSubmit}
                            className="w-100"
                        >
                            <div style={{ color: "#978f8f", fontSize: "15px", fontWeight: "bold" }}>First Name</div>
                            <Form.Item
                                name="first_name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Required field',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <div style={{ color: "#978f8f", fontSize: "15px", fontWeight: "bold" }}>Last Name</div>
                            <Form.Item
                                name="last_name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Required field',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <div style={{ color: "#978f8f", fontSize: "15px", fontWeight: "bold" }}>Phone</div>
                            <Form.Item
                                name="phone"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Required field',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Button
                                type='primary'
                                htmlType='submit'
                            >
                                Save User
                            </Button>
                        </Form>
                    </div>
                </div>
            )
        } else {
            return (
                <div className='tab-content'>
                    <div style={{ fontSize: '20px' }} className='d-flex justify-content-between'>
                        <div style={{ color: "#978f8f" }}>YOUR INFO</div>
                        <div className='d-flex'>
                            <div className='c-pointer' onClick={() => Navigate("/account/change_password")}>Change Password</div>
                            <div style={{ marginLeft: "5rem" }} className='c-pointer' onClick={() => setIsEdit(true)}>Edit</div>
                        </div>
                    </div>
                    <div className='inner-content'>
                        <div style={{ width: "25%" }} className='d-flex justify-content-between'>
                            <div>NAME</div>
                            <div>name</div>
                        </div>
                        <div style={{ marginTop: "2rem", width: "25%" }} className='d-flex justify-content-between'>
                            <div>EMAIL</div>
                            <div>email</div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    return (
        <div>{renderContent()}</div>
    )
}

export default PersonalInfo
