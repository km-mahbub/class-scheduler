import React, { useState, useLayoutEffect } from 'react';
import { withTranslation } from 'react-i18next';
import clsx from 'clsx';
import { connect } from "react-redux";

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Button from '@material-ui/core/Button';

import { drawerStore } from '../rxStores';
import * as actionTypes from '../stores/actions';

//import { NavBarStyles as customStyles } from '../styles';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  appBarSpacer: theme.mixins.toolbar
}));

function NavBar(props) {
  const { t } = props;
  const classes = useStyles();
  const [open, setOpen] = useState(drawerStore.initialState);

  useLayoutEffect(()=> {
    const subs = drawerStore.subscribe(setOpen);
    drawerStore.init();

    return () => subs.unsubscribe();
  },[]);

  const handleDrawerOpen = () => {
    drawerStore.toggleOpen(true);
  };

  return (
    <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
        >
          <MenuIcon />
        </IconButton>
        <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
          {t('appBar.dashboard')}
        </Typography>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <Button variant="contained" onClick={props.onLogout}>
          {t('appBar.logout')}
        </Button>
      </Toolbar>
    </AppBar>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(actionTypes.authLogout())
  };
};

export default withTranslation()(connect(
  null,
  mapDispatchToProps
)(NavBar));

