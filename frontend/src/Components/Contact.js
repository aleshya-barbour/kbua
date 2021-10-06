import { display } from '@mui/system';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ContactForm from '../Components/Contactpage/ContactForm';





const Contact = () => {
    
    return (
        <div>
            <Container fluid>
              <Row>
                <Col>
                  <h1>
                    Contact us
                  </h1>
                </Col>
              </Row>
              <Row >
                <Col  xs={9}>
                  <ContactForm />
                </Col>
              </Row>

            </Container>
            
        </div>
           
       
    )
}

export default Contact
