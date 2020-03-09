import AuthenticationServices from "../../services/AuthenticationAPI";

export function signin(username, password) {
  
  return dispatch => {
    dispatch(signinBegin());
    AuthenticationServices.signin({ username, password })
      .then(res => {
        dispatch(signinSuccess(res));
        return res;
      })
      .catch(error => {
        dispatch(signinFailure(error));
      });
  };
}

export const signinBegin = () => ({
  type: "SIGNIN_BEGIN"
});

export const signinSuccess = authentication => ({
  type: "SIGNIN_SUCCESS",
  payload: { authentication }
});

export const signinFailure = error => ({
  type: "SIGNIN_FAILURE",
  payload: { error }
});