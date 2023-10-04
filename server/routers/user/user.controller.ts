import { Request, Response } from 'express';
import { User } from './user.model.ts';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

/**
 * @method POST
 * @description  create a new user (sign up)
 * @path  : user/register
 */
export async function createUser(req: Request, res: Response) {
  const data = req.body;
  const newUser = await User.create(data);
  res.status(200).json({ success: true, message: 'user created' });
}

/**
 * @method POST
 * @description  fetch  user by credentials ( log in)
 * @path  : user/register
 */
export async function getUser(req: Request, res: Response) {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });
  if (!user) {
    return res.status(200).json({
      success: false,
      message:
        'Login Failed: The email address you entered is not registered in our system. Please check your email or consider signing up for an account',
    });
  } else {
    if (await bcrypt.compare(password, user.password)) {
      // generate token
      const token = jwt.sign(
        { _id: user._id, username: user.username, email: user.email },
        process.env.TOKEN_ENCRYPTION_SECRET as string,
        { expiresIn: '1h' }
      );
      // set cookie
      res.cookie('token', token);

      res.status(200).json({ success: true, user: user });
    } else {
      return res.status(200).json({
        success: false,
        message:
          'Login Failed : please check your email and password and try again',
      });
    }
  }
}
