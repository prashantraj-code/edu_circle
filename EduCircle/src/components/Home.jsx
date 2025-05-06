import React from 'react'
import NavBar from './short components/NavBar'
import MidThing from './short components/MidThing'
import BottomThing from './short components/BottomThing'
import Meetings from './short components/Meetings'
import Footer from './short components/Footer'
function Home() {
  return (
    <div>
        <NavBar></NavBar>
        <MidThing/>
        <BottomThing/>
        <Meetings/>
        <Footer/>
    </div>
  )
}

export default Home
