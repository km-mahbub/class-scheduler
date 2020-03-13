import React from 'react';
import { connect } from "react-redux";

import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import './loader.css';

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const Loader = (props) => {
  const classes = useStyles();

  return (
    <Backdrop className={classes.backdrop} open={props.loading || false}>
      {/* <CircularProgress color="secondary" /> */}
      <div className="lds-facebook"><div></div><div></div><div></div></div>
    </Backdrop>);
}

const mapStateToProps = state => {
  return {
    loading: state.authReducer.loading
  };
};

export default connect(mapStateToProps)(Loader);