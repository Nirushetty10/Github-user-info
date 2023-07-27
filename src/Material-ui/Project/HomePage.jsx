import React, { Component } from "react";
import "./HomePage.scss";
import { Box, Button, Container, Typography } from "@material-ui/core";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";

import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MicNoneIcon from "@material-ui/icons/MicNone";
import SearchIcon from "@material-ui/icons/Search";
import FormRow from "../FormRow";
import CardBox from "./CardBox";
import HomeIcon from "@material-ui/icons/Home";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import Profile from "../../Images/0132075_christopher-nolan.jpeg";
import Akshay from "../../Images/akshay.jpg";
import Max from "../../Images/max.jpg";

const styles = (theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: 35,
    borderRadius: 20,
    backgroundColor: "#1E2A32",
    color: "#fff",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    color: "#fff",
  },
  iconButton: {
    padding: 10,
    color: "#fff",
  },
  divider: {
    height: 28,
    margin: 4,
  },
  bottomContainer: {
    width: "25%",
    height: "100%",
    display : "flex",
    flexDirection : "column",
    alignItems : "center",
    justifyContent : "center"
  },
  profile : {
    width : "25px",
    height : "25px",
    borderRadius : "50%",
    padding : 0
  },
  image : {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius : "50%"
  },
  instructorSecHeading : {
    margin : "0.8rem 0",
    height : "1.5rem",
    display : "flex",
    alignItems : "center",
    justifyContent : "space-between"
  },
  instructorCard : {
     display : "flex",
     justifyContent : "space-between",
     padding : 0
  },
  instructorImage : {
    width : "60px",
    height : "60px",
    borderRadius : "50%",
    padding : 0
  }
});

class HomePage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="layout">
        <div className="navigation-sec">
          <div className="nav-top-content">
            <Container maxWidth="sm" style={{ paddingLeft: 0 , margin : 0 }}>
              <Typography variant="h3">Hello, Aaron!</Typography>
              <Typography variant="h6">Let's learn something today</Typography>
            </Container>
            <div className="notification">
              <NotificationsNoneOutlinedIcon />
            </div>
          </div>

          <Paper component="form" className={classes.root}>
            <IconButton
              type="submit"
              className={classes.iconButton}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
            <InputBase
              className={classes.input}
              placeholder="Search"
              inputProps={{ "aria-label": "Search" }}
            />

            <Divider className={classes.divider} orientation="vertical" />
            <IconButton
              color="primary"
              className={classes.iconButton}
              aria-label="directions"
            >
              <MicNoneIcon />
            </IconButton>
          </Paper>
          <div className="nav-grid">
            <Grid container spacing={1}>
              <Grid
                container
                item
                xs={12}
                spacing={1}
                style={{ padding: 0, margin: "0.2rem 0" }}
              >
                <FormRow content1="Development" content2="Design" />
              </Grid>
              <Grid
                container
                item
                xs={12}
                spacing={1}
                style={{ padding: 0, margin: "0.2rem 0" }}
              >
                <FormRow content1="Marketing" content2="Business" />
              </Grid>
            </Grid>
          </div>
        </div>
        <div className="content-sec">
          <Typography variant="h3">Continue Learning</Typography>
          <div className="card">
            <CardBox />
          </div>
          <div className="instructor-sec">
          <Container className={classes.instructorSecHeading}>
            <Typography variant="h5">Top Instructor</Typography>
            <Typography variant="h6">Show More</Typography>
          </Container>
          <Container className={classes.instructorCard}>
          <Container className={classes.instructorImage}>
               <img src={Profile} className={classes.image} style={{width : "60px"}}/>
               <Typography variant="h6" style={{whiteSpace: "nowrap"}}>Sultan Deler</Typography>
          </Container>
          <Container className={classes.instructorImage}>
               <img src={Akshay} className={classes.image} style={{width : "60px"}}/>
               <Typography variant="h6" style={{whiteSpace: "nowrap"}}>Akshay saini</Typography>
          </Container>
          <Container className={classes.instructorImage}>
               <img src={Max} className={classes.image} style={{width : "60px"}}/>
               <Typography variant="h6" style={{whiteSpace: "nowrap"}}>MaxMillian</Typography>
          </Container>
          </Container>
        </div>
        </div>
        
        <div className="bottom-sec">
          <Container className={classes.bottomContainer}>
            <HomeIcon/>
            <Typography variant="h5">Home</Typography>
          </Container>
          <Container className={classes.bottomContainer}>
            <LibraryBooksIcon />
            <Typography variant="h5">Class</Typography>
          </Container>
          <Container className={classes.bottomContainer}>
            <FavoriteBorderIcon />
            <Typography variant="h5">Favorite</Typography>
          </Container>
          <Container className={classes.bottomContainer}>
            <Container className={classes.profile}>
               <img src={Profile} className={classes.image} style={{width : "25px"}}/>
            </Container>
             
            <Typography variant="h5">Profile</Typography>
          </Container>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(HomePage);
