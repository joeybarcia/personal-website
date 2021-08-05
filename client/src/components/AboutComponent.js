import React from 'react'
import {Link} from 'react-router-dom'
import Box from '@material-ui/core/Box';
function About(){
    return(
        <React.Fragment>
        <div>About</div>
        <Box my={4}>
          Create React App v4-beta example
        </Box>
        </React.Fragment>
    )
}
export default About;