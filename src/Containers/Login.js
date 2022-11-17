import React, { useEffect } from 'react';
import { Button, Form, Input, message } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ type = "" }) => {

    console.log("type", type)
    const Navigate = useNavigate();
    const isLoginStatus = JSON.parse(localStorage.getItem("login"));

    useEffect(() => {
        if (isLoginStatus && !type) {
            Navigate(-1);
        }
    }, [isLoginStatus, Navigate, type])

    const handleSubmit = (formProps) => {
        axios.post("http://localhost:5000/api/auth/login", {
            ...formProps
        }).then((res) => {
            localStorage.setItem(
                "login",
                JSON.stringify({
                    userLogin: true,
                    token: res.data.access_token
                })
            );
            message.success("Login successful");
            if (isLoginStatus && !type) {
                Navigate('/');
            }
        })
            .catch((error) => message.error(error.response.data.message))
    };

    return (
        <div className='login-container flex-center'>
            <div className='login-border'>
                <div className='login-form'>
                    <h1>Login with Acecraft</h1>
                    <Form
                        name="login_form"
                        onFinish={handleSubmit}
                    >
                        <Form.Item
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Enter a valid email',
                                },
                            ]}
                        >
                            <Input placeholder='Username' />
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
                            <Input.Password placeholder="Password" />
                        </Form.Item>
                        <Button
                            type='primary'
                            htmlType='submit'
                            className='mt-3'
                        >
                            Login
                        </Button>
                    </Form>
                    <div className='forgot-pwd'>Forgot Password ?</div>
                </div>
            </div>
        </div>
    )
};

export default Login;