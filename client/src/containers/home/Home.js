import React, { useEffect } from 'react';
import { withTranslation } from 'react-i18next';
import clsx from 'clsx';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Skeleton from '@material-ui/lab/Skeleton';
import { connect } from "react-redux";

import { NavBar, NavDrawer, EventCalendar } from '../../components';
import { HomeStyles as useStyles } from '../../styles';
import * as actions from "../../stores/actions/index";

const Home = (props) => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const { fetchEvents } = props;

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  const handleDateSelection = (selectionInfo) => {
    //window.alert(selectionInfo.start);
    props.openModal();
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <NavDrawer />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <Skeleton animation="wave" height={200} width="100%" style={{ marginBottom: 6 }} />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Skeleton animation="wave" height={200} width="100%" style={{ marginBottom: 6 }} />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                {/* <Skeleton animation="wave" height={200} width="100%" style={{ marginBottom: 6 }} /> */}
                <EventCalendar eventsData={props.eventsData} handleSelect={handleDateSelection} />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    eventsData: state.eventReducer.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openModal: () => dispatch(actions.modalOpen()),
    fetchEvents: () => dispatch(actions.fetchEvents())
  };
};

export default withTranslation()(connect(
  mapStateToProps,
  mapDispatchToProps
)(Home));