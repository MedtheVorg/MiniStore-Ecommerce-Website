import { z } from 'zod';

export const logInSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(1),
  })
  .required();

export const signUpSchema = z
  .object({
    username: z.string().min(5, 'username must at least be 5  characters long'),
    email: z.string().email('invalid email , example : example@gmail.com'),
    password: z
      .string()
      .regex(
        /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!])(.{10,})$/,
        'password must be at least 10 characters long and contains 1 uppercase letter, a number and a special character'
      ),
    confirmPassword: z.string(),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: 'Passwords must match.',
    path: ['confirmPassword'],
  });
