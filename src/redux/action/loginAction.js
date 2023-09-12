export const FETCH_USER_LOGIN = "FETCH_USER_LOGIN";

const loginAction = (data) => {
  return {
    type: FETCH_USER_LOGIN,
    payload: data,
  };
};

export default loginAction;
