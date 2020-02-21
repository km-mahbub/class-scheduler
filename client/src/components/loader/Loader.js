import React from 'react';
import { useStateLink } from '@hookstate/core';

import stateLink from '../../store';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import './loader.css';

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default () => {
  const store = useStateLink(stateLink);
  const classes = useStyles();

  return (
  <Backdrop className={classes.backdrop} open={store.value.loader}>
    {/* <CircularProgress color="secondary" /> */}
    <div className="lds-facebook"><div></div><div></div><div></div></div>
  </Backdrop>);
}