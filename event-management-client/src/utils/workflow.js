import { destroySession, getSession } from "./session.js";
import { logout, validate } from "../services/reducers/authSlice.js";

export const workflowStarted = (dispatch) => {
  destroySession();
};

export const validateSession = async (dispatch) => {
  const session = await getSession();
  if (!session) {
    await dispatch(logout());
  } else {
    await dispatch(validate({ user: session.user, token: session.token }));
  }
};
