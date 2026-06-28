import React from 'react'
import Container from '../Common/Container'
import SliderRight from '../Layout/sliderRight'


const About = () => {
  return (
    <div>
      <Container>
        <h1 className="text-3xl font-bold pb-6">about page </h1>
        <div className="py-10">
          <SliderRight />
        </div>
        
      </Container>
    </div>
  )
}

export default About
