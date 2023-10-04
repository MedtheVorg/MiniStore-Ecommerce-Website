import { z } from 'zod';
import validator from 'validator';

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

export const checkOutSchema = z
  .object({
    fistName: z.string().min(1, 'first name is required '),
    lastName: z.string().min(1, 'last name is required '),
    companyName: z.string().optional(),
    countryOrRegion: z.enum([
      'United States (US)',
      'Canada',
      'France',
      'Russia',
      'Japan',
    ]),
    streetAddress1: z
      .string()
      .min(1, 'House number and street name  are required '),
    streetAddress2: z.string().min(1, 'Apartment / suit is required '),
    townOrCity: z.string().min(1, 'town / city  is required '),
    zipCode: z.string().refine((args) => {
      return validator.isPostalCode(args, 'any');
    }, 'please provide a valid zipCode'),
    phone: z
      .string()
      .refine(validator.isMobilePhone, 'please enter a valid mobile phone'),
    email: z.string().email('please provide a valid email'),
    orderNotes: z.string().optional(),
    paymentMethod: z.enum([
      'Direct bank transfer',
      'Check payments',
      'Cash on delivery',
      'PayPal',
    ]),
  })
  .required({ paymentMethod: true });

export const contactSchema = z.object({
  fullName: z.string().min(1, 'fullname is required'),
  email: z.string().email('please provide a valid email'),
  phoneNumber: z
    .string()
    .refine(validator.isMobilePhone, 'please enter a valid mobile phone'),
  subject: z.string().min(1, 'subject is required'),
  message: z.string().min(1, 'message is required'),
});
