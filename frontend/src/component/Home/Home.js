import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import { Typography } from '@material-ui/core';


function Home () {


  return (
<div >
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://unsplash.com/photos/x6gJwv6vfKE/download?force=true"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://unsplash.com/photos/an5Jf8HROtY/download?force=true"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://unsplash.com/photos/5cFqO92t7pM/download?force=true"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  <Typography component="div" style={{ backgroundColor: '#FFFFE8', height: '100vh' }}>
   <div>
   <Container>
    <Row>
      <Col>
      <div className="text">
       <h1>Lorem Ipsum</h1>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet nunc sit amet massa tristique faucibus. Donec eu nisi eget libero semper porttitor ac sed diam. Fusce ipsum velit, blandit sed velit sed, pharetra ultricies eros. Suspendisse eu tincidunt massa. Nulla tincidunt elementum libero ullamcorper faucibus. Integer cursus orci id massa hendrerit imperdiet. Pellentesque eu nunc fringilla, convallis ipsum eget, scelerisque nibh.</p>
    </div>

      </Col>
    </Row>
  </Container>
 </div>
 <div>
   <Container>
    <Row>
      <Col>
      <div className="text">
       <h1>Lorem Ipsum</h1>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet nunc sit amet massa tristique faucibus. Donec eu nisi eget libero semper porttitor ac sed diam. Fusce ipsum velit, blandit sed velit sed, pharetra ultricies eros. Suspendisse eu tincidunt massa. Nulla tincidunt elementum libero ullamcorper faucibus. Integer cursus orci id massa hendrerit imperdiet. Pellentesque eu nunc fringilla, convallis ipsum eget, scelerisque nibh.</p>
    </div>

      </Col>
    </Row>
  </Container>
 </div>
 </Typography>
 </div>

  );
 
}


export default Home;
