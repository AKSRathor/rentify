import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined, SearchOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';
import {Space, Input, Button, Switch} from 'antd';
import { Menu } from 'antd';
const HomeNav = (props) => {
    const handleOnSwitchChange = (e)=>{
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
                < Switch className = "flex items-center justify-center mt-[6vh] m-10" checkedChildren="Tenants" unCheckedChildren="User" defaultChecked  onChange={handleOnSwitchChange}/>
            ),
    
        },
    
    ];
    const [current, setCurrent] = useState('mail');
   
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return <Menu className='flex justify-center' onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default HomeNav;