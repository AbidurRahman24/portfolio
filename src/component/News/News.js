import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Col, Container, Row } from "react-bootstrap";

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    margin: '10px',
    float: 'right'
  },
  media: {
    height: 120,
  },
});

const News = (props) => {
  const classes = useStyles();
  const { title, description, urlToImage } = props.news;
  return (
    <div>
      <Container>
        <Row>
          <Col md={8} sm={12}>
          <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={urlToImage}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">{title}</Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">Learn More</Button>
        </CardActions>
      </Card>
          </Col>
          <Col md={4} sm={12}>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default News;
