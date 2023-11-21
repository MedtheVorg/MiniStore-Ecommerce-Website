import { Link, useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { type TSignUpSchema } from '../lib/types';
import { signUpSchema } from '../lib/schemas.ts';
import ErrorMessage from '../components/ErrorMessage';
import { createUser } from '../axios/axiosConfig.ts';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { useRef, useState } from 'react';

const SignUpPage = () => {
  const navigate = useNavigate();
  // abort controller for aborting requests made by the client
  const abortController = useRef(new AbortController());

  // react form hook (useForm hook)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSignUpSchema>({
    resolver: zodResolver(signUpSchema.optional()),
  });

  // useMutation hook from react query for CRUD operations
  const { mutate, isLoading } = useMutation({
    mutationFn: (data: TSignUpSchema) =>
      createUser(data, abortController.current.signal),
  });

  // form submit handler
  async function signUp(submittedData: TSignUpSchema) {
    // prevent the client from submitting the form multiple times before the request is handled
    abortController.current.abort();

    // reset the abortController for the next request
    abortController.current = new AbortController();

    try {
      mutate(submittedData, {
        onSuccess: (data: any) => {
          if ((data.success = true)) {
            toast.success('account created ! ');
            navigate('/auth/login');
          }
        },
        onError: (err: any) => {
          toast.error(err.message);
        },
      });
    } catch (error: any) {
      if (error) {
        toast.warn('something went Wrong ');
      }
    }
  }

  return (
    <div className="bg-lightWhite   flex  justify-center px-4">
      <form
        className="bg-white p-4 lg:p-8 py-8 max-w-[500px] w-full shadow-lg my-16 rounded-lg border-2"
        onSubmit={handleSubmit(signUp)}
      >
        <h1 className="font-semibold text-5xl text-center">Sign Up</h1>
        <p className="  mt-8 mb-4 text-center">
          Please fill the form below to create an account
        </p>
        <div className="flex flex-col gap-4 my-8">
          <div className="flex flex-col">
            <input
              {...register('username')}
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              className="p-4 border-2 focus:outline-semiBlue "
            />
            <div className="h-8">
              <ErrorMessage errorObject={errors} target="username" />
            </div>
          </div>

          <div className="flex flex-col">
            <input
              {...register('email')}
              type="text"
              name="email"
              id="email"
              placeholder="Email address"
              className="p-4 border-2 focus:outline-semiBlue "
            />
            <div className="h-8">
              <ErrorMessage errorObject={errors} target="email" />
            </div>
          </div>

          <div className="flex flex-col">
            <input
              {...register('password')}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="p-4 border-2 focus:outline-semiBlue  "
            />
            <div className="h-8">
              <ErrorMessage errorObject={errors} target="password" />
            </div>
          </div>

          <div className="flex flex-col">
            <input
              {...register('confirmPassword')}
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="confirm password"
              className="p-4 border-2 focus:outline-semiBlue  "
            />
            <div className="h-8">
              <ErrorMessage errorObject={errors} target="confirmPassword" />
            </div>
          </div>

          <button
            className=" text-white bg-semiBlue px-8 py-3 font-lato font-normal   transition-all hover:rounded-3xl border-2 flex items-center justify-center gap-4 disabled:bg-gray-500 disabled:cursor-no-drop"
            // disabled={isLoading}
          >
            {isLoading ? <Spinner /> : 'Sign up'}
          </button>
        </div>
        <p className="text-center">
          Already have an account?{' '}
          <Link to={'/auth/login'} className="text-semiBlue underline">
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
};
export default SignUpPage;
