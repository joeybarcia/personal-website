import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    footer: {
      backgroundColor: theme.palette.background.paper,
      // marginTop: theme.spacing(8),
      padding: theme.spacing(6, 0),
    },
  }));

function Footer(){
    const classes=useStyles();
    return(
        <footer className={classes.footer}>footer content</footer>
    )
}

export default Footer;