import { Link, useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import ErrorMessage from '../components/ErrorMessage';
import { type TLogInSchema } from '../lib/types';
import { logInSchema } from '../lib/schemas';
import { useMutation } from '@tanstack/react-query';
import { getUser } from '../axios/axiosConfig';
import { useRef } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/user/userSlice';

// abort controller for aborting requests made by the client
let abortController = new AbortController();

const LogInPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // abort controller for aborting requests made by the client
  const abortController = useRef(new AbortController());

  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<TLogInSchema>({ resolver: zodResolver(logInSchema) });

  const { mutate, isLoading } = useMutation({
    mutationFn: (data: TLogInSchema) =>
      getUser(data, abortController.current.signal),
  });

  async function logIn(userInputData: TLogInSchema) {
    try {
      abortController.current.abort();
      abortController.current = new AbortController();
      await new Promise((resolve) => setTimeout(resolve, 1000));
      mutate(userInputData, {
        onSuccess: (result) => {
          if (result.success) {
            const fetchedUser = result.user;
            dispatch(loginUser(fetchedUser));
            toast.info('Success !');
            navigate('/');
          } else {
            toast.warn(result.message);
          }
        },
        onError: (error: any) => {
          toast.error(error.message);
        },
      });
    } catch (error: any) {
      toast.error(error.message);
    }
  }

  return (
    <div className="bg-lightWhite   flex  justify-center px-4">
      <form
        className="bg-white p-8 max-w-[500px] w-full shadow-lg my-16 h-fit rounded-lg border-2"
        onSubmit={handleSubmit(logIn)}
      >
        <h1 className="font-semibold text-5xl text-center">Log In</h1>
        <p className="  mt-8 mb-4 text-center">
          Please fill the form below to Log In
        </p>

        <div className="flex flex-col gap-4 my-8">
          <input
            {...register('email', {
              required: { value: true, message: ' email is required' },
            })}
            type="text"
            name="email"
            id="email"
            placeholder="Email address..."
            className="p-4 border-2 focus:outline-semiBlue text-xl"
          />
          <ErrorMessage errorObject={errors} target="email" />

          <input
            {...register('password', {
              required: { value: true, message: ' password is required' },
            })}
            type="password"
            name="password"
            id="password"
            placeholder="Password..."
            className={'p-4 border-2 focus:outline-semiBlue text-xl '}
          />
          <ErrorMessage errorObject={errors} target="password" />

          <button
            className=" text-white bg-semiBlue px-8 py-3 font-lato font-normal   transition-all hover:rounded-3xl border-2 flex items-center justify-center gap-4 disabled:bg-gray-500"
            disabled={isSubmitting || isLoading}
          >
            {isSubmitting ? <Spinner /> : 'Log In'}
          </button>
        </div>
        <p className="text-center">
          You don't have an account{' '}
          <Link to={'/auth/signup'} className="text-semiBlue underline">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};
export default LogInPage;
