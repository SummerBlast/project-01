import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Box from './Box'

function Landing() {
  return (
    <div style={{backgroundImage:`url("./Image/bg.png")`,
                height:"660px"}}>
        <Navbar/>
        <Hero/>
        <Box/>

    </div>
  )
}

export default Landing