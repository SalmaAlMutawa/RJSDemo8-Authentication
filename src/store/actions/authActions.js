import axios from "axios";
import jwt_decode from "jwt-decode";

import * as actionTypes from "./actionTypes";

export const login = userData => {
  return dispatch => {
    axios
      .post("https://precious-things.herokuapp.com/login/", userData)
      .then(res => res.data)
      .then(user => console.log(jwt_decode(user.token)))
      .catch(err => console.error(err.response));
  };
};

const setCurrentUser = user => ({
  type: actionTypes.SET_CURRENT_USER,
  payload: user
});
