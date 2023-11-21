import express, { RequestHandler } from 'express';
import {
  validateLogInFormInputs,
  validateSignUpFormInputs,
} from '../../middleware/validateUserInput.js';
import {
  getUserByToken,
  logInUser,
  logOutUser,
  refrechToken,
  signUpUser,
  updateUser,
  verifyToken,
} from './user.controller.js';
export const router = express.Router();

router.post('/signup', validateSignUpFormInputs as RequestHandler, signUpUser);
router.post('/login', validateLogInFormInputs as RequestHandler, logInUser);
// router.post('/update', validateUser as RequestHandler, updateUser);
router.get('/profile', verifyToken as RequestHandler, getUserByToken);
router.get(
  '/refreshtoken',
  refrechToken,
  verifyToken as RequestHandler,
  getUserByToken
);

router.get('/logout', verifyToken as RequestHandler, logOutUser);
router.post('/update', verifyToken as RequestHandler, updateUser);
