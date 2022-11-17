import React, { useEffect } from 'react';
import { Tabs } from 'antd';
import { useNavigate } from 'react-router-dom';

import PersonalInfo from './PersonalInfo';
import AddressBook from './AddressBook';
import OrderHistory from './OrderHistory';
import Wallet from './Wallet';
import OrderStatus from '../OrderStatus';

const Account = () => {
    const Navigate = useNavigate();
    const isLoginStatus = JSON.parse(localStorage.getItem("login"));

    useEffect(() => {
        if (!isLoginStatus) {
            Navigate(-1);
        }
    }, [isLoginStatus, Navigate]);

    return (
        <div style={{ paddingTop: '5rem' }} className='account_wrapper'>
            <Tabs
                defaultActiveKey="1"
                items={[
                    {
                        label: `PERSONAL INFORMATION`,
                        key: '1',
                        children: <PersonalInfo />,
                    },
                    {
                        label: `ADDRESS BOOK`,
                        key: '2',
                        children: <AddressBook />,
                    },
                    {
                        label: `ORDERS HISTORY`,
                        key: '3',
                        children: <OrderHistory />,
                    },
                    {
                        label: `WALLET`,
                        key: '4',
                        children: <Wallet />,
                    },
                    {
                        label: `TRACK ORDER`,
                        key: '5',
                        children: <OrderStatus />,
                    },
                ]}
            />
        </div>
    )
}

export default Account
