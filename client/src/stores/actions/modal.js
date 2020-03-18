import * as actionTypes from "../actions/actionsTypes";

export const modalOpen = () => {
  return {
    type: actionTypes.MODAL_OPEN
  };
};

export const modalClose = () => {
  return {
    type: actionTypes.MODAL_CLOSE
  };
};