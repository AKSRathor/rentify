import React, { useState } from 'react'
import HomeNav from './HomeNav'
import BottomContents from './BottomContents'
import More from './More'
import TenantPost from './TenantPost'

const Home = (props) => {
  const [tenant, setTenant] = useState(true)
  const [postId, setPostId] = useState("")
  return (
    <div>
        <HomeNav host = {props.host} tenant = {tenant} setTenant = {setTenant}/>
        {!tenant?<BottomContents host = {props.host}/>:
        <TenantPost host = {props.host}/>}
        {/* <More/> */}
    </div>
  )
}

export default Home