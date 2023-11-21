import { Request } from 'express';
import { Document, Model } from 'mongoose';

type SignUpFormData = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};
type LogInFormData = {
  email: string;
  password: string;
};

export interface CustomRequest extends Request {
  user: SignUpFormData | LogInFormData;
}

export interface UserDocument extends Document {
  username: string;
  email: string;
  password: string;
}

export interface IUser extends LogInFormData {}
interface IUserMethods {
  comparePasswords(passwordToCompare: string): boolean;
}

export type UserModel = Model<UserDocument, {}, IUserMethods>;

import { logInSchema, signUpSchema } from './schemas';
import { z } from 'zod';

export type TSignUpSchema = z.infer<typeof signUpSchema>;
export type TLogInSchema = z.infer<typeof logInSchema>;

export type TUser = {
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
};

export type decodedUserToken = {
  _id: string;
  email: string;
  username: string;
};
