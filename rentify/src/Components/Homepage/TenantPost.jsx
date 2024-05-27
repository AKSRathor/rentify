import React, { useState, useRef } from 'react';
import { Button, Form, Input, InputNumber, Select, message, Space } from 'antd';




const TenantPost = (props) => {
    const [messageApi, contextHolder] = message.useMessage();
    
    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
    };
    const optionsTag = [];
    let underUseArr = []
    for (let i = 10; i < 36; i++) {
        optionsTag.push({
            value: i.toString(36) + i,
            label: i.toString(36) + i,
        });
    }
    const handleChangeTag = (value) => {
        console.log(`selected ${value}`);
        underUseArr = value
        
    };
    
    
    const handleSubmitPost = (e) => {
        console.log(e)
    }
    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
            number: '${label} is not a valid number!',
        },
        number: {
            range: '${label} must be between ${min} and ${max}',
        },
    };
    /* eslint-enable no-template-curly-in-string */
    
    const onFinish = async (values) => {
        
        console.log(values.user);
        console.log("fetch link ", props.host+"api/post/createpost")
        try {
            const response = await fetch(props.host+"api/post/createpost", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ownerName: localStorage.getItem("rentifyname"), desc: values.user.introduction, tags:underUseArr, price:values.user.age, address:values.user.location }),
            })
            let xres = await response.json()
            console.log("your post ", xres)
            if (xres.address) {
                messageApi.open({
                    type: 'success',
                    content: 'Your land successfully posted',
                  });
              
            }
        } catch (error) {
    
        }
    };
    return (
    <div className='flex w-full justify-center h-screen mt-[100px]'>
        {contextHolder}
        <Form
            className='w-full flex flex-col gap-5'
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            style={{
                maxWidth: 600,
            }}
            validateMessages={validateMessages}
        >
            <div className=''>


                <Form.Item
                    name={['user', 'location']}
                    label="Location"
                    rules={[
                        {
                            type: 'text',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name={['user', 'age']}
                    label="Price"
                    rules={[
                        {
                            type: 'number',
                            min: 0,
                            max: 99,
                        },
                    ]}
                >
                    <InputNumber />
                </Form.Item>
                <Form.Item label="tags">

                    <Select
                        mode="tags"
                        style={{
                            width: '100%',
                        }}
                        onChange={handleChangeTag}
                        tokenSeparators={[',']}
                        options={optionsTag}
                    />

                </Form.Item>
                <Form.Item name={['user', 'introduction']} label="Description">
                    <Input.TextArea />
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        ...layout.wrapperCol,
                        offset: 8,
                    }}
                >
                    <Button type="primary" onClick={handleSubmitPost} htmlType="submit">
                        Post
                    </Button>
                </Form.Item>
            </div>
        </Form>
    </div>
)};
export default TenantPost;
