import { accessTokenKey, authSessionKey } from "./constants.js";

export const createSession = (token) => {
  localStorage.setItem(authSessionKey, JSON.stringify(token));
};

export const getSession = () => {
  let credentials;
  try {
    credentials = JSON.parse(localStorage.getItem(authSessionKey));
    if (!Object.keys(credentials).includes(accessTokenKey)) {
      credentials = null;
    }
  } catch {
    credentials = null;
  }
  return credentials;
};

export const destroySession = () => {
  localStorage.removeItem(authSessionKey);
};
