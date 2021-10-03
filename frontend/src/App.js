import React from 'react';
import NavBars from './component/Nav/Nav';
import Content from './component/Header/Header';
// import navElements from './component/Nav/navElements';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
  
// } from "react-router-dom";


function App () {
  return (
    <>
      <div>
       <NavBars />
       
      </div> 
      <div className="header">

        <Content />

      </div>

      <div>
     
      </div>
    </>

   
  );



}
export default App;