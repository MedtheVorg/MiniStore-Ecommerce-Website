import z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import ErrorMessage from '../../../components/ErrorMessage';
import { motion } from 'framer-motion';
import { useState } from 'react';

const subscribeFormSchema = z.object({
  email: z.string().email(),
});

type TSubscribeFormSchema = z.infer<typeof subscribeFormSchema>;

const SubscribeFrom = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, submitCount },
    reset,
  } = useForm<TSubscribeFormSchema>({
    resolver: zodResolver(subscribeFormSchema),
  });

  function handleFormSubmit(useremail: TSubscribeFormSchema) {
    // * you can add your logic here
    //  TODO : ADD the necessary logic here !
    setIsSubmitted(true);
    reset();
    setTimeout(() => {
      setIsSubmitted(false);
    }, 2000);
  }

  return (
    <div className="max-w-screen-xl mx-auto px-6 py-10  bg-dark text-white flex flex-col md:flex-row  ">
      <div className="flex-1">
        <h2 className="uppercase tracking-[0.1rem] text-2xl">
          Subscribe us now
        </h2>
        <p className="text-lightWhite font-light mt-2">
          Get latest news, updates and deals directly mailed to your inbox.
        </p>
      </div>
      {!isSubmitted ? (
        <motion.div
          initial={{ opacity: 0.6, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col flex-1"
        >
          <form
            className="flex flex-row w-full mt-8 py-4 md:mt-0  "
            onSubmit={handleSubmit(handleFormSubmit)}
          >
            <input
              {...register('email')}
              type="email"
              placeholder="Your email address here"
              className="p-4  focus:outline-semiBlue flex-1 text-dark"
            />

            <button
              type="submit"
              className="uppercase bg-semiBlue px-8 flex-[0.8]"
            >
              subscribe
            </button>
          </form>
          <div className="mt-[-0.9rem]">
            <ErrorMessage errorObject={errors} target="email" />
          </div>
        </motion.div>
      ) : (
        <div className="flex items-center  justify-center flex-1">
          <motion.p
            initial={{ opacity: 0.6, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="font-semibold text-xl text-green-300"
          >
            {' '}
            Subscribed Successfully !
          </motion.p>
        </div>
      )}
    </div>
  );
};
export default SubscribeFrom;
