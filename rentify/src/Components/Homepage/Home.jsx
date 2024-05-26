import React, { useState } from 'react'
import HomeNav from './HomeNav'
import BottomContents from './BottomContents'
import More from './More'
import TenantPost from './TenantPost'

const Home = () => {
  const [tenant, setTenant] = useState(true)
  return (
    <div>
        <HomeNav tenant = {tenant} setTenant = {setTenant}/>
        {!tenant?<BottomContents/>:
        <TenantPost/>}
        {/* <More/> */}
    </div>
  )
}

export default Home