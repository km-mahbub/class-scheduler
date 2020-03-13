import * as actionTypes from "../actions/actionsTypes";
import axios from "axios";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = (idToken, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: idToken,
    userId: userId
  };
};

export const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
};

export const authLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationDate");
  localStorage.removeItem("userId");
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

export const checkAuthTimeout = expirationTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(authLogout());
    }, expirationTime * 1000);
  };
};

export const auth = (email, password) => {
  return dispatch => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password
    };

    let url = "https://api.classscheduler.tk/v1/auth/login";
    axios
      .post(url, authData)
      .then(response => {
        var expirationDate = new Date();
        expirationDate.setHours(expirationDate.getHours() + 4);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("expirationDate", expirationDate);
        localStorage.setItem("userId", response.data.user._id);
        dispatch(authSuccess(response.data.token, response.data.user._id));
        dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
      })
      .catch(error => {
        dispatch(authFail("Unauthorized"));
      });
  };
};

export const setAuthRedirectPath = path => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT,
    path: path
  };
};

export const checkAuthStatus = () => {
  return dispatch => {
    const token = localStorage.getItem("token");
    if (!token) {
      dispatch(authLogout());
    } else {
      const expirationTime = new Date(localStorage.getItem("expirationDate"));
      if (expirationTime <= new Date()) {
        dispatch(authLogout());
      } else {
        const userId = localStorage.getItem("userId");
        dispatch(authSuccess(token, userId));
        dispatch(
          checkAuthTimeout(
            (expirationTime.getTime() - new Date().getTime()) / 1000
          )
        );
      }
    }
  };
};
