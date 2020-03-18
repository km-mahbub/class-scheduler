import * as actionTypes from "../actions/actionsTypes";

const initState = {
  open: false
};

const modalReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.MODAL_OPEN:
      return {
        ...state,
        open: true
      };
    case actionTypes.MODAL_CLOSE:
      return {
        ...state,
        open: false
      };
    default:
      return state;
  }
};

export default modalReducer;
