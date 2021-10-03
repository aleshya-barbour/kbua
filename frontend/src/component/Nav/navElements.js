import React from 'react';
import About from '../Pages/About';
import Home from '../Home/Home';
import Products from '../Pages/Products'
import form1 from '../Pages/checkout/form1'





import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";


function navElements() {
  return (
  <Router>
      
<div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="../about">
            <About />
          </Route>
          <Route exact path="/Products">
            <Products />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path='/form'>
            <form1 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default navElements;
