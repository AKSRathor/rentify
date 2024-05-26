import React from 'react';
import { Divider, Typography, Flex, Tag, Button } from 'antd';
const { Title, Paragraph, Text, Link  } = Typography;

const reqArr = {
    "key": "1",
    "name": "John Brown",
    "age": 32,
    "address": "New York No. 1 Lake Park",
    "tags": ["Large", "Green Environment"],
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odit explicabo accusamus magni, eum dolores cupiditate a reiciendis obcaecati distinctio enim neque blanditiis, accusantium deserunt harum quae sit eius, nulla vitae ipsam repudiandae voluptatum suscipit inventore exercitationem? Magnam consectetur recusandae molestias nihil? Nobis voluptatibus labore iusto amet dolorem sunt numquam pariatur minima maiores, obcaecati architecto, laborum eligendi assumenda asperiores officia! Voluptates magnam consequatur alias consectetur ipsum eaque facere quibusdam voluptatem quae velit libero eius asperiores ducimus dignissimos quaerat, odit odio molestiae quia! Enim eveniet maiores dolorem. Consequatur, sint laudantium delectus laborum nisi officiis beatae obcaecati atque est cupiditate illum illo?"
}

const More = () => (
    <div className='w-[70vw] m-auto mt-10'>

        <Typography>
            <Title>Estate Description</Title>

            <Paragraph>
                {reqArr.description}
            </Paragraph>

            <Title level={2}>Tags and Buzz</Title>

            <Paragraph>
                {reqArr.tags.map((i)=>{
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

            

            <Title level={2}>Pricing</Title>
            <Paragraph className='text-3xl'>
                {reqArr.age} Thousand Dollars
            </Paragraph>

            <Button type="primary">Send Request</Button>

            
            
        </Typography>
    </div>
);
export default More;
