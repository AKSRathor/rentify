import React, { useEffect, useState } from 'react';
import { Space, Table, Tag } from 'antd';
import { useNavigate } from 'react-router-dom';


const data = [
  {
    "key": "1",
    "name": "John Brown",
    "age": 32,
    "address": "New York No. 1 Lake Park",
    "tags": ["Large", "Green Environment"],
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odit explicabo accusamus magni, eum dolores cupiditate a reiciendis obcaecati distinctio enim neque blanditiis, accusantium deserunt harum quae sit eius, nulla vitae ipsam repudiandae voluptatum suscipit inventore exercitationem? Magnam consectetur recusandae molestias nihil? Nobis voluptatibus labore iusto amet dolorem sunt numquam pariatur minima maiores, obcaecati architecto, laborum eligendi assumenda asperiores officia! Voluptates magnam consequatur alias consectetur ipsum eaque facere quibusdam voluptatem quae velit libero eius asperiores ducimus dignissimos quaerat, odit odio molestiae quia! Enim eveniet maiores dolorem. Consequatur, sint laudantium delectus laborum nisi officiis beatae obcaecati atque est cupiditate illum illo?"
  },
  {
    "key": "2",
    "name": "Jim Green",
    "age": 42,
    "address": "London No. 1 Lake Park",
    "tags": ["Main road"],
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odit explicabo accusamus magni, eum dolores cupiditate a reiciendis obcaecati distinctio enim neque blanditiis, accusantium deserunt harum quae sit eius, nulla vitae ipsam repudiandae voluptatum suscipit inventore exercitationem? Magnam consectetur recusandae molestias nihil? Nobis voluptatibus labore iusto amet dolorem sunt numquam pariatur minima maiores, obcaecati architecto, laborum eligendi assumenda asperiores officia! Voluptates magnam consequatur alias consectetur ipsum eaque facere quibusdam voluptatem quae velit libero eius asperiores ducimus dignissimos quaerat, odit odio molestiae quia! Enim eveniet maiores dolorem. Consequatur, sint laudantium delectus laborum nisi officiis beatae obcaecati atque est cupiditate illum illo?"
  },
  {
    "key": "3",
    "name": "Joe Black",
    "age": 32,
    "address": "Sydney No. 1 Lake Park",
    "tags": ["Park nearby", "Swimming Pool"],
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odit explicabo accusamus magni, eum dolores cupiditate a reiciendis obcaecati distinctio enim neque blanditiis, accusantium deserunt harum quae sit eius, nulla vitae ipsam repudiandae voluptatum suscipit inventore exercitationem? Magnam consectetur recusandae molestias nihil? Nobis voluptatibus labore iusto amet dolorem sunt numquam pariatur minima maiores, obcaecati architecto, laborum eligendi assumenda asperiores officia! Voluptates magnam consequatur alias consectetur ipsum eaque facere quibusdam voluptatem quae velit libero eius asperiores ducimus dignissimos quaerat, odit odio molestiae quia! Enim eveniet maiores dolorem. Consequatur, sint laudantium delectus laborum nisi officiis beatae obcaecati atque est cupiditate illum illo?"
  },
  {
    "key": "4",
    "name": "Jessica Smith",
    "age": 27,
    "address": "San Francisco No. 2 Lake Park",
    "tags": ["Quiet", "Sunny"],
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odit explicabo accusamus magni, eum dolores cupiditate a reiciendis obcaecati distinctio enim neque blanditiis, accusantium deserunt harum quae sit eius, nulla vitae ipsam repudiandae voluptatum suscipit inventore exercitationem? Magnam consectetur recusandae molestias nihil? Nobis voluptatibus labore iusto amet dolorem sunt numquam pariatur minima maiores, obcaecati architecto, laborum eligendi assumenda asperiores officia! Voluptates magnam consequatur alias consectetur ipsum eaque facere quibusdam voluptatem quae velit libero eius asperiores ducimus dignissimos quaerat, odit odio molestiae quia! Enim eveniet maiores dolorem. Consequatur, sint laudantium delectus laborum nisi officiis beatae obcaecati atque est cupiditate illum illo?"
  },
  {
    "key": "5",
    "name": "Michael White",
    "age": 35,
    "address": "Toronto No. 3 Lake Park",
    "tags": ["Downtown", "Public Transport"],
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odit explicabo accusamus magni, eum dolores cupiditate a reiciendis obcaecati distinctio enim neque blanditiis, accusantium deserunt harum quae sit eius, nulla vitae ipsam repudiandae voluptatum suscipit inventore exercitationem? Magnam consectetur recusandae molestias nihil? Nobis voluptatibus labore iusto amet dolorem sunt numquam pariatur minima maiores, obcaecati architecto, laborum eligendi assumenda asperiores officia! Voluptates magnam consequatur alias consectetur ipsum eaque facere quibusdam voluptatem quae velit libero eius asperiores ducimus dignissimos quaerat, odit odio molestiae quia! Enim eveniet maiores dolorem. Consequatur, sint laudantium delectus laborum nisi officiis beatae obcaecati atque est cupiditate illum illo?"
  },
  {
    "key": "6",
    "name": "Sarah Taylor",
    "age": 29,
    "address": "Melbourne No. 4 Lake Park",
    "tags": ["Family-friendly", "Safe"],
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odit explicabo accusamus magni, eum dolores cupiditate a reiciendis obcaecati distinctio enim neque blanditiis, accusantium deserunt harum quae sit eius, nulla vitae ipsam repudiandae voluptatum suscipit inventore exercitationem? Magnam consectetur recusandae molestias nihil? Nobis voluptatibus labore iusto amet dolorem sunt numquam pariatur minima maiores, obcaecati architecto, laborum eligendi assumenda asperiores officia! Voluptates magnam consequatur alias consectetur ipsum eaque facere quibusdam voluptatem quae velit libero eius asperiores ducimus dignissimos quaerat, odit odio molestiae quia! Enim eveniet maiores dolorem. Consequatur, sint laudantium delectus laborum nisi officiis beatae obcaecati atque est cupiditate illum illo?"
  },
  {
    "key": "7",
    "name": "David Johnson",
    "age": 41,
    "address": "Berlin No. 5 Lake Park",
    "tags": ["Historic", "Tourist Spot"],
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odit explicabo accusamus magni, eum dolores cupiditate a reiciendis obcaecati distinctio enim neque blanditiis, accusantium deserunt harum quae sit eius, nulla vitae ipsam repudiandae voluptatum suscipit inventore exercitationem? Magnam consectetur recusandae molestias nihil? Nobis voluptatibus labore iusto amet dolorem sunt numquam pariatur minima maiores, obcaecati architecto, laborum eligendi assumenda asperiores officia! Voluptates magnam consequatur alias consectetur ipsum eaque facere quibusdam voluptatem quae velit libero eius asperiores ducimus dignissimos quaerat, odit odio molestiae quia! Enim eveniet maiores dolorem. Consequatur, sint laudantium delectus laborum nisi officiis beatae obcaecati atque est cupiditate illum illo?"
  },
  {
    "key": "8",
    "name": "Emily Brown",
    "age": 34,
    "address": "Paris No. 6 Lake Park",
    "tags": ["Romantic", "Luxury"],
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odit explicabo accusamus magni, eum dolores cupiditate a reiciendis obcaecati distinctio enim neque blanditiis, accusantium deserunt harum quae sit eius, nulla vitae ipsam repudiandae voluptatum suscipit inventore exercitationem? Magnam consectetur recusandae molestias nihil? Nobis voluptatibus labore iusto amet dolorem sunt numquam pariatur minima maiores, obcaecati architecto, laborum eligendi assumenda asperiores officia! Voluptates magnam consequatur alias consectetur ipsum eaque facere quibusdam voluptatem quae velit libero eius asperiores ducimus dignissimos quaerat, odit odio molestiae quia! Enim eveniet maiores dolorem. Consequatur, sint laudantium delectus laborum nisi officiis beatae obcaecati atque est cupiditate illum illo?"
  },
  {
    "key": "9",
    "name": "James Williams",
    "age": 50,
    "address": "Rome No. 7 Lake Park",
    "tags": ["Cultural", "Ancient Ruins"],
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odit explicabo accusamus magni, eum dolores cupiditate a reiciendis obcaecati distinctio enim neque blanditiis, accusantium deserunt harum quae sit eius, nulla vitae ipsam repudiandae voluptatum suscipit inventore exercitationem? Magnam consectetur recusandae molestias nihil? Nobis voluptatibus labore iusto amet dolorem sunt numquam pariatur minima maiores, obcaecati architecto, laborum eligendi assumenda asperiores officia! Voluptates magnam consequatur alias consectetur ipsum eaque facere quibusdam voluptatem quae velit libero eius asperiores ducimus dignissimos quaerat, odit odio molestiae quia! Enim eveniet maiores dolorem. Consequatur, sint laudantium delectus laborum nisi officiis beatae obcaecati atque est cupiditate illum illo?"
  },
  {
    "key": "10",
    "name": "Mary Wilson",
    "age": 31,
    "address": "Amsterdam No. 8 Lake Park",
    "tags": ["Canal View", "Biking"],
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odit explicabo accusamus magni, eum dolores cupiditate a reiciendis obcaecati distinctio enim neque blanditiis, accusantium deserunt harum quae sit eius, nulla vitae ipsam repudiandae voluptatum suscipit inventore exercitationem? Magnam consectetur recusandae molestias nihil? Nobis voluptatibus labore iusto amet dolorem sunt numquam pariatur minima maiores, obcaecati architecto, laborum eligendi assumenda asperiores officia! Voluptates magnam consequatur alias consectetur ipsum eaque facere quibusdam voluptatem quae velit libero eius asperiores ducimus dignissimos quaerat, odit odio molestiae quia! Enim eveniet maiores dolorem. Consequatur, sint laudantium delectus laborum nisi officiis beatae obcaecati atque est cupiditate illum illo?"
  },
  {
    "key": "11",
    "name": "Robert Martinez",
    "age": 45,
    "address": "Madrid No. 9 Lake Park",
    "tags": ["Lively", "Art Scene"],
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odit explicabo accusamus magni, eum dolores cupiditate a reiciendis obcaecati distinctio enim neque blanditiis, accusantium deserunt harum quae sit eius, nulla vitae ipsam repudiandae voluptatum suscipit inventore exercitationem? Magnam consectetur recusandae molestias nihil? Nobis voluptatibus labore iusto amet dolorem sunt numquam pariatur minima maiores, obcaecati architecto, laborum eligendi assumenda asperiores officia! Voluptates magnam consequatur alias consectetur ipsum eaque facere quibusdam voluptatem quae velit libero eius asperiores ducimus dignissimos quaerat, odit odio molestiae quia! Enim eveniet maiores dolorem. Consequatur, sint laudantium delectus laborum nisi officiis beatae obcaecati atque est cupiditate illum illo?"
  },
  {
    "key": "12",
    "name": "Patricia Garcia",
    "age": 38,
    "address": "Barcelona No. 10 Lake Park",
    "tags": ["Beach", "Nightlife"],
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odit explicabo accusamus magni, eum dolores cupiditate a reiciendis obcaecati distinctio enim neque blanditiis, accusantium deserunt harum quae sit eius, nulla vitae ipsam repudiandae voluptatum suscipit inventore exercitationem? Magnam consectetur recusandae molestias nihil? Nobis voluptatibus labore iusto amet dolorem sunt numquam pariatur minima maiores, obcaecati architecto, laborum eligendi assumenda asperiores officia! Voluptates magnam consequatur alias consectetur ipsum eaque facere quibusdam voluptatem quae velit libero eius asperiores ducimus dignissimos quaerat, odit odio molestiae quia! Enim eveniet maiores dolorem. Consequatur, sint laudantium delectus laborum nisi officiis beatae obcaecati atque est cupiditate illum illo?"
  },
  {
    "key": "13",
    "name": "Daniel Hernandez",
    "age": 28,
    "address": "Lisbon No. 11 Lake Park",
    "tags": ["Historic", "Tram"],
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odit explicabo accusamus magni, eum dolores cupiditate a reiciendis obcaecati distinctio enim neque blanditiis, accusantium deserunt harum quae sit eius, nulla vitae ipsam repudiandae voluptatum suscipit inventore exercitationem? Magnam consectetur recusandae molestias nihil? Nobis voluptatibus labore iusto amet dolorem sunt numquam pariatur minima maiores, obcaecati architecto, laborum eligendi assumenda asperiores officia! Voluptates magnam consequatur alias consectetur ipsum eaque facere quibusdam voluptatem quae velit libero eius asperiores ducimus dignissimos quaerat, odit odio molestiae quia! Enim eveniet maiores dolorem. Consequatur, sint laudantium delectus laborum nisi officiis beatae obcaecati atque est cupiditate illum illo?"
  },
  {
    "key": "14",
    "name": "Linda Martinez",
    "age": 33,
    "address": "Vienna No. 12 Lake Park",
    "tags": ["Music", "Palaces"],
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odit explicabo accusamus magni, eum dolores cupiditate a reiciendis obcaecati distinctio enim neque blanditiis, accusantium deserunt harum quae sit eius, nulla vitae ipsam repudiandae voluptatum suscipit inventore exercitationem? Magnam consectetur recusandae molestias nihil? Nobis voluptatibus labore iusto amet dolorem sunt numquam pariatur minima maiores, obcaecati architecto, laborum eligendi assumenda asperiores officia! Voluptates magnam consequatur alias consectetur ipsum eaque facere quibusdam voluptatem quae velit libero eius asperiores ducimus dignissimos quaerat, odit odio molestiae quia! Enim eveniet maiores dolorem. Consequatur, sint laudantium delectus laborum nisi officiis beatae obcaecati atque est cupiditate illum illo?"
  },
  {
    "key": "15",
    "name": "Anthony Wilson",
    "age": 36,
    "address": "Zurich No. 13 Lake Park",
    "tags": ["Banks", "Clean"],
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odit explicabo accusamus magni, eum dolores cupiditate a reiciendis obcaecati distinctio enim neque blanditiis, accusantium deserunt harum quae sit eius, nulla vitae ipsam repudiandae voluptatum suscipit inventore exercitationem? Magnam consectetur recusandae molestias nihil? Nobis voluptatibus labore iusto amet dolorem sunt numquam pariatur minima maiores, obcaecati architecto, laborum eligendi assumenda asperiores officia! Voluptates magnam consequatur alias consectetur ipsum eaque facere quibusdam voluptatem quae velit libero eius asperiores ducimus dignissimos quaerat, odit odio molestiae quia! Enim eveniet maiores dolorem. Consequatur, sint laudantium delectus laborum nisi officiis beatae obcaecati atque est cupiditate illum illo?"
  },
  {
    "key": "16",
    "name": "Susan White",
    "age": 40,
    "address": "Brussels No. 14 Lake Park",
    "tags": ["Chocolate", "EU"],
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odit explicabo accusamus magni, eum dolores cupiditate a reiciendis obcaecati distinctio enim neque blanditiis, accusantium deserunt harum quae sit eius, nulla vitae ipsam repudiandae voluptatum suscipit inventore exercitationem? Magnam consectetur recusandae molestias nihil? Nobis voluptatibus labore iusto amet dolorem sunt numquam pariatur minima maiores, obcaecati architecto, laborum eligendi assumenda asperiores officia! Voluptates magnam consequatur alias consectetur ipsum eaque facere quibusdam voluptatem quae velit libero eius asperiores ducimus dignissimos quaerat, odit odio molestiae quia! Enim eveniet maiores dolorem. Consequatur, sint laudantium delectus laborum nisi officiis beatae obcaecati atque est cupiditate illum illo?"
  },
  {
    "key": "17",
    "name": "Kevin Brown",
    "age": 37,
    "address": "Copenhagen No. 15 Lake Park",
    "tags": ["Design", "Cycling"],
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odit explicabo accusamus magni, eum dolores cupiditate a reiciendis obcaecati distinctio enim neque blanditiis, accusantium deserunt harum quae sit eius, nulla vitae ipsam repudiandae voluptatum suscipit inventore exercitationem? Magnam consectetur recusandae molestias nihil? Nobis voluptatibus labore iusto amet dolorem sunt numquam pariatur minima maiores, obcaecati architecto, laborum eligendi assumenda asperiores officia! Voluptates magnam consequatur alias consectetur ipsum eaque facere quibusdam voluptatem quae velit libero eius asperiores ducimus dignissimos quaerat, odit odio molestiae quia! Enim eveniet maiores dolorem. Consequatur, sint laudantium delectus laborum nisi officiis beatae obcaecati atque est cupiditate illum illo?"
  },
  {
    "key": "18",
    "name": "Laura Taylor",
    "age": 30,
    "address": "Stockholm No. 16 Lake Park",
    "tags": ["Islands", "Innovation"],
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odit explicabo accusamus magni, eum dolores cupiditate a reiciendis obcaecati distinctio enim neque blanditiis, accusantium deserunt harum quae sit eius, nulla vitae ipsam repudiandae voluptatum suscipit inventore exercitationem? Magnam consectetur recusandae molestias nihil? Nobis voluptatibus labore iusto amet dolorem sunt numquam pariatur minima maiores, obcaecati architecto, laborum eligendi assumenda asperiores officia! Voluptates magnam consequatur alias consectetur ipsum eaque facere quibusdam voluptatem quae velit libero eius asperiores ducimus dignissimos quaerat, odit odio molestiae quia! Enim eveniet maiores dolorem. Consequatur, sint laudantium delectus laborum nisi officiis beatae obcaecati atque est cupiditate illum illo?"
  },
  {
    "key": "19",
    "name": "Matthew Johnson",
    "age": 42,
    "address": "Helsinki No. 17 Lake Park",
    "tags": ["Sauna", "Sea"],
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odit explicabo accusamus magni, eum dolores cupiditate a reiciendis obcaecati distinctio enim neque blanditiis, accusantium deserunt harum quae sit eius, nulla vitae ipsam repudiandae voluptatum suscipit inventore exercitationem? Magnam consectetur recusandae molestias nihil? Nobis voluptatibus labore iusto amet dolorem sunt numquam pariatur minima maiores, obcaecati architecto, laborum eligendi assumenda asperiores officia! Voluptates magnam consequatur alias consectetur ipsum eaque facere quibusdam voluptatem quae velit libero eius asperiores ducimus dignissimos quaerat, odit odio molestiae quia! Enim eveniet maiores dolorem. Consequatur, sint laudantium delectus laborum nisi officiis beatae obcaecati atque est cupiditate illum illo?"
  },
  {
    "key": "20",
    "name": "Barbara Brown",
    "age": 35,
    "address": "Oslo No. 18 Lake Park",
    "tags": ["Fjords", "Nature"],
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odit explicabo accusamus magni, eum dolores cupiditate a reiciendis obcaecati distinctio enim neque blanditiis, accusantium deserunt harum quae sit eius, nulla vitae ipsam repudiandae voluptatum suscipit inventore exercitationem? Magnam consectetur recusandae molestias nihil? Nobis voluptatibus labore iusto amet dolorem sunt numquam pariatur minima maiores, obcaecati architecto, laborum eligendi assumenda asperiores officia! Voluptates magnam consequatur alias consectetur ipsum eaque facere quibusdam voluptatem quae velit libero eius asperiores ducimus dignissimos quaerat, odit odio molestiae quia! Enim eveniet maiores dolorem. Consequatur, sint laudantium delectus laborum nisi officiis beatae obcaecati atque est cupiditate illum illo?"
  },
  {
    "key": "21",
    "name": "Richard White",
    "age": 29,
    "address": "Edinburgh No. 19 Lake Park",
    "tags": ["Castle", "Festival"],
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odit explicabo accusamus magni, eum dolores cupiditate a reiciendis obcaecati distinctio enim neque blanditiis, accusantium deserunt harum quae sit eius, nulla vitae ipsam repudiandae voluptatum suscipit inventore exercitationem? Magnam consectetur recusandae molestias nihil? Nobis voluptatibus labore iusto amet dolorem sunt numquam pariatur minima maiores, obcaecati architecto, laborum eligendi assumenda asperiores officia! Voluptates magnam consequatur alias consectetur ipsum eaque facere quibusdam voluptatem quae velit libero eius asperiores ducimus dignissimos quaerat, odit odio molestiae quia! Enim eveniet maiores dolorem. Consequatur, sint laudantium delectus laborum nisi officiis beatae obcaecati atque est cupiditate illum illo?"
  },
  {
    "key": "22",
    "name": "Sandra Johnson",
    "age": 43,
    "address": "Dublin No. 20 Lake Park",
    "tags": ["Literature", "Pubs"],
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odit explicabo accusamus magni, eum dolores cupiditate a reiciendis obcaecati distinctio enim neque blanditiis, accusantium deserunt harum quae sit eius, nulla vitae ipsam repudiandae voluptatum suscipit inventore exercitationem? Magnam consectetur recusandae molestias nihil? Nobis voluptatibus labore iusto amet dolorem sunt numquam pariatur minima maiores, obcaecati architecto, laborum eligendi assumenda asperiores officia! Voluptates magnam consequatur alias consectetur ipsum eaque facere quibusdam voluptatem quae velit libero eius asperiores ducimus dignissimos quaerat, odit odio molestiae quia! Enim eveniet maiores dolorem. Consequatur, sint laudantium delectus laborum nisi officiis beatae obcaecati atque est cupiditate illum illo?"
  },
  {
    "key": "23",
    "name": "Christopher Martinez",
    "age": 39,
    "address": "Reykjavik No. 21 Lake Park",
    "tags": ["Geothermal", "Northern Lights"],
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odit explicabo accusamus magni, eum dolores cupiditate a reiciendis obcaecati distinctio enim neque blanditiis, accusantium deserunt harum quae sit eius, nulla vitae ipsam repudiandae voluptatum suscipit inventore exercitationem? Magnam consectetur recusandae molestias nihil? Nobis voluptatibus labore iusto amet dolorem sunt numquam pariatur minima maiores, obcaecati architecto, laborum eligendi assumenda asperiores officia! Voluptates magnam consequatur alias consectetur ipsum eaque facere quibusdam voluptatem quae velit libero eius asperiores ducimus dignissimos quaerat, odit odio molestiae quia! Enim eveniet maiores dolorem. Consequatur, sint laudantium delectus laborum nisi officiis beatae obcaecati atque est cupiditate illum illo?"
  },
  {
    "key": "24",
    "name": "Karen Wilson",
    "age": 32,
    "address": "Havana No. 22 Lake Park",
    "tags": ["Historic", "Colorful"],
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odit explicabo accusamus magni, eum dolores cupiditate a reiciendis obcaecati distinctio enim neque blanditiis, accusantium deserunt harum quae sit eius, nulla vitae ipsam repudiandae voluptatum suscipit inventore exercitationem? Magnam consectetur recusandae molestias nihil? Nobis voluptatibus labore iusto amet dolorem sunt numquam pariatur minima maiores, obcaecati architecto, laborum eligendi assumenda asperiores officia! Voluptates magnam consequatur alias consectetur ipsum eaque facere quibusdam voluptatem quae velit libero eius asperiores ducimus dignissimos quaerat, odit odio molestiae quia! Enim eveniet maiores dolorem. Consequatur, sint laudantium delectus laborum nisi officiis beatae obcaecati atque est cupiditate illum illo?"
  },
  {
    "key": "25",
    "name": "Thomas Brown",
    "age": 41,
    "address": "Mexico City No. 23 Lake Park",
    "tags": ["Historic", "Lively"],
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odit explicabo accusamus magni, eum dolores cupiditate a reiciendis obcaecati distinctio enim neque blanditiis, accusantium deserunt harum quae sit eius, nulla vitae ipsam repudiandae voluptatum suscipit inventore exercitationem? Magnam consectetur recusandae molestias nihil? Nobis voluptatibus labore iusto amet dolorem sunt numquam pariatur minima maiores, obcaecati architecto, laborum eligendi assumenda asperiores officia! Voluptates magnam consequatur alias consectetur ipsum eaque facere quibusdam voluptatem quae velit libero eius asperiores ducimus dignissimos quaerat, odit odio molestiae quia! Enim eveniet maiores dolorem. Consequatur, sint laudantium delectus laborum nisi officiis beatae obcaecati atque est cupiditate illum illo?"
  },
  {
    "key": "26",
    "name": "Nancy White",
    "age": 36,
    "address": "Buenos Aires No. 24 Lake Park",
    "tags": ["Tango", "Culture"],
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odit explicabo accusamus magni, eum dolores cupiditate a reiciendis obcaecati distinctio enim neque blanditiis, accusantium deserunt harum quae sit eius, nulla vitae ipsam repudiandae voluptatum suscipit inventore exercitationem? Magnam consectetur recusandae molestias nihil? Nobis voluptatibus labore iusto amet dolorem sunt numquam pariatur minima maiores, obcaecati architecto, laborum eligendi assumenda asperiores officia! Voluptates magnam consequatur alias consectetur ipsum eaque facere quibusdam voluptatem quae velit libero eius asperiores ducimus dignissimos quaerat, odit odio molestiae quia! Enim eveniet maiores dolorem. Consequatur, sint laudantium delectus laborum nisi officiis beatae obcaecati atque est cupiditate illum illo?"
  },
  {
    "key": "27",
    "name": "Donald Johnson",
    "age": 30,
    "address": "Santiago No. 25 Lake Park",
    "tags": ["Mountain View", "Vineyards"],
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odit explicabo accusamus magni, eum dolores cupiditate a reiciendis obcaecati distinctio enim neque blanditiis, accusantium deserunt harum quae sit eius, nulla vitae ipsam repudiandae voluptatum suscipit inventore exercitationem? Magnam consectetur recusandae molestias nihil? Nobis voluptatibus labore iusto amet dolorem sunt numquam pariatur minima maiores, obcaecati architecto, laborum eligendi assumenda asperiores officia! Voluptates magnam consequatur alias consectetur ipsum eaque facere quibusdam voluptatem quae velit libero eius asperiores ducimus dignissimos quaerat, odit odio molestiae quia! Enim eveniet maiores dolorem. Consequatur, sint laudantium delectus laborum nisi officiis beatae obcaecati atque est cupiditate illum illo?"
  },
  {
    "key": "28",
    "name": "Betty Martinez",
    "age": 45,
    "address": "Rio de Janeiro No. 26 Lake Park",
    "tags": ["Beach", "Carnival"],
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odit explicabo accusamus magni, eum dolores cupiditate a reiciendis obcaecati distinctio enim neque blanditiis, accusantium deserunt harum quae sit eius, nulla vitae ipsam repudiandae voluptatum suscipit inventore exercitationem? Magnam consectetur recusandae molestias nihil? Nobis voluptatibus labore iusto amet dolorem sunt numquam pariatur minima maiores, obcaecati architecto, laborum eligendi assumenda asperiores officia! Voluptates magnam consequatur alias consectetur ipsum eaque facere quibusdam voluptatem quae velit libero eius asperiores ducimus dignissimos quaerat, odit odio molestiae quia! Enim eveniet maiores dolorem. Consequatur, sint laudantium delectus laborum nisi officiis beatae obcaecati atque est cupiditate illum illo?"
  },
  {
    "key": "29",
    "name": "Steven Wilson",
    "age": 33,
    "address": "Bogotá No. 27 Lake Park",
    "tags": ["Historic", "Mountains"],
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odit explicabo accusamus magni, eum dolores cupiditate a reiciendis obcaecati distinctio enim neque blanditiis, accusantium deserunt harum quae sit eius, nulla vitae ipsam repudiandae voluptatum suscipit inventore exercitationem? Magnam consectetur recusandae molestias nihil? Nobis voluptatibus labore iusto amet dolorem sunt numquam pariatur minima maiores, obcaecati architecto, laborum eligendi assumenda asperiores officia! Voluptates magnam consequatur alias consectetur ipsum eaque facere quibusdam voluptatem quae velit libero eius asperiores ducimus dignissimos quaerat, odit odio molestiae quia! Enim eveniet maiores dolorem. Consequatur, sint laudantium delectus laborum nisi officiis beatae obcaecati atque est cupiditate illum illo?"
  },
  {
    "key": "30",
    "name": "Dorothy Brown",
    "age": 37,
    "address": "Lima No. 28 Lake Park",
    "tags": ["Historic", "Culinary"],
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odit explicabo accusamus magni, eum dolores cupiditate a reiciendis obcaecati distinctio enim neque blanditiis, accusantium deserunt harum quae sit eius, nulla vitae ipsam repudiandae voluptatum suscipit inventore exercitationem? Magnam consectetur recusandae molestias nihil? Nobis voluptatibus labore iusto amet dolorem sunt numquam pariatur minima maiores, obcaecati architecto, laborum eligendi assumenda asperiores officia! Voluptates magnam consequatur alias consectetur ipsum eaque facere quibusdam voluptatem quae velit libero eius asperiores ducimus dignissimos quaerat, odit odio molestiae quia! Enim eveniet maiores dolorem. Consequatur, sint laudantium delectus laborum nisi officiis beatae obcaecati atque est cupiditate illum illo?"
  },
  {
    "key": "31",
    "name": "Paul White",
    "age": 40,
    "address": "Quito No. 29 Lake Park",
    "tags": ["Historic", "Mountains"],
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odit explicabo accusamus magni, eum dolores cupiditate a reiciendis obcaecati distinctio enim neque blanditiis, accusantium deserunt harum quae sit eius, nulla vitae ipsam repudiandae voluptatum suscipit inventore exercitationem? Magnam consectetur recusandae molestias nihil? Nobis voluptatibus labore iusto amet dolorem sunt numquam pariatur minima maiores, obcaecati architecto, laborum eligendi assumenda asperiores officia! Voluptates magnam consequatur alias consectetur ipsum eaque facere quibusdam voluptatem quae velit libero eius asperiores ducimus dignissimos quaerat, odit odio molestiae quia! Enim eveniet maiores dolorem. Consequatur, sint laudantium delectus laborum nisi officiis beatae obcaecati atque est cupiditate illum illo?"
  },
  {
    "key": "32",
    "name": "Helen Johnson",
    "age": 34,
    "address": "Caracas No. 30 Lake Park",
    "tags": ["Beach", "Nightlife"],
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odit explicabo accusamus magni, eum dolores cupiditate a reiciendis obcaecati distinctio enim neque blanditiis, accusantium deserunt harum quae sit eius, nulla vitae ipsam repudiandae voluptatum suscipit inventore exercitationem? Magnam consectetur recusandae molestias nihil? Nobis voluptatibus labore iusto amet dolorem sunt numquam pariatur minima maiores, obcaecati architecto, laborum eligendi assumenda asperiores officia! Voluptates magnam consequatur alias consectetur ipsum eaque facere quibusdam voluptatem quae velit libero eius asperiores ducimus dignissimos quaerat, odit odio molestiae quia! Enim eveniet maiores dolorem. Consequatur, sint laudantium delectus laborum nisi officiis beatae obcaecati atque est cupiditate illum illo?"
  },
  {
    "key": "33",
    "name": "James Martinez",
    "age": 31,
    "address": "Kingston No. 31 Lake Park",
    "tags": ["Music", "Beach"],
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odit explicabo accusamus magni, eum dolores cupiditate a reiciendis obcaecati distinctio enim neque blanditiis, accusantium deserunt harum quae sit eius, nulla vitae ipsam repudiandae voluptatum suscipit inventore exercitationem? Magnam consectetur recusandae molestias nihil? Nobis voluptatibus labore iusto amet dolorem sunt numquam pariatur minima maiores, obcaecati architecto, laborum eligendi assumenda asperiores officia! Voluptates magnam consequatur alias consectetur ipsum eaque facere quibusdam voluptatem quae velit libero eius asperiores ducimus dignissimos quaerat, odit odio molestiae quia! Enim eveniet maiores dolorem. Consequatur, sint laudantium delectus laborum nisi officiis beatae obcaecati atque est cupiditate illum illo?"
  },
  {
    "key": "34",
    "name": "Margaret Wilson",
    "age": 38,
    "address": "Montevideo No. 32 Lake Park",
    "tags": ["Beach", "Historic"],
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odit explicabo accusamus magni, eum dolores cupiditate a reiciendis obcaecati distinctio enim neque blanditiis, accusantium deserunt harum quae sit eius, nulla vitae ipsam repudiandae voluptatum suscipit inventore exercitationem? Magnam consectetur recusandae molestias nihil? Nobis voluptatibus labore iusto amet dolorem sunt numquam pariatur minima maiores, obcaecati architecto, laborum eligendi assumenda asperiores officia! Voluptates magnam consequatur alias consectetur ipsum eaque facere quibusdam voluptatem quae velit libero eius asperiores ducimus dignissimos quaerat, odit odio molestiae quia! Enim eveniet maiores dolorem. Consequatur, sint laudantium delectus laborum nisi officiis beatae obcaecati atque est cupiditate illum illo?"
  },
  {
    "key": "35",
    "name": "Edward Brown",
    "age": 42,
    "address": "Cape Town No. 33 Lake Park",
    "tags": ["Mountain", "Beach"],
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odit explicabo accusamus magni, eum dolores cupiditate a reiciendis obcaecati distinctio enim neque blanditiis, accusantium deserunt harum quae sit eius, nulla vitae ipsam repudiandae voluptatum suscipit inventore exercitationem? Magnam consectetur recusandae molestias nihil? Nobis voluptatibus labore iusto amet dolorem sunt numquam pariatur minima maiores, obcaecati architecto, laborum eligendi assumenda asperiores officia! Voluptates magnam consequatur alias consectetur ipsum eaque facere quibusdam voluptatem quae velit libero eius asperiores ducimus dignissimos quaerat, odit odio molestiae quia! Enim eveniet maiores dolorem. Consequatur, sint laudantium delectus laborum nisi officiis beatae obcaecati atque est cupiditate illum illo?"
  },
  {
    "key": "36",
    "name": "Elizabeth White",
    "age": 29,
    "address": "Johannesburg No. 34 Lake Park",
    "tags": ["Urban", "Cultural"],
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odit explicabo accusamus magni, eum dolores cupiditate a reiciendis obcaecati distinctio enim neque blanditiis, accusantium deserunt harum quae sit eius, nulla vitae ipsam repudiandae voluptatum suscipit inventore exercitationem? Magnam consectetur recusandae molestias nihil? Nobis voluptatibus labore iusto amet dolorem sunt numquam pariatur minima maiores, obcaecati architecto, laborum eligendi assumenda asperiores officia! Voluptates magnam consequatur alias consectetur ipsum eaque facere quibusdam voluptatem quae velit libero eius asperiores ducimus dignissimos quaerat, odit odio molestiae quia! Enim eveniet maiores dolorem. Consequatur, sint laudantium delectus laborum nisi officiis beatae obcaecati atque est cupiditate illum illo?"
  },
  {
    "key": "37",
    "name": "George Johnson",
    "age": 45,
    "address": "Nairobi No. 35 Lake Park",
    "tags": ["Wildlife", "City"],
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odit explicabo accusamus magni, eum dolores cupiditate a reiciendis obcaecati distinctio enim neque blanditiis, accusantium deserunt harum quae sit eius, nulla vitae ipsam repudiandae voluptatum suscipit inventore exercitationem? Magnam consectetur recusandae molestias nihil? Nobis voluptatibus labore iusto amet dolorem sunt numquam pariatur minima maiores, obcaecati architecto, laborum eligendi assumenda asperiores officia! Voluptates magnam consequatur alias consectetur ipsum eaque facere quibusdam voluptatem quae velit libero eius asperiores ducimus dignissimos quaerat, odit odio molestiae quia! Enim eveniet maiores dolorem. Consequatur, sint laudantium delectus laborum nisi officiis beatae obcaecati atque est cupiditate illum illo?"
  },
  {
    "key": "38",
    "name": "Jennifer Martinez",
    "age": 39,
    "address": "Lagos No. 36 Lake Park",
    "tags": ["Lively", "Cultural"],
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odit explicabo accusamus magni, eum dolores cupiditate a reiciendis obcaecati distinctio enim neque blanditiis, accusantium deserunt harum quae sit eius, nulla vitae ipsam repudiandae voluptatum suscipit inventore exercitationem? Magnam consectetur recusandae molestias nihil? Nobis voluptatibus labore iusto amet dolorem sunt numquam pariatur minima maiores, obcaecati architecto, laborum eligendi assumenda asperiores officia! Voluptates magnam consequatur alias consectetur ipsum eaque facere quibusdam voluptatem quae velit libero eius asperiores ducimus dignissimos quaerat, odit odio molestiae quia! Enim eveniet maiores dolorem. Consequatur, sint laudantium delectus laborum nisi officiis beatae obcaecati atque est cupiditate illum illo?"
  },
  {
    "key": "39",
    "name": "Charles Wilson",
    "age": 35,
    "address": "Accra No. 37 Lake Park",
    "tags": ["Historic", "Beach"],
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odit explicabo accusamus magni, eum dolores cupiditate a reiciendis obcaecati distinctio enim neque blanditiis, accusantium deserunt harum quae sit eius, nulla vitae ipsam repudiandae voluptatum suscipit inventore exercitationem? Magnam consectetur recusandae molestias nihil? Nobis voluptatibus labore iusto amet dolorem sunt numquam pariatur minima maiores, obcaecati architecto, laborum eligendi assumenda asperiores officia! Voluptates magnam consequatur alias consectetur ipsum eaque facere quibusdam voluptatem quae velit libero eius asperiores ducimus dignissimos quaerat, odit odio molestiae quia! Enim eveniet maiores dolorem. Consequatur, sint laudantium delectus laborum nisi officiis beatae obcaecati atque est cupiditate illum illo?"
  },
]
  ;
const BottomContents = () => {
  let history = useNavigate()
  const columns = [
    {
      title: 'Owner',
      dataIndex: 'ownerName',
      key: 'ownerName',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Pricing ($K)',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Location',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Request {record.name}</a>
          <a onClick={((e) => { history("/post/" + String(record._id)) })}>More...</a>
        </Space>
      ),
    },
  ];
  const [myColData, setMyColData] = useState([{ _id: "", ownerName: "", price: "", address: "", tags: [], desc: "" }])
  useEffect(() => {

    (async () => {

      const response = await fetch("http://127.0.0.1:5000/api/post/fetchallpost", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      })
      let xres = await response.json()
      setMyColData(xres)
      console.log(xres, "is teh output all users")
    })
      ();

    return () => {

    }
  }, [])

  return (<Table className='w-[80vw] m-auto mt-10' columns={columns} dataSource={myColData} />)
};
export default BottomContents;
