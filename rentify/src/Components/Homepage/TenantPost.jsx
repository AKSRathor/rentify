import React from 'react';
import { Button, Form, Input, InputNumber } from 'antd';
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
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

const onFinish = async(values) => {
    console.log(values.user);
    // try {
    //     const response = await fetch("http://127.0.0.1:5000/api/auth/createuser", {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ name: myNameReg, username: userNameReg, password: passReg, email: emailReg })
    //     })
    //     let xres = await response.json()
    //     if (xres.success) {
    //         history("/post")
    //     }
    //     console.log("My response ", xres)
    //     localStorage.setItem("rentifyusername", xres)
    // } catch (error) {

    // }
};
const TenantPost = () => (
    <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        style={{
            maxWidth: 600,
        }}
        validateMessages={validateMessages}
    >
        <Form.Item
            name={['user', 'name']}
            label="Ownername"
            rules={[
                {
                    required: true,
                },
            ]}
        >
            <Input />
        </Form.Item>
        <Form.Item
            name={['user', 'email']}
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
                Submit
            </Button>
        </Form.Item>
    </Form>
);
export default TenantPost;
