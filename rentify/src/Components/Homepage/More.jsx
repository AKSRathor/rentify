import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Divider, Typography, Flex, Tag, Button } from 'antd';
const { Title, Paragraph, Text, Link } = Typography;
const reqArr = {
    "key": "1",
    "name": "John Brown",
    "age": 32,
    "address": "New York No. 1 Lake Park",
    "tags": ["Large", "Green Environment"],
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odit explicabo accusamus magni, eum dolores cupiditate a reiciendis obcaecati distinctio enim neque blanditiis, accusantium deserunt harum quae sit eius, nulla vitae ipsam repudiandae voluptatum suscipit inventore exercitationem? Magnam consectetur recusandae molestias nihil? Nobis voluptatibus labore iusto amet dolorem sunt numquam pariatur minima maiores, obcaecati architecto, laborum eligendi assumenda asperiores officia! Voluptates magnam consequatur alias consectetur ipsum eaque facere quibusdam voluptatem quae velit libero eius asperiores ducimus dignissimos quaerat, odit odio molestiae quia! Enim eveniet maiores dolorem. Consequatur, sint laudantium delectus laborum nisi officiis beatae obcaecati atque est cupiditate illum illo?"
}

const More = (props) => {
    const {postid} = useParams()
    const handleOnSendRequest = async()=>{
        const response = await fetch("http://127.0.0.1:5000/api/auth/sendreq", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({from:String(localStorage.getItem("rentifyname")), to:reqArrProp[0].ownerName, postid:postid}),
        })
        let xres = await response.json()
        console.log("The send request is ", xres)
    }
    const [reqArrProp, setReqArrProp] = useState([{ _id: "", ownerName: "", price: "", address: "", tags: [], desc: "" }])
    useEffect(() => {
        // console.log("The params is ", postid)

        (async () => {
            const response = await fetch("http://127.0.0.1:5000/api/post/showpost", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({postid:postid}),
            })
            let xres = await response.json()
            setReqArrProp(xres)
            console.log("The res is ", xres)
        })
        ()
        return () => {

        }
    }, [])


    return (
        <div className='w-[70vw] m-auto mt-10'>

            <Typography>
                <Title>Estate Description</Title>

                <Paragraph>
                    <span className='font-bold'>{reqArrProp[0].ownerName}</span>

                    {reqArrProp[0].desc}
                </Paragraph>

                <Title level={2}>Tags and Buzz</Title>

                <Paragraph>
                    {reqArrProp[0].tags.map((i) => {
                        return <Tag color="#108ee9">{i}</Tag>
                    })}
                </Paragraph>

                <Paragraph>
                    <ul>
                        <li>
                            <Link href="/docs/spec/proximity">Principles</Link>
                        </li>
                        <li>
                            <Link href="/docs/spec/overview">Patterns</Link>
                        </li>
                        <li>
                            <Link href="/docs/resources">Resource Download</Link>
                        </li>
                    </ul>
                </Paragraph>


                <Divider />
                <Title level={2}>Location</Title>
                <Paragraph className='text-xl'>
                    {reqArrProp[0].address}
                </Paragraph>
                <Divider />



                    
                <Title level={2}>Pricing</Title>
                <Paragraph className='text-3xl'>
                    {reqArrProp[0].price} Thousand Dollars
                </Paragraph>

                <Button onClick={handleOnSendRequest} type="primary">Send Request</Button>



            </Typography>
        </div>
    )
};
export default More;
