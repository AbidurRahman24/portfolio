import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 340,
    margin: '10px',
    float: 'right'
  },
  media: {
    height: 135,
  },
});

const News = (props) => {
  const classes = useStyles();
  const { title, description, urlToImage } = props.news;
  return (
    <div>
      <Container>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={urlToImage}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            <Link to={`/news/${title}`}>{title}</Link>

              
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
          <Link to={`/news/${title}`}>Learn More</Link>
            
          </Button>
        </CardActions>
      </Card>
      </Container>
    </div>
  );
};

export default News;
