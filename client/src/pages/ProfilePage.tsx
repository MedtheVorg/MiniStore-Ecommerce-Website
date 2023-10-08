import Avatar from 'boring-avatars';
import { useSelector } from 'react-redux';
import { StoreType } from '../redux/reduxStore';
import History from '../containers/Main/components/History';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import ErrorMessage from '../components/ErrorMessage';
import { AnimatePresence, motion } from 'framer-motion';

const ProfilePage = () => {
  const user = useSelector((state: StoreType) => state.userState.user);
  const [isActive, setIsActive] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<{ username: string }>({
    defaultValues: { username: user?.username },
    resolver: zodResolver(
      z.object({
        username: z
          .string()
          .min(4, ' name must be at least  4 characters long'),
      })
    ),
  });

  function updateUser(data: { username: string }) {
    // todo: update user
  }

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
                <div className="flex flex-col  gap-y-4 py-8">
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
                    className="pt-4 flex flex-col gap-y-8 px-4"
                    onSubmit={handleSubmit(updateUser)}
                  >
                    {/* _id */}
                    <div className="p-2 flex items-center  gap-x-4">
                      <label
                        htmlFor="id"
                        className="mr-4 flex-[0.2] capitalize"
                      >
                        id :
                      </label>
                      <input
                        type="text"
                        value={user?._id}
                        disabled
                        className="border-[1px] p-2 flex-1 border-semiBlue disabled:bg-gray-300 disabled:text-gray-400"
                      />
                    </div>

                    {/* username*/}
                    <div className="p-2 flex items-center  gap-x-4">
                      <label
                        htmlFor="id"
                        className="mr-4 flex-[0.2]   capitalize "
                      >
                        name :
                      </label>
                      <input
                        type="text"
                        {...register('username')}
                        className="border-[1px] p-2 flex-1 outline-transparent focus:outline-semiBlue "
                      />
                    </div>
                    <ErrorMessage errorObject={errors} target="username" />

                    <button className="py-2 px-8 border-[1px] bg-dark text-white  place-self-end ">
                      update
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
