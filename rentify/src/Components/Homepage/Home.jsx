import React from 'react'
import HomeNav from './HomeNav'
import BottomContents from './BottomContents'
import More from './More'
import TenantPost from './TenantPost'

const Home = () => {
  return (
    <div>
        <HomeNav/>
        {/* <BottomContents/> */}
        <TenantPost/>
        {/* <More/> */}
    </div>
  )
}

export default Home