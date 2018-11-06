import axios from "axios";
import jwt_decode from "jwt-decode";

import * as actionTypes from "./actionTypes";

const setAuthToken = token => {
  axios.defaults.headers.common.Authorization = `jwt ${token}`;
};

export const login = userData => {
  return dispatch => {
    axios
      .post("https://precious-things.herokuapp.com/login/", userData)
      .then(res => res.data)
      .then(user => {
        const decodedUser = jwt_decode(user.token);
        setAuthToken(user.token);
        dispatch(setCurrentUser(decodedUser));
      })
      .catch(err => console.error(err.response));
  };
};

export const logout = () => setCurrentUser();

const setCurrentUser = user => ({
  type: actionTypes.SET_CURRENT_USER,
  payload: user
});
