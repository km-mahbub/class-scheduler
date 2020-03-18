import * as actionTypes from "../actions/actionsTypes";

const initState = {
  data: null,
  error: null
};

const eventReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_EVENTS_START:
      return {
        ...state,
        error: null
      };
    case actionTypes.FETCH_EVENTS_SUCCESS:
      return {
        ...state,
        data: action.data,
        error: null
      };

    case actionTypes.FETCH_EVENTS_FAIL:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};

export default eventReducer;
