import Avatar from 'boring-avatars';
import { useDispatch, useSelector } from 'react-redux';
import { StoreType } from '../reduxStore/store';
import History from '../containers/Main/components/History';
import { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import ErrorMessage from '../components/ErrorMessage';
import { motion } from 'framer-motion';
import { TSignUpSchema, User } from '../lib/types';
import { signUpSchema } from '../lib/schemas';
import {
  getUserByCookieAndToken,
  refrechUserToken,
  updateUser,
} from '../axios/axiosConfig';
import { useNavigate } from 'react-router-dom';
import { loginUser, logoutUser } from '../reduxStore/features/user/userSlice';
import { resetCart } from '../reduxStore/features/cart/cartSlice';
import logIt from '../lib/logIt';
import { toast } from 'react-toastify';
import FakeLoader from '../components/FakeLoader';
import Spinner from '../components/Spinner';
let firstRender = true;

const ProfilePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: StoreType) => state.userState.user);
  const [isActive, setIsActive] = useState(true);
  const abortController = useRef(new AbortController());

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitted, isValid },
  } = useForm<TSignUpSchema>({
    defaultValues: { username: user?.username, email: user?.email },
    resolver: zodResolver(signUpSchema.optional()),
  });

  async function updateTheUser(data: TSignUpSchema) {
    logIt(data);
    const response = await updateUser(
      { username: data.username, password: data.password },
      abortController.current.signal
    );
    if (response.status === 201) {
      toast.success('Credentials updated successfully.');
      dispatch(loginUser(response.data.updatedUser));
      navigate('/');
    } else {
      toast.error(response.data.message);
    }
  }

  useEffect(() => {
    let timer: number;

    async function fetchUserByCookie() {
      const user = await getUserByCookieAndToken(
        abortController.current.signal
      ).catch((err) => logIt('error fetching user by token'));

      if (user) {
        dispatch(loginUser(user));
        logIt('user fetched');
      } else {
        dispatch(logoutUser());
        dispatch(resetCart());
        navigate('/');
      }
    }

    async function refrechToken() {
      logIt('user refetched ! ');
      const user = await refrechUserToken(abortController.current.signal).catch(
        (err) => {
          logIt('error while trying to refresh token');
          logIt(err);
        }
      );

      if (!user) {
        dispatch(logoutUser());
        dispatch(resetCart());
        navigate('/');
      }
    }

    if (firstRender) {
      fetchUserByCookie();
      firstRender = false;
    } else {
      logIt('setting the timer');
      timer = setInterval(() => {
        logIt('token refreshed');
        refrechToken();
      }, 1000 * 25);
    }

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <History />
      <section className="max-w-screen-xl mx-auto ">
        <div className=" lg:grid lg:grid-cols-3 ">
          <div className=" p-4 border-r-2 lg:col-span-1 ">
            <p className="text-xl uppercase underline">Settings</p>
            <ul className=" mt-4 flex flex-col gap-y-4">
              <li
                className={`capitalize p-2 hover:bg-gray-200 cursor-pointer ${
                  isActive
                    ? 'bg-gray-200 font-semibold border-l-4 border-l-semiBlue'
                    : ''
                }`}
                onClick={() => setIsActive(true)}
              >
                profile
              </li>
              <li
                className={`capitalize p-2 hover:bg-gray-200 cursor-pointer ${
                  !isActive
                    ? 'bg-gray-200 font-semibold border-l-4 border-l-semiBlue'
                    : ''
                }`}
                onClick={() => setIsActive(false)}
              >
                orders
              </li>
            </ul>
          </div>
          <div className="min-h-[30rem] lg:col-span-2">
            {isActive ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="flex flex-col  gap-y-4 py-8  px-2">
                  <div className="place-self-center">
                    <Avatar
                      name={`${user?.username} ${user?.email} ${user?._id}`}
                      size={80}
                      colors={[
                        '#92A1C6',
                        '#146A7C',
                        '#F0AB3D',
                        '#C271B4',
                        '#C20D90',
                      ]}
                      variant="beam"
                    />
                  </div>
                  <form
                    className="flex flex-col gap-y-8 p-4 border-2 "
                    onSubmit={handleSubmit(updateTheUser)}
                  >
                    {/* _id */}
                    <div className="flex flex-col  gap-y-4 md:flex-row md:items-center md:gap-x-8 md:gap-y-0 ">
                      <label htmlFor="id" className="capitalize flex-[0.1]">
                        id :
                      </label>
                      <input
                        type="text"
                        value={user?._id}
                        disabled
                        className="border-[1px] p-2 outline-transparent focus:outline-semiBlue disabled:bg-gray-300 disabled:text-gray-400 flex-[0.9]  "
                      />
                    </div>
                    {/* email*/}
                    <div className="flex flex-col  gap-y-4 md:flex-row md:items-center md:gap-x-8 md:gap-y-0 ">
                      <label htmlFor="email" className="capitalize flex-[0.1]">
                        Email :
                      </label>
                      <input
                        type="text"
                        disabled
                        value={user?.email}
                        className="border-2 p-2  outline-transparent focus:outline-semiBlue flex-[0.9] disabled:bg-gray-300 disabled:text-gray-400"
                        placeholder={user?.email}
                      />
                    </div>
                    {/* username*/}
                    <div className="flex flex-col  gap-y-4 md:flex-row md:items-center md:gap-x-8 md:gap-y-0">
                      <label
                        htmlFor="username"
                        className="capitalize flex-[0.1]"
                      >
                        name :
                      </label>
                      <input
                        type="text"
                        {...register('username')}
                        className="border-2 p-2  outline-transparent focus:outline-semiBlue flex-[0.9]"
                        placeholder={user?.username}
                      />
                    </div>
                    <ErrorMessage errorObject={errors} target="username" />

                    {/* password*/}
                    <div className="flex flex-col  gap-y-4 md:flex-row md:items-center md:gap-x-8 md:gap-y-0">
                      <label
                        htmlFor="password"
                        className="capitalize flex-[0.1]"
                      >
                        password :
                      </label>
                      <input
                        type="password"
                        {...register('password')}
                        className="border-2 p-2  outline-transparent focus:outline-semiBlue flex-[0.9]   "
                        placeholder="**************"
                      />
                    </div>
                    <ErrorMessage errorObject={errors} target="password" />

                    {/* confirm password*/}
                    <div>
                      <div className="flex flex-col  gap-y-4 md:flex-row md:items-center md:gap-x-8 md:gap-y-0">
                        <label
                          htmlFor="confirmpassword"
                          className="capitalize flex-[0.1]"
                        >
                          confirm password :
                        </label>
                        <input
                          type="password"
                          {...register('confirmPassword')}
                          className="border-2 p-2  outline-transparent focus:outline-semiBlue flex-[0.9]"
                          placeholder="**************"
                        />
                      </div>
                      <ErrorMessage
                        errorObject={errors}
                        target="confirmPassword"
                      />
                    </div>

                    <button className="py-2 px-8 border-[1px] bg-dark text-white  place-self-end ">
                      {isSubmitted && isValid ? <Spinner /> : 'update'}
                    </button>
                  </form>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.5,
                }}
              ></motion.div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
export default ProfilePage;
