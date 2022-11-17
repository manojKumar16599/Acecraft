import React, { useEffect } from 'react';
import { Button, Form, Input, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = ({ type = "" }) => {
    const Navigate = useNavigate();
    const isLoginStatus = JSON.parse(localStorage.getItem("login"));

    useEffect(() => {
        if (isLoginStatus && !type) {
            Navigate(-1);
        }
    }, [isLoginStatus, Navigate, type])

    const handleSubmit = (formProps) => {
        axios.post("http://localhost:5000/api/auth/register", {
            ...formProps
        }).then((res) => {
            localStorage.setItem(
                "login",
                JSON.stringify({
                    userLogin: true,
                    token: res.data.access_token
                })
            );
            Navigate('/');
        })
        .catch((error) => message.error(error.response.data.message))
    };

    return (
        <div className='login-container flex-center'>
            <div className='login-border'>
                <div className='login-form'>
                    <h1>Signup with Acecraft</h1>
                    <Form
                        name="signup_form"
                        onFinish={handleSubmit}
                    >
                        <Form.Item
                            name="firstName"
                            rules={[
                                {
                                    required: true,
                                    message: 'Required field',
                                },
                            ]}
                        >
                            <Input placeholder='Student First Name' />
                        </Form.Item>
                        <Form.Item
                            name="lastName"
                            rules={[
                                {
                                    required: true,
                                    message: 'Required field',
                                },
                            ]}
                        >
                            <Input placeholder='Student Last Name' />
                        </Form.Item>
                        <Form.Item
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Enter a valid email',
                                },
                            ]}
                        >
                            <Input placeholder='Email' />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Required field',
                                },
                            ]}
                        >
                            <Input.Password placeholder='Password' />
                        </Form.Item>
                        <Form.Item
                            name="confirmPassword"
                            rules={[
                                {
                                    required: true,
                                    message: 'Required field',
                                },
                            ]}
                        >
                            <Input.Password placeholder='Confirm Password' />
                        </Form.Item>
                        <Form.Item
                            name="parentName"
                            rules={[
                                {
                                    required: true,
                                    message: 'Required field',
                                },
                            ]}
                        >
                            <Input placeholder='Parent Name' />
                        </Form.Item>
                        <Form.Item
                            name="admissionNumber"
                            rules={[
                                {
                                    required: true,
                                    message: 'Required field',
                                },
                            ]}
                        >
                            <Input placeholder='Admission Number' />
                        </Form.Item>
                        <Button
                            type='primary'
                            htmlType='submit'
                            className='mt-3'
                        >
                            Register
                        </Button>
                    </Form>
                    <div className='forgot-pwd'>Already have an account? <span className='login-txt' onClick={() => Navigate('/user/login')}>Login!</span></div>
                </div>
            </div>
        </div>
    )
};

export default Register;