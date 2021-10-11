
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ContactForm from '../Components/Contactpage/ContactForm';
import {SiInstagram, SiLinkedin} from 'react-icons/si';
import {ImTwitter} from 'react-icons/im';
import Button from 'react-bootstrap/Button'







const Contact = () => {
    
    return (
        <div >
            <style type="text/css">
              {`
              .contactform{
                padding-top: 20px;
                background-image: url("https://images.unsplash.com/photo-1491147334573-44cbb4602074?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60");
                color: white;
              }

              
             

              `}
           </style>
           <div className="empty" />
           <div className="empty" />
            <Container fluid className="contactform">
              <Row className="justify-content-md-center">
                <Col xs lg="2">
                  <h1>
                    Contact us
                  </h1>
                </Col>
              </Row>
              <Row className="justify-content-md-center">
                <Col xs={12} md={8}>
                  <ContactForm />
                </Col>
              </Row>
             

            <Container fluid className="appIcon">
                <Row >
                  <Button>  <SiInstagram /> </Button>
                </Row>
            </Container>
            
            <Container fluid className="appIcon">
              <Row>
                <Button> <ImTwitter /> </Button>  
              </Row>
            </Container>

            <Container fluid className="appIcon">
              <Row>
                <Button> <SiLinkedin /></Button>
              </Row>
            </Container>

          </Container>
          

                        
        </div>
           
       
    )
}

export default Contact
