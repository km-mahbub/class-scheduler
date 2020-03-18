import * as actionTypes from "../actions/actionsTypes";
import axios from "axios";
import { loaderStart, loaderStop } from "./auth";

export const fetchEventsStart = () => {
  return {
    type: actionTypes.FETCH_EVENTS_START
  };
};

export const fetchEventsSuccess = (data) => {
  return {
    type: actionTypes.FETCH_EVENTS_SUCCESS,
    data: data
  };
};

export const fetchEventsFail = error => {
  return {
    type: actionTypes.FETCH_EVENTS_FAIL,
    error: error
  };
};

export const fetchEvents = () => {
  return dispatch => {
    dispatch(fetchEventsStart());
    dispatch(loaderStart());

    let url = "http://localhost:4040/v1/events";
    axios
      .get(url)
      .then(response => {
        dispatch(fetchEventsSuccess(response.data));
        dispatch(loaderStop());
      })
      .catch(error => {
        dispatch(fetchEventsFail("Error occured fetching events."));
        dispatch(loaderStop());
      });
  };
};
