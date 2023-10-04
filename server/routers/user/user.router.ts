import express, { RequestHandler } from 'express';
import {
  validateLogInFormInputs,
  validateSignUpFormInputs,
} from '../../middleware/validateSignUpFormInputs.ts';
import { createUser, getUser } from './user.controller.ts';
export const router = express.Router();

router.post('/signup', validateSignUpFormInputs as RequestHandler, createUser);
router.post('/login', validateLogInFormInputs as RequestHandler, getUser);
