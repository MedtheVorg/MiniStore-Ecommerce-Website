import axios, { GenericAbortSignal } from 'axios';
import { TLogInSchema, type TSignUpSchema } from '../lib/types.ts';

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

export async function getUser(
  data: TLogInSchema,
  abortSignal: GenericAbortSignal
) {
  const response = await userClient.post('/auth/login', data, {
    signal: abortSignal,
  });
  return response.data;
}
