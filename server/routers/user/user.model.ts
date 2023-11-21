import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';
import { UserDocument } from '../../lib/types';

const UserSchema = new Schema<UserDocument>(
  {
    username: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// hashing the password before saving the user Document
UserSchema.pre('save', async function (next) {
  const saltRounds = 12;
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(this.get('password'), salt);
  this.set('password', hashedPassword);

  next();
});

UserSchema.pre('updateOne', async function (next) {
  const saltRounds = 12;
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(this.get('password'), salt);
  this.set('password', hashedPassword);

  next();
});
// validate password provided by the client
// UserSchema.method(
//   'comparePasswords',
//   async function comparePasswords(passwordToCompare: string) {
//     const isValid = await bcrypt.compare(passwordToCompare, this.password);
//     return isValid;
//   }
// );

export const User = model('User', UserSchema);
