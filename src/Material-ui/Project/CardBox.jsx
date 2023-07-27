import React, { Component } from "react";

import { Button, Typography, Container } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { withStyles } from "@material-ui/core/styles";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';

import Image from "../../Images/6f6c1538b050072b002dbc06bedaaf90.jpg";

const styles = (theme) => ({
  root: {
    maxWidth: "100%",
    backgroundColor: "#1E2A32",
    borderRadius: "20px",
  },
  heading: {
    color: "#fff",
  },
  container : {
    width : "100%",
    padding: 0,
    display: "flex",
    justifyContent: "start",
    gap : "2rem"
  },
  content : {
    color: "#fff"
  }
});

class CardBox extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={Image}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={classes.heading}
            >
              Material Design 3 Implementation
            </Typography>
            <Container className={classes.container}>
              <Typography className={classes.content} variant="body2" color="textSecondary" component="p">
                <PlayCircleFilledIcon /> Session 7 / 32
              </Typography>
              <Typography className={classes.content} variant="body2" color="textSecondary" component="p">
                <DonutLargeIcon /> Progress 21.7%
              </Typography>
            </Container>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            variant="contained"
            style={{
              width: "100%",
              borderRadius: "20px",
              backgroundColor: "#A2c9FF",
            }}
          >
            Continue
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(CardBox);
