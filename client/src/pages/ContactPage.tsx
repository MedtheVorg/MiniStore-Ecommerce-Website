import { zodResolver } from '@hookform/resolvers/zod';
import History from '../containers/Main/components/History';
import { useForm } from 'react-hook-form';
import { contactSchema } from '../lib/schemas';
import { TContactSchema } from '../lib/types';
import ErrorMessage from '../components/ErrorMessage';
import { toast } from 'react-toastify';

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<TContactSchema>({
    resolver: zodResolver(contactSchema),
  });

  async function handeContactFormSubmited(userInput: TContactSchema) {
    toast.info('Your quastion was delivered, you will hear from us shortly', {
      hideProgressBar: true,
      position: 'top-center',
    });
    reset();
  }

  return (
    <>
      <History />
      <section className="max-w-screen-xl mx-auto py-16 ">
        <div className="flex flex-col lg:flex-row px-4 gap-8">
          {/* contact info */}
          <div className="flex-1">
            <h2 className="uppercase text-3xl">contact info</h2>
            <p className="mb-8 mt-2 font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
              dolore.
            </p>
            <div className="flex gap-8">
              <ul className="flex flex-col gap-2">
                <li className="uppercase underline text-xl mb-2">office</li>
                <li>730 Glenstone Ave 65802, Springfield, US</li>
                <li>+123 222 333 44</li>
                <li>+123 666 777 88</li>
                <li>ministore@yourinfo.com</li>
              </ul>
              <ul className="flex flex-col gap-2">
                <li className="uppercase underline text-xl mb-2">Management</li>
                <li>730 Glenstone Ave 65802, Springfield, US</li>
                <li>+123 222 333 44</li>
                <li>+123 666 777 88</li>
                <li>ministore@yourinfo.com</li>
              </ul>
            </div>
          </div>

          {/* contact form */}
          <div className="flex-1">
            <h2 className="uppercase text-3xl">any questions</h2>
            <p className="mb-8 mt-2 font-light">
              Use the form below to get in touch with us.
            </p>
            <form
              className="flex flex-col gap-8"
              onSubmit={handleSubmit(handeContactFormSubmited)}
            >
              <div className="flex gap-4">
                <div className="w-full">
                  <input
                    {...register('fullName')}
                    className="border-2 p-4 text-sm w-full focus:outline-semiBlue"
                    type="text"
                    placeholder="Your full name"
                  />
                  <ErrorMessage errorObject={errors} target="fullName" />
                </div>

                <div className="w-full">
                  <input
                    {...register('email')}
                    className="border-2 p-4 text-sm w-full focus:outline-semiBlue"
                    type="text"
                    placeholder="Write your email here"
                  />
                  <ErrorMessage errorObject={errors} target="email" />
                </div>
              </div>

              <div>
                <input
                  {...register('phoneNumber')}
                  className="border-2 p-4 text-sm w-full focus:outline-semiBlue"
                  type="text"
                  placeholder="Phone number"
                />
                <ErrorMessage errorObject={errors} target="phoneNumber" />
              </div>
              <div>
                <input
                  {...register('subject')}
                  className="border-2 p-4 text-sm w-full focus:outline-semiBlue"
                  type="text"
                  placeholder="Write your subject here"
                />
                <ErrorMessage errorObject={errors} target="subject" />
              </div>
              <div>
                <textarea
                  {...register('message')}
                  className="border-2 p-4 text-sm w-full focus:outline-semiBlue"
                  cols={30}
                  rows={5}
                  placeholder="Write your message here"
                ></textarea>
                <ErrorMessage errorObject={errors} target="message" />
              </div>
              <button
                type="submit"
                className="uppercase text-white bg-dark px-8 py-3 font-lato font-normal  self-start transition-all hover:rounded-3xl border-2 "
              >
                submit
              </button>
            </form>
          </div>
        </div>

        {/* ------------------------------------------ */}
        <div className="grid grid-cols-2 gap-8 mt-16 p-4">
          <div className="hidden md:block">
            <img
              src="https://images.pexels.com/photos/1036808/pexels-photo-1036808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="workspace"
              className="object-contain w-full h-full"
            />
          </div>
          <div className="flex-1">
            <h2 className="uppercase text-3xl">our stores</h2>
            <p className="mb-8 mt-2 font-light">
              You can also directly buy products from our stores.
            </p>
            <div className="flex gap-8">
              <ul className="flex flex-col gap-2">
                <li className="uppercase underline text-xl mb-2">usa</li>
                <li>730 Glenstone Ave 65802, Springfield, US</li>
                <li>+123 222 333 44</li>
                <li>+123 666 777 88</li>
                <li>ministore@yourinfo.com</li>
              </ul>
              <ul className="flex flex-col gap-2">
                <li className="uppercase underline text-xl mb-2">france&</li>
                <li>13 Rue Montmartre 75001, Paris, France</li>
                <li>+123 222 333 44</li>
                <li>+123 666 777 88</li>
                <li>ministore@yourinfo.com</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ContactPage;
