import React from 'react'
import Container from '../Common/Container'
import Contacts from '../Layout/Contacts'

const Contact = () => {
  return (
    <div>
      <Container>
        <h1 className='text-center font-bold text-primary font-sans text-[45px]'>Contact Us</h1>
        <div className="px-20 py-10">
          <Contacts />
        </div>
      </Container>
    </div>
  )
}

export default Contact
