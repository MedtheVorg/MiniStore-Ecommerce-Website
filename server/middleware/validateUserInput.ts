import { Response, NextFunction } from 'express';
import { CustomRequest } from '../lib/types.ts';
import { logInSchema, signUpSchema } from '../lib/schemas.ts';

export function validateSignUpFormInputs(
  req: CustomRequest,
  res: Response,
  next: NextFunction
) {
  const signUpFormData = req.body;

  const isValid = signUpSchema.safeParse(signUpFormData);
  if (isValid.success) {
    req.user = signUpFormData;
    next();
  } else {
    res.status(422).json({
      status: 'error',
      message: 'invalid request Data',
      errors: isValid,
    });
  }
}
export function validateLogInFormInputs(
  req: CustomRequest,
  res: Response,
  next: NextFunction
) {
  const logInFormData = req.body;

  const isValid = logInSchema.safeParse(logInFormData);
  if (isValid.success) {
    req.user = logInFormData;
    next();
  } else {
    res.status(422).json({
      status: 'error',
      message: 'invalid request Data',
      errors: isValid,
    });
  }
}
