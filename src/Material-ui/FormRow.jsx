import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';

import CodeIcon from '@material-ui/icons/Code';

const styles = (theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'start',
      color: theme.palette.text.secondary,
      backgroundColor: "#1E2A32",
      color : "#fff",
      border : "1px solid #3b3a3a"
    },
  });
  

class FormRow extends Component {
  render() {
    const { classes } = this.props;

    return (
        <React.Fragment>
    <Grid item xs={6}>
      <Paper className={classes.paper}>
        <CodeIcon/>
        {this.props.content1}
        </Paper>
    </Grid>
    <Grid item xs={6}>
      <Paper className={classes.paper}>
        <BusinessCenterIcon style={{color : "rgb(103, 171, 103)"}}/>
        {this.props.content2}
        </Paper>
    </Grid>
  </React.Fragment>
    )
  }
}

export default withStyles(styles)(FormRow);
