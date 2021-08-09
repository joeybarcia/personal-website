import React from 'react'
// import {Link} from 'react-router-dom'
import Box from '@material-ui/core/Box';

function About(){
    return(
        <React.Fragment>
        <h2>About</h2>
        <Box my={2}>
          <p>
          My name is Joey Barcia and I am an aspiring Software Developer. <br></br>
          I obtained a B.S. in Computer Science from the University of California, Santa Cruz in
          June 2021. <br></br>
          My passions lie in software and web development, particularly full stack
          development.<br></br>
          I enjoy learning new technologies and frameworks, and some of my most frequented
          include C, C++, Java and HTML/CSS. 
          </p>
        </Box>
        </React.Fragment>
    )
}
export default About;