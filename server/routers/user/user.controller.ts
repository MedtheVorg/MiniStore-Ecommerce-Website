import { NextFunction, Request, Response } from 'express';
import { User } from './user.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { decodedUserToken, type TUser } from '../../lib/types.js';
import mongoose from 'mongoose';

interface CustomRequest extends Request {
  user: TUser;
  id: string;
}

/**
 * @method POST
 * @description  create a new user (sign up)
 * @path  : auth/register
 */
export async function signUpUser(req: Request, res: Response) {
  const data = req.body;
  const newUser = await User.create(data);
  res.status(200).json({ success: true, message: 'user created' });
}

/**
 * @method POST
 * @description  fetch  user by credentials ( log in)
 * @path  : auth/register
 */
export async function logInUser(req: Request, res: Response) {
  const { email, password } = req.body;
  console.log(`email : ${email}`);
  console.log(`password : ${password}`);

  const userTryingToLogIn = await User.findOne({ email: email });
  console.log(`userTrying to log in : ${userTryingToLogIn}`);
  console.log(bcrypt.compareSync(password, userTryingToLogIn?.password!));

  if (!userTryingToLogIn) {
    return res.status(200).json({
      success: false,
      message:
        'Login Failed: The email address you entered is not registered in our system. Please check your email or consider signing up for an account',
    });
  } else {
    if (await bcrypt.compare(password, userTryingToLogIn.password)) {
      // generate token
      const token = jwt.sign(
        {
          _id: userTryingToLogIn._id,
          username: userTryingToLogIn.username,
          email: userTryingToLogIn.email,
        },
        process.env.TOKEN_ENCRYPTION_SECRET as string,
        { expiresIn: '1h' }
      );

      // clearing the cookie from the front end if the user trying to log in already has a token
      if (req.cookies[String(userTryingToLogIn._id)]) {
        req.cookies[String(userTryingToLogIn._id)] = '';
      }
      // set cookie
      res.cookie(String(userTryingToLogIn._id), token, {
        httpOnly: true,
        sameSite: 'lax',
        expires: new Date(Date.now() + 1000 * 60 * 60),
      });

      res.status(200).json({ success: true, user: userTryingToLogIn });
    } else {
      return res.status(200).json({
        success: false,
        message:
          'Login Failed : please check your email and password and try again',
      });
    }
  }
}

/**
 * @method POST
 * @description update user
 * @path : auth/update
 */
export async function updateUser(req: Request, res: Response) {
  const fieldsToUpdate = req.body;
  let userToUpdate = await User.findById((req as CustomRequest).id);

  if (userToUpdate) {
    userToUpdate.username = fieldsToUpdate.username;
    userToUpdate.password = fieldsToUpdate.password;
    await userToUpdate.save();
    return res.status(201).json({ updatedUser: userToUpdate });
  } else {
    return res.status(400).json({ message: 'could not update' });
  }
}

/**
 * @method GET
 * @description fetch user by token (cookie)
 * @path : auth/profile
 */
export function getUserByToken(req: Request, res: Response) {
  const userId = (req as CustomRequest).id;
  if (!mongoose.isValidObjectId(userId)) {
    return res.status(400).json({ message: 'invalid object id ' });
  }
  User.findById(userId, '-password').then((user) => {
    if (!user) {
      return res.status(404).json({ message: 'user was not found' });
    }

    return res.status(200).json(user);
  });
}

/**
 * @method GET
 * @description verify token
 * @path : auth/*
 */
export function verifyToken(
  req: CustomRequest,
  res: Response,
  next: NextFunction
) {
  const cookie = req.get('cookie');
  const token = cookie?.split('=')[1];

  if (!token) {
    return res.status(401).json({ message: 'No token found.' });
  }

  jwt.verify(token, process.env.TOKEN_ENCRYPTION_SECRET!, {}, (err, user) => {
    if (err) {
      return res.status(400).json({ message: 'Invalid Token.' });
    }
    req.id = Object(user)._id;
    next();
  });
}

/**
 * @method GET
 * @description refresh token
 * @path : auth/refresh
 */
export function refrechToken(req: Request, res: Response, next: NextFunction) {
  const cookie = req.headers.cookie;
  const previousToken = cookie?.split('=')[1];

  if (!previousToken) {
    console.log('token was not found here is the res.cookie header content');
    console.log(req.headers.cookie);

    return res.status(400).json({ message: 'Token was not found.' });
  }

  console.log('previous token');
  console.log(previousToken);

  jwt.verify(
    String(previousToken),
    process.env.TOKEN_ENCRYPTION_SECRET!,
    (err, user) => {
      if (err) {
        return res
          .status(403)
          .json({ message: 'Invalid token, authentication failed.' });
      }

      // generate new token
      const newGeneratedToken = jwt.sign(
        {
          _id: (user as decodedUserToken)._id,
        },
        process.env.TOKEN_ENCRYPTION_SECRET as string,
        { expiresIn: '1d' }
      );

      // set cookie
      res.clearCookie((user as decodedUserToken)._id);
      res.cookie((user as decodedUserToken)._id, newGeneratedToken, {
        httpOnly: true,
        sameSite: 'lax',
        expires: new Date(Date.now() + 1000 * 60 * 60),
      });
      (req as CustomRequest).id = (user as decodedUserToken)._id;
      next();
    }
  );
}

/**
 * @method GET
 * @description logOut the user by clearing the cookie
 * @path : auth/logout
 */
export function logOutUser(req: Request, res: Response) {
  res.clearCookie(String((req as CustomRequest).id));
  res.status(200).json({ message: 'user was logged out' });
}
