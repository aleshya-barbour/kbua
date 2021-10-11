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
             
              font-family: 'Montserrat', sans-serif;
              
             
            }
           
            .h2{
              font-family: 'Montserrat', sans-serif;
            }
            .empty {
              padding: 250px;
            }
            .background {  
              background-image: url("https://images.unsplash.com/photo-1601662528567-526cd06f6582?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60");
            }

            .shopus{
            
              font-family: 'Passion One', cursive;
              padding: 100px;
             
              display: block;
              width: 100%;
           
              text-align: center;
              color: white;
              background-image: url("https://images.unsplash.com/photo-1505484128222-46ced733ba01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mjc3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60");
            }
            
            .block2{
              color:gray;
              border-style: rounded;
            }

            .block1{
              color:blue;
             
              
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
              </Row>v
            </Container>

            <div className="empty" />
          
            </Container>

            <div className="empty" />

            <Container fluid className="justify-content-md-center">
             
              <Row >
                <Col className="block1" >
                  <Button className="shopus" variant="primary"> 
                    <h1>Need to order?</h1>
                    <p>Click</p>
                  </Button>
                </Col>
                  
                <Col className="block2" >
                  <h1>Here is language to persuade your buyer into clicking the button that will lead the to the store</h1>
                </Col>
              </Row>
            </Container>
          
            <div className="empty" />

            <div className="empty" />

            <Container fluid className="justify-content-md-center">
             
             <Row >

               <Col className="block2" >
                  <h1>Here is language to persuade your buyer into clicking the button that will lead the to the store</h1>
                </Col>
               
                <Col ClassName="block1" >
                  <Button className="shopus" variant="primary"> 
                    <h1>Subscribe click now</h1>
                    <p>To save</p>
                  </Button>
                </Col>
             
              
              </Row>
            </Container>

         
            <div className="empty" />
          
        </div>
    )
}

export default Home
