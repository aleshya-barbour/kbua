import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import HomePages from './HomePage/HomePages';
import {ImLeaf, ImSun} from  'react-icons/im'
import Button from 'react-bootstrap/Button'


import {BsPlusCircleFill} from  'react-icons/bs'



 
const Home = () => {
  
    return (
        <div>
          <style type="text/css">
            {`
            .homeIcon {
              padding-bottom: 200px;

              color: #1f0101;
              height: 7em;
              background-image: url("https://images.unsplash.com/photo-1595236629937-aadaf7c1d99d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTY5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60");
              font-family: 'Montserrat', sans-serif;
              
             
            }
           
            .h2{
              font-family: 'Montserrat', sans-serif;
            }
            .empty {
              padding: 250px;
            }
            .background {  
              background-image: url ("https://images.unsplash.com/photo-1595236629937-aadaf7c1d99d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTY5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60");
            }

            .shopus{
              font-family: 'Passion One', cursive;
              padding: 100px;
              text-align: center;
              color: white;
              background-image: url("https://images.unsplash.com/photo-1567359781514-3b964e2b04d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTE4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60");
            }
 
          
            `}
            </style>
            
            <HomePages />


            <Container fluid className="pictures">
              <Row className="justify-content-md-center">
                    
                      <div>
                        <h2>Welcome to Kbua</h2>
                        <div>
                            <span><p>The drink of immortality</p></span>
                        </div>
                      </div>
      
                </Row>
            </Container>
            <div className="empty" />

            <Container className="background">
        
            <Container fluid="sm" className="homeIcon">
              <Row>
                <ImLeaf size = '4em'/> 
                <h4>Antioxidants </h4>
                <h5>Antioxidants are substances that fight free radicals, reactive molecules that can damage your cells </h5>
              </Row>
            </Container>
            <div className="empty" />

            <Container fluid="sm" className="homeIcon">
              <Row>
                <BsPlusCircleFill size = '4em'/>
                <h4 center>Reducing Heart Disease Risk</h4>
                <h5>studies show that kombucha can greatly improve two markers of heart disease, “bad” LDL and “good” HDL cholesterol, in as few as 30 days</h5>
              </Row>
              
            </Container>

            <div className="empty" />

            <Container fluid="sm" className="homeIcon">
              <Row>
                
                <ImSun icon={ImSun} size = '4em'/>
                <h4>Gut health</h4>
                <h5> more health more gut for health most and more and better supreme top tier bestest</h5>
              </Row>
            </Container>

            <div className="empty" />
            </Container>
            
            <Button className="shopus" varient="primary" >
              <Container fluid >
                <Row className="justify-content-md-center">
                  <Col>
                  <h1>Need to order?</h1>
                  <p>Click</p>
                  </Col>
                </Row>
              </Container>
            </Button>
            <div className="empty" />

         
          
          
        </div>
    )
}

export default Home
