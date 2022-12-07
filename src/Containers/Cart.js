import React, { useEffect, useState } from 'react';
import { Input, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setProducts } from '../features/counter/counterSlice';

const Cart = () => {
    const [productCount, setProductCount] = useState(1);
    const [cartData, setCartData] = useState({});
    const [total, setTotal] = useState(0);
    const [taxAmout, setTaxAmout] = useState(0);

    const dispatch = useDispatch();
    const Navigate = useNavigate();

    useEffect(() => {
        getCartProducts();
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        let sum = 0;
        let tax = 0;
        Object.keys(cartData).forEach(subData => {
            const data = cartData[subData];
            // const cal = data.actualPrice * data.quantity;
            sum += parseInt(data.offerPrice);
            tax += ((data.actualPrice * data.quantity) / 100) * 3
        });
        setTaxAmout(tax);
        setTotal(sum);
    }, [cartData]);

    const getCartProducts = () => {
        axios.get('http://localhost:8000/getProducts')
            .then((res) => {
                const data = res.data;
                setCartData(data);
                dispatch(setProducts(data));
            })
            .catch((err) => {
                if (err) {
                    message.error('Data does not exist');
                }
            })
    };

    const updateProducts = (type, count, id) => {
        const data = {
            ...cartData,
            [`product_${id}`]: {
                ...cartData[`product_${id}`],
                quantity: type === "increment" ? count + 1 : count - 1,
                // actualPrice: type === "increment" ? cartData[`product_${id}`].actualPrice + cartData[`product_${id}`].actualPrice : cartData[`product_${id}`].actualPrice - cartData[`product_${id}`].actualPrice,
                offerPrice: type === "increment" ? cartData && cartData[`product_${id}`] && (cartData[`product_${id}`].offerPrice + cartData[`product_${id}`].price) : cartData && cartData[`product_${id}`] && cartData[`product_${id}`].offerPrice - cartData[`product_${id}`].price,
                // total: type === "increment" ? cartData[`product_${id}`].total * count : cartData[`product_${id}`].total / (count + 1)
            }
        }

        axios.put(`http://localhost:8000/updateProduct`, data)
            .then((res) => {
                const data = res.data;
                setCartData(data);
                getCartProducts();
                message.success("Quantity updated successfully");
            })
            .catch((err) => {
                if (err) {
                    message.error('Data does not exist');
                }
            }).finally(() => {
                setProductCount(count);
            })
    };

    const handleRemove = (id) => {
        axios.delete(`http://localhost:8000/deleteProduct?id=${id}`)
            .then((res) => {
                if (res.data)
                    message.success("Item removed successfully");
                getCartProducts();
            })
            .catch((err) => {
                message.error('Data does not exist');
            });
    };

    if (!Object.keys(cartData).length) {
        return (
            <div className='cart_wrapper'>
                <div className='cart_area'>
                    <div className='heading-text'>Your shopping cart is empty!</div>
                    <div className='btn' onClick={() => Navigate('/')}>Continue Shopping</div>
                </div>
            </div>
        )
    };

    return (
        <div className='cart_wrapper'>
            <h1 className='header'>Your bag total is ₹ {total + taxAmout}</h1>
            {Object.keys(cartData).map((item, index) => {
                const data = cartData[item];
                return (
                    <div className='content-wrapper border' key={index}>
                        <div className='d-flex'>
                            <div style={{ backgroundImage: `url(${data.imgURL})` }} className="product_img"></div>
                            <div className='d-flex justify-content-between w-100'>
                                <div className='info'>
                                    <h3>{data.name}</h3>
                                    <div><strong>Size:</strong> {data.selectedSize}</div>
                                </div>
                                <div>
                                    {(productCount > 1 || data.quantity > 1) &&
                                        <MinusOutlined
                                            className='c-pointer'
                                            onClick={() => updateProducts('decrement', data.quantity, data.id)}
                                        />
                                    }
                                    <Input value={data.quantity ? data.quantity : productCount} />
                                    <PlusOutlined
                                        className='c-pointer'
                                        onClick={() => updateProducts('increment', data.quantity, data.id)}
                                    />
                                </div>
                                <div>
                                    <h2>₹ {data.offerPrice}</h2>
                                    <div className='red-txt' onClick={() => handleRemove(data.id)}>Remove</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
            <div className='adjust'>
                <div className='d-flex'>
                    <div className='text-end gray-txt'>Sub Total</div>
                    <div className='text-end gray-txt'>₹ {parseFloat(total).toFixed(2)}</div>
                </div>
                <div className='d-flex'>
                    <div className='text-end gray-txt'>Shipping charges</div>
                    <div className='text-end gray-txt'>₹0</div>
                </div>
                <div className='d-flex'>
                    <div className='text-end gray-txt'>IGST</div>
                    <div className='text-end gray-txt'>₹ {parseFloat(taxAmout).toFixed(2)}</div>
                </div>
                <div className='d-flex'>
                    <h3 className='text-end'><b>Total</b></h3>
                    <h3 className='text-end'><b>₹ {parseFloat(total + taxAmout).toFixed(2)}</b></h3>
                </div>
                <div className='flex-end'>
                    <div className='btn cart-btn' onClick={() => Navigate("/")}>Continue Shopping</div>
                    <div className='btn cart-btn' onClick={() => Navigate("/checkout")}>Place Order</div>
                </div>
            </div>
        </div>
    )

};

export default Cart;