import React from 'react'
import { Link } from 'react-router-dom'
import GitHubIcon from '@material-ui/icons/GitHub';
// import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


function Home() {
    return (
        <React.Fragment>
            <div>Home</div>
            <GitHubIcon style={{ fontSize: 40 }} onClick={() =>  window.open('https://github.com/joeybarcia')} />
            <LinkedInIcon style={{ fontSize: 40 }} onClick={() =>  window.open('http://google.com')} />
            <br></br>
            
        </React.Fragment>
    )
}

// let handleClick() => {
//     window.open.href = "http://google.com"
// }
export default Home;