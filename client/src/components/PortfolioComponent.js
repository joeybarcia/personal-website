import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        // maxWidth: 100%,
    },
    media: {
        height: 120,
    },
});

function Portfolio() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <h2>Portfolio</h2>
            <Card className={classes.root}>
                {/* <CardActionArea> */}
                    <CardMedia
                        className={classes.media}
                        image="../../public/images/portfolio/template.png"
                        title="project 1"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" color="primary" component="h2">
                            Project Title
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Description of project here. 
                            Technologies used:....
                        </Typography>
                    </CardContent>
                {/* </CardActionArea> */}
                {/* <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions> */}
            </Card>
        </React.Fragment>
    )
}

export default Portfolio;