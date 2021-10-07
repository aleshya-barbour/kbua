
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ContactForm from '../Components/Contactpage/ContactForm';
import {SiInstagram} from 'react-icons/si';
import {ImTwitter} from 'react-icons/im';






const Contact = () => {
    
    return (
        <div>
            <Container fluid>
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
              <Col>
                <SiInstagram />
                <ImTwitter />
              </Col>
    

            </Container>
            
        </div>
           
       
    )
}

export default Contact
