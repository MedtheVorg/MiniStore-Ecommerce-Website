import axios, { AxiosResponse, GenericAbortSignal } from 'axios';
import {
  TLogInSchema,
  updatedFields,
  type TSignUpSchema,
} from '../lib/types.ts';

const userClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  // withCredentials: true,
});

export async function createUser(
  data: TSignUpSchema,
  abortSignal: GenericAbortSignal
) {
  const response = await userClient.post('/auth/signup', data, {
    signal: abortSignal,
  });
  return response.data;
}

export async function updateUser(
  data: updatedFields,
  abortSignal: GenericAbortSignal
) {
  const response = await userClient.post('/auth/update', data, {
    signal: abortSignal,
    withCredentials: true,
  });
  return response;
}

export async function getUser(
  data: TLogInSchema,
  abortSignal: GenericAbortSignal
) {
  const response = await userClient.post('/auth/login', data, {
    signal: abortSignal,
    withCredentials: true,
  });
  return response.data;
}

export async function getUserByCookieAndToken(abortSignal: GenericAbortSignal) {
  const response = await userClient.get('/auth/profile', {
    withCredentials: true,
    signal: abortSignal,
  });
  if (response.status == 200) {
    return response.data;
  } else {
    return null;
  }
}

export async function refrechUserToken(abortSignal: GenericAbortSignal) {
  const response = await userClient.get('auth/refreshtoken', {
    withCredentials: true,
    signal: abortSignal,
  });

  if (response.status == 200) {
    return response.data;
  } else {
    null;
  }
}

export async function logOutUser() {
  const response = await userClient.get('auth/logout', {
    withCredentials: true,
  });

  return response.status === 200 ? true : false;
}
