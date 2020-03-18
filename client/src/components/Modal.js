import React from 'react';
import { connect } from "react-redux";

import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';

import * as actions from "../stores/actions/index";
import { EventForm } from './eventCalendar';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const Modal = (props) => {

  return (
    <Dialog TransitionComponent={Transition} keepMounted open={props.open} onClose={props.closeModal} aria-labelledby="form-dialog-title">
      <EventForm></EventForm>
    </Dialog>
  );
}

const mapStateToProps = state => {
  return {
    open: state.modalReducer.open
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(actions.modalClose())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);