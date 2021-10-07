import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import HomePages from './HomePage/HomePages';
 
const Home = () => {
    return (
        <div>
            
            <HomePages />

            <Container fluid className="pictures">
              <Row className="justify-content-md-center">
                    <Col xs={6}>
                      <div>
                        <h2>center text</h2>
                        <div>
                            <p>Lorem ipsum</p>
                        </div>
                      </div>
                                    
                    </Col>
                </Row>
            </Container>
           
            
        </div>
    )
}

export default Home
