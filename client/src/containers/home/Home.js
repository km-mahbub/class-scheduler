import React from 'react';
import { withTranslation } from 'react-i18next';
import clsx from 'clsx';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Skeleton from '@material-ui/lab/Skeleton';

import { NavBar, NavDrawer, Calendar } from '../../components';
import { HomeStyles as useStyles } from '../../styles';

const Home = (props) => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

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
                <Calendar />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}

export default withTranslation()(Home);