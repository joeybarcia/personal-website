import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
// import AppBar from '@material-ui/core/AppBar';
// import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom'

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme) => ({
    toolbar: {
        borderBottom: `3px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        flex: 1,
        fontFamily: 'Titillium Web',
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
        overflowX: 'auto',
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
    },
    button: {
        // backgroundColor: '#3c52b2',
        // color: '#fff',
        '&:hover': {
            backgroundColor: theme.palette.primary,
            // color: '${theme.palette.primary}',
        },
    },
}));

function Header() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Toolbar className={classes.toolbar}>
                <Typography
                    align="right"
                    variant="h4"
                    color="primary"
                    noWrap
                    className={classes.toolbarTitle}>
                    Joey Barcia
                </Typography>

            </Toolbar>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <Button className={classes.button} component={Link} to={'/Home'}>Home</Button>
                <Button className={classes.button} component={Link} to={'/about'}>About</Button>
                <Button className={classes.button} component={Link} to={'/portfolio'}>Portfolio</Button>
                {/* <Button href="#text-buttons" color="primary">
                    Link
                </Button> */}
            </Box>
        </React.Fragment>
    )
}

export default Header;