import { ReactNode } from 'react';
import {
  checkOutSchema,
  contactSchema,
  logInSchema,
  signUpSchema,
} from './schemas';
import { z } from 'zod';

export type TSignUpSchema = z.infer<typeof signUpSchema>;
export type TLogInSchema = z.infer<typeof logInSchema>;
export type TCheckOutSchema = z.infer<typeof checkOutSchema>;
export type TContactSchema = z.infer<typeof contactSchema>;

export type TProduct = {
  id: number;
  title: string;
  price: number;
  stock: number;
  category: string;
  rating: number;
  description: string;
  image: string;
};
export type CartProduct = {
  id: number;
  title: string;
  image: string;
  quantity: number;
  price: number;
};

export interface SliderProps {
  title: string;
  products?: TProduct[];
  blogs?: TBlog[];
  filter?: string | undefined;
}

export interface User {
  _id: string;
  username: string;
  email: string;
}

export interface StoreContextProps {
  [index: string]: ReactNode;
}

export interface ContextType {
  user?: User;
}

export type CartInitialState = {
  products: CartProduct[];
};

export type UserInitialState = {
  user: User | null;
};

export type TBlog = {
  id: number;
  title: string;
  publishedAt: Date;
  category: string;
  content?: string;
  image?: string;
};
