import React from 'react'
import Carousel from 'react-bootstrap/Carousel'




const HomePages = () => {
  return (
    <>
      <style type="text/css">
    {`
      .homePicture {
        padding-top: 10px;
     

      }
      .empty {
        padding:20px;
       
        
     
    `}
  </style>
    
      <div className="homePicture">
        <Carousel >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1532635241-17e820acc59f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGRyaW5raW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
              alt="First slide"
              width= "540px"
            />
            
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1528495612343-9ca9f4a4de28?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80"
              alt="Second slide"
              width= "540px"
            />

         
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8a29tYnVjaGF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
              alt="Third slide"
              width= "540px"
            />
          </Carousel.Item>
        </Carousel>
      </div>
     

      
      
    </>
  )
}

export default HomePages;