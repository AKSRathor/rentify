import React from 'react';
import { Divider, Typography, Flex, Tag, Button } from 'antd';
const { Title, Paragraph, Text, Link  } = Typography;
const blockContent = `AntV 是蚂蚁集团全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、不限可能的数据可视化最佳实践。得益于丰富的业务场景和用户需求挑战，AntV 经历多年积累与不断打磨，已支撑整个阿里集团内外 20000+ 业务系统，通过了日均千万级 UV 产品的严苛考验。
我们正在基础图表，图分析，图编辑，地理空间可视化，智能可视化等各个可视化的领域耕耘，欢迎同路人一起前行。`;

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
