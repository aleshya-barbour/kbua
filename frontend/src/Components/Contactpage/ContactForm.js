import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { IoIosSend } from "react-icons/io";








export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_t9v8u1h','template_gs054rt', form.current, 
    'user_8t3ZSh1CYG8JZtgsStZdo')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  

  return (

   
  <Form ref={ form } onSubmit={sendEmail}>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Name</Form.Label>
    <Form.Control as="textarea" rows={1} required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Message</Form.Label>
    <Form.Control  name="message" as="textarea" rows={3} required/>
  </Form.Group>
  <div className="d-grid gap-2">
    <Button type="submit" 
    variant="dark" 
    size="lg"
    style={{color:'blue'}}
    
    > Send 
    <IoIosSend/> 
    </Button>{''}
   </div>
</Form>



  
  );

};
 
export default ContactUs;