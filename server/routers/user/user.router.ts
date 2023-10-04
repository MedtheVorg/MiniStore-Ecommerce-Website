import express, { RequestHandler } from 'express';
import {
  validateLogInFormInputs,
  validateSignUpFormInputs,
} from '../../middleware/validateUserInput.js';
import { createUser, getUser } from './user.controller.js';
export const router = express.Router();

router.post('/signup', validateSignUpFormInputs as RequestHandler, createUser);
router.post('/login', validateLogInFormInputs as RequestHandler, getUser);
