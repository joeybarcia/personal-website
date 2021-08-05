import React from 'react'
import { Link } from 'react-router-dom'
import GitHubIcon from '@material-ui/icons/GitHub';
// import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Box from '@material-ui/core/Box';

function Home() {
    return (
        <React.Fragment>
            <Box my={4} align="center">
            <GitHubIcon color="secondary" style={{ fontSize: 40 }} onClick={() =>  window.open('https://github.com/joeybarcia')} />
            <LinkedInIcon color="secondary" style={{ fontSize: 40 }} onClick={() =>  window.open('https://www.linkedin.com/in/joey-barcia/')} />
            <br></br>
            </Box>
        </React.Fragment>
    )
}


export default Home;