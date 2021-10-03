import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import '@fontsource/roboto';
import Home from '../Home/Home';




export default function Content() {

  
  return (
  
   <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
      <div className="header">
       <Container></Container>
         
      </div>
        
        <Typography component="div" style={{ backgroundColor: '#FFFFE8', height: '100vh' }} >
          <Home />

        </Typography>

        <div>
         <Container>
    
         </Container>
        </div>
      </Container>
    </React.Fragment>
  );
}

