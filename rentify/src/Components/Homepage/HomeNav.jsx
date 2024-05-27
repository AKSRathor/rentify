import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined, SearchOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Space, Input, Button, Switch } from 'antd';
import { Menu, Modal } from 'antd';
const HomeNav = (props) => {
    const [current, setCurrent] = useState('mail');
    const [requestArr, setRequestArr] = useState([{ from: "", to: "", postid: "" }])
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = async () => {
        const response = await fetch(props.host+"api/auth/fetchallreq", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ to: String(localStorage.getItem("rentifyname")) }),
        })
        let xres = await response.json()
        setRequestArr(xres)
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleOnSwitchChange = (e) => {
        props.setTenant(e)
    }
    const items = [
        {
            // label: 'Search Bar',
            key: 'mail',
            icon: <SearchOutlined />,
            label: (
                <Space direction="vertical" size="middle">

                    <Space.Compact
                        style={{
                            width: '100%',
                        }}
                    >
                        <Input className='h-[5vh] m-10 ' defaultValue="Mumbai" placeholder='Enter Location ' />
                        <Button className='h-[5vh] mt-10 mb-10' type="primary">Search</Button>
                    </Space.Compact>

                </Space>
            ),

        },
        {
            // label: 'Search Bar',
            key: 'tentant',
            // icon: <SearchOutlined />,
            label: (
                <Switch className="flex items-center justify-center mt-[6vh] m-10" checkedChildren="Tenants" unCheckedChildren="User" defaultChecked onChange={handleOnSwitchChange} />
            ),

        },
        {
            // label: 'Search Bar',
            key: 'Show Requests',
            // icon: <SearchOutlined />,
            label: (
                <div className='h-[15vh] flex flex-col justify-center'>
                    <Button type="primary" onClick={showModal}>
                        Show All Requests
                    </Button>
                </div>
            ),

        },

    ];


    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return <>
        <Modal title="All Requests" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            {
                requestArr.map((i) => {
                    return <p>{i.from}</p>
                })
            }


        </Modal>
        <Menu className='flex justify-center' onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
    </>
};
export default HomeNav;