import styled from 'styled-components'
import Map from './Map'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;

`

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;

`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media only screen and (max-width:768px) {
   justify-content: center;
  }

`

const Title = styled.h1`
  font-weight: 200;

`

const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;

`

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width:768px) {
   width: 300px;
  }
`

const TextArea = styled.textarea`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;

`

const Button = styled.button`
  background-color: pink;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  padding: 20px;
  

`
const Right = styled.div`
  flex: 1;

  @media only screen and (max-width:768px) {
   display: none;
  }
`

export const Contact = () => {

const ref = useRef();
const [success, setSucess] = useState(null)

const handleSubmit = (e) =>{
  e.preventDefault();

  emailjs.sendForm('service_0a9x6i6', 'template_oablk46', ref.current, 'rIuLtUbs6VGckb4-a')
  .then((result) => {
      console.log(result.text);
      setSucess(true)
  }, (error) => {
      console.log(error.text);
      setSucess(false)
  });
}
  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact Us</Title>
            <Input placeholder='Name' name="name" />
            <Input placeholder='Eamil' name="email" />
            <TextArea placeholder='Write your message' name="message"  rows={10}/>
            <Button type='submit'>Send</Button>
            {success && "Your message has been sent. We'll get back to you soon :)"}
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  )
}
