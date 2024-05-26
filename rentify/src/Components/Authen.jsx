import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import React, { useState, useRef } from 'react'
import { Button, Checkbox, Form, Input, Space, Typography } from 'antd';
const { Title } = Typography;


const Authen = () => {
    const [emailWritten, setEmailWritten] = useState(false)
    const [mySetOtp, setMySetOtp] = useState("infinity")

    const [myNameReg, setMyNameReg] = useState("")
    const [userNameReg, setUserNameReg] = useState("")
    const [emailReg, setEmailReg] = useState("")
    const [passReg, setPassReg] = useState("")

    let history = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const onChange = (text) => {
        console.log('onChange:', text);
    };
    const sharedProps = {
        onChange,
    };

    const handleOnReg = async()=>{
        if(!login){

            const response = await fetch("http://127.0.0.1:5000/api/post/createpost", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ownername:myNameReg, desc:userNameReg, tag:passReg, price:emailReg })
            })
            let xres = await response.json()
            if(xres.success){
                history("/post")
            }
            console.log("My response ", xres)
            localStorage.setItem("rentifyusername", xres)
        }
        else{

        }
    }
    const handleAfterOTPSent = async(e) => {
        e.preventDefault();
        setEmailWritten(true)
        let x = Math.floor(100000 + Math.random() * 900000);
        setMySetOtp(x)
        const mybody ={
            otp: x,
            to_name:userNameReg,
            to_email:emailReg
        }   
        await emailjs
                      .send("service_ypyp3vd", "template_vp87wsw", mybody, "rYfioaqahG253YRC1")
                      .then((response) => {
                        console.log('Email sent successfully:', response);
                        alert('OTP sent successfully!');

                    })
                      .catch((error) => {
                        console.error('Error sending email:', error);
                        alert('Error sending email');
                      });
    }

    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const [login, setLogin] = useState(true)
    return (
        <div className='bg-zinc-800 w-full h-screen font-white flex justify-center items-center'>
            <div className='w-30vw pt-20 pb-15 bg-white p-20 rounded-lg'>
                {login && (<Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        onChange = {((e)=>{setUsername(e.target.value)})}
                        rules={[
                            {

                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        onChange = {((e)=>{setPassword(e.target.value)})}
                        rules={[
                            {

                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <div className='flex gap-10'>

                        <Form.Item
                            name="remember"
                            valuePropName="checked"
                            wrapperCol={{
                            }}
                        >
                            <Checkbox >Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </div>
                </Form>)}
                {!login && (<Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Name"
                        name="text"
                        onChange = {((e)=>{setMyNameReg(e.target.value)})}
                        rules={[
                            {

                                message: '',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Username"
                        name="username"
                        onChange = {((e)=>{setUserNameReg(e.target.value)})}
                        rules={[
                            {

                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        onChange = {((e)=>{setPassReg(e.target.value)})}
                        rules={[
                            {

                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="email"
                        onChange = {((e)=>{setEmailReg(e.target.value)})}
                        rules={[
                            {

                                message: 'Please input your Name!',
                            },
                        ]}
                    >
                        <Space.Compact
                            style={{
                                width: '100%',
                                display: 'flex',
                                flexDirection: "column",
                                gap: "10px"
                            }}
                        >
                            <div className='flex '>

                                <Input defaultValue="" />
                                <Button onClick={handleAfterOTPSent} className='rounded-l-none rounded-r-lg' style={{ borderTopRightRadius: "5px", borderBottomRightRadius: "5px" }} type="primary">Send OTP</Button>
                            </div>
                            {emailWritten && (<div>
                                <Input.OTP variant="filled" {...sharedProps} />
                            </div>)}
                        </Space.Compact>
                    </Form.Item>
                    <div className='flex gap-10'>

                        <Form.Item
                            name="remember"
                            valuePropName="checked"
                            wrapperCol={{
                            }}
                        >
                            <Checkbox >Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Button onClick={handleOnReg} type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </div>
                </Form>)}

                <div onClick={(() => { setLogin(!login) })} className='flex w-full justify-end cursor-pointer font-blue underline h-10' style={{ alignItems: "end" }}> {!login ? (<span>Login</span>) : <span className='' >Register</span>}</div>
            </div>
        </div>
    )
}

export default Authen