import { message } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import { setProducts } from '../features/counter/counterSlice';

import {
    COMMENTS_LOGO,
    ORDER_STATUS_LOGO,
    PROFILE_LOGO,
    REGISTER_LOGO,
    SETTING_ICON,
    SHOPPING_CART,
    SIGNIN_LOGO
} from '../Media';
import './style.css';

const Header = () => {
    const [isHover, setIsHover] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [count, setCount] = useState(0);

    const products = useSelector((state) => state.product);
    const dispatch = useDispatch();


    const Navigate = useNavigate();

    useEffect(() => {
        getCartProducts();
        // eslint-disable-next-line
    }, []);

    const getCartProducts = () => {
        axios.get('http://localhost:8000/getProducts')
            .then((res) => {
                const data = res.data;
                dispatch(setProducts(data));
            })
            .catch((err) => {
                if (err) {
                    message.error('Data does not exist');
                }
            })
    };

    useEffect(() => {
        var cartCount = 0;
        if (products.value) {
            Object.keys(products.value).forEach(subData => {
                const data = products.value[subData];
                cartCount += parseInt(data.quantity)
            });
            setCount(cartCount);
        }
    }, [products]);

    let data = [
        {
            label: "Sign In",
            link: "/user/login",
            img: SIGNIN_LOGO,
            src: 'beforeLogin'
        },
        {
            label: "Register",
            link: "/user/register",
            img: REGISTER_LOGO,
            src: 'beforeLogin'
        },
        {
            label: "Order Status",
            link: "/page/order-status",
            img: ORDER_STATUS_LOGO,
            src: 'afterLogin'
        },
        {
            label: "Contact",
            link: "/page/get-help",
            img: COMMENTS_LOGO,
            src: 'afterLogin'
        },
    ];

    let menuOptions = data;

    const isLoginStatus = JSON.parse(localStorage.getItem("login"));

    if (isLoginStatus && isLoginStatus.userLogin) {
        menuOptions = menuOptions.filter(item => item.src !== "beforeLogin");
        menuOptions = [
            ...menuOptions,
            {
                label: "Account",
                link: "/account/profile",
                img: PROFILE_LOGO,
                src: 'afterLogin'
            },
        ]
    }

    useEffect(() => {
        if (isLoginStatus) {
            setIsLogin(true);
        } else {
            setIsLogin(false);
        }
    }, [isLoginStatus]);

    const navigate = useNavigate();
    const key = window.location.pathname.replace('/page/', '');

    const logOut = () => {
        localStorage.removeItem("login");
        setIsLogin(false);
        if (window.location.pathname === "/account/profile") {
            Navigate("/");
        }
    };

    return (
        <div className='header-container'>
            <div className='title'>acecraft</div>
            <div className='p-relative'>
                <div className='flex-center tab-wrapper'>
                    <div
                        onClick={() => navigate('/page/school')}
                        className={key === 'school' ? "border" : ""}
                    >
                        SCHOOL
                    </div>
                    <div
                        onClick={() => navigate('/page/college')}
                        className={key === 'college' ? "border" : ""}
                    >
                        COLLEGE
                    </div>
                    <div
                        onClick={() => navigate('/page/enterprise')}
                        className={key === 'enterprise' ? "border" : ""}
                    >
                        ENTERPRISE
                    </div>
                    <div
                        onClick={() => navigate('/blog')}
                        className={window.location.pathname.includes('/blog') ? "border d-flex p-relative" : "d-flex p-relative"}
                    >
                        NOTES <span className='small-dot'></span>
                    </div>
                    <div
                        className={key === '/product/airen-mask' ? "border" : ""}
                        onClick={() => navigate('/product/airen-mask')}
                    >
                        AIREN MASK
                    </div>
                </div>
                <div className='image-wrapper'>
                    <img src={SETTING_ICON} alt="setting_icon" className='setting-icon' onMouseOver={() => setIsHover(true)} />
                    <img src={SHOPPING_CART} alt="cart_icon" className='cart-icon' onClick={() => navigate('/cart')} />
                    <div className='cart-notification'>{count}</div>
                </div>
                <div className={isHover ? 'dropdown hover' : 'dropdown'} onMouseLeave={() => setIsHover(false)}>
                    {menuOptions.map((item, index) => {
                        return (
                            <div className='option' onClick={() => navigate(item.link)} key={index}>
                                <div className='d-flex float-right c-pointer'>
                                    <span className='option-txt'>{item.label}</span>
                                    <span className='seperator'></span>
                                    <ReactSVG src={item.img} alt={item.img} className='option-img' />
                                </div>
                            </div>
                        )
                    })}
                    {isLogin
                        ? <div
                            className='logout-link'
                            onClick={logOut}
                        >
                            Logout
                        </div>
                        : null
                    }
                </div>
            </div>
        </div>
    )
};

export default Header;