import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom'

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme) => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
        overflowX: 'auto',
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
    },
}));

function Header() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Toolbar className={classes.toolbar}>
                text here
                <Typography
                    //   component="h3"
                    variant="h4"
                    color="inherit"
                    align="right"
                    noWrap
                    className={classes.toolbarTitle}
                >
                    Title
                </Typography>

            </Toolbar>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <Button component={Link} to={'/Home'}>Home</Button>
                <Button component={Link} to={'/about'}>About</Button>
                <Button component={Link} to={'/portfolio'}>Portfolio</Button>
                <Button href="#text-buttons" color="primary">
                    Link
                </Button>
            </Box>
        </React.Fragment>
    )
}

export default Header;