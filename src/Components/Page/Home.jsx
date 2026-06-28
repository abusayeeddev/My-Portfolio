import React from 'react'
import Benner from '../Layout/Benner'
import Container from '../Common/Container'
import Sliders from '../Layout/Sliders'
import SliderRight from '../Layout/sliderRight'
import Gallerys from "/src/Components/Layout/Gallerys"



const Home = () => {
  return (
    <>
      <Container>
        <Benner />
        <Sliders/>
        <SliderRight/>
         <Gallerys limit={3} />
      </Container>
    </>
  )
}

export default Home
