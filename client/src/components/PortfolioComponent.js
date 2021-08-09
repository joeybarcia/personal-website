import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        // maxWidth: 100%,
    },
    media: {
        height: 200,
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
                        image="/images/portfolio/vaxmapThumb.png"
                        title="Vaccine Maps"
                    />
                    <CardContent>
                        {/* <Typography gutterBottom variant="h6"component="h2"> */}
                            <h3>Vaccine Maps</h3>
                        {/* </Typography> */}
                        {/* <Typography variant="body2" color="textSecondary" component="p"> */}
                            In response to growing numbers of COVID-19, myself and a team of 3 others wanted 
                            to create a website to help people easily identify vaccine locations near them. 
                            <br></br>
                            Vaccine Maps allows the user to input their zipcode and search, which 
                            will display vaccine locations within their given radius. Users can filter
                            by different vaccine types, if desired.
                            <br></br> 
                            In addition, users can leave feedback once they have received a particular vaccine.
                            <br></br>
                            A section of data is provided on the website, to visually display feedback on the vaccine types,
                            and view which vaccines are most popular. 
                            <br></br>
                            <b>Technologies:</b> Py4Web, vue.js, Bulma CSS, Google Cloud Platform
                        {/* </Typography> */}
                    </CardContent>
            </Card>
        </React.Fragment>
    )
}

export default Portfolio;