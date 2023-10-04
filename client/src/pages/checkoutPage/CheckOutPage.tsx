import History from '../../containers/Main/components/History';
import CartTotal from '../cartPage/components/CartTotal';
import PaymentMethod from './components/PaymentMethod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { checkOutSchema } from '../../lib/schemas';
import { TCheckOutSchema } from '../../lib/types';
import ErrorMessage from '../../components/ErrorMessage';
import FakeLoader from '../../components/FakeLoader';

const CheckOutPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<TCheckOutSchema>({ resolver: zodResolver(checkOutSchema) });

  async function checkOutOrder(data: TCheckOutSchema) {}
  return (
    <>
      <History />
      <div className="max-w-screen-xl  mx-auto">
        <form className="py-8" onSubmit={handleSubmit(checkOutOrder)}>
          <div className="p-2  md:grid md:grid-cols-2 gap-x-4">
            {/* billing details */}
            <div>
              <h2 className="uppercase text-2xl mb-8">Billing Details</h2>
              <div className="flex flex-col gap-y-8 ">
                {/* first name */}
                <div className="flex flex-col gap-y-2 ">
                  <label htmlFor="firstname" className="capitalize ">
                    first name*
                  </label>
                  <input
                    {...register('fistName')}
                    id="firstname"
                    type="text "
                    className=" border-2 border-gray-200 p-2 
                  outline-transparent
                  focus:outline-semiBlue   transition-all  "
                  />
                  <ErrorMessage errorObject={errors} target="fistName" />
                </div>

                {/* lastname */}
                <div className="flex flex-col gap-y-2 ">
                  <label htmlFor="lastname" className="capitalize ">
                    last name*
                  </label>
                  <input
                    {...register('lastName')}
                    id="lastname"
                    type="text "
                    className=" border-2 border-gray-200 p-2 
                  outline-transparent
                  focus:outline-semiBlue   transition-all  "
                  />
                  <ErrorMessage errorObject={errors} target="lastName" />
                </div>

                {/* company name */}
                <div className="flex flex-col gap-y-2 ">
                  <label htmlFor="companyname" className="capitalize ">
                    company name (optional)
                  </label>
                  <input
                    {...register('companyName')}
                    id="companyname"
                    type="text "
                    className=" border-2 border-gray-200 p-2 
                  outline-transparent
                  focus:outline-semiBlue   transition-all  "
                  />
                  <ErrorMessage errorObject={errors} target="companyName" />
                </div>

                {/* country / region */}
                <div className="flex flex-col gap-y-2 ">
                  <label htmlFor="countryorregion" className="capitalize ">
                    country / region *
                  </label>
                  <select
                    {...register('countryOrRegion')}
                    id="countryorregion"
                    className="border-2 border-gray-200 p-2 
                  outline-transparent
                  focus:outline-semiBlue   transition-all "
                  >
                    <option value="United States (US)">
                      United States (US)
                    </option>
                    <option value="Canada">Canada</option>
                    <option value="France">France</option>
                    <option value="Russia">Russia</option>
                    <option value="Japan">Japan</option>
                  </select>
                  <ErrorMessage errorObject={errors} target="countryOrRegion" />
                </div>

                {/* street address*/}
                <div className="flex flex-col gap-y-2 ">
                  <label htmlFor="streetaddress" className="capitalize ">
                    street address *
                  </label>
                  <input
                    {...register('streetAddress1')}
                    id="streetaddress"
                    type="text "
                    className=" border-2 border-gray-200 p-2 
                  outline-transparent
                  focus:outline-semiBlue   transition-all  "
                    placeholder="House number and street name"
                  />
                  <ErrorMessage errorObject={errors} target="streetAddress1" />
                  <input
                    {...register('streetAddress2')}
                    type="text "
                    className=" border-2 border-gray-200 p-2 
                  outline-transparent
                  focus:outline-semiBlue   transition-all  "
                    placeholder="Appartments, suite, etc."
                  />
                  <ErrorMessage errorObject={errors} target="streetAddress2" />
                </div>

                {/* Town / City */}
                <div className="flex flex-col gap-y-2 ">
                  <label htmlFor="townorcity" className="capitalize ">
                    town / city*
                  </label>
                  <input
                    {...register('townOrCity')}
                    id="townorcity"
                    type="text "
                    className=" border-2 border-gray-200 p-2 
                  outline-transparent
                  focus:outline-semiBlue   transition-all  "
                  />
                  <ErrorMessage errorObject={errors} target="townOrCity" />
                </div>

                {/* ZIP Code */}
                <div className="flex flex-col gap-y-2 ">
                  <label htmlFor="zipcode" className="capitalize ">
                    ZIP Code*
                  </label>
                  <input
                    {...register('zipCode')}
                    id="zipcode"
                    type="text"
                    className=" border-2 border-gray-200 p-2 
                  outline-transparent
                  focus:outline-semiBlue   transition-all  "
                  />
                  <ErrorMessage errorObject={errors} target="zipCode" />
                </div>

                {/* Phone number */}
                <div className="flex flex-col gap-y-2 ">
                  <label htmlFor="phone" className="capitalize ">
                    Phone *
                  </label>
                  <input
                    {...register('phone')}
                    id="phone"
                    type="text"
                    className=" border-2 border-gray-200 p-2 
                  outline-transparent
                  focus:outline-semiBlue   transition-all  "
                  />
                  <ErrorMessage errorObject={errors} target="phone" />
                </div>

                {/* Email address*/}
                <div className="flex flex-col gap-y-2 ">
                  <label htmlFor="emailaddress" className="capitalize ">
                    email address *
                  </label>
                  <input
                    {...register('email')}
                    id="emailaddress"
                    type="text "
                    className=" border-2 border-gray-200 p-2 
                  outline-transparent
                  focus:outline-semiBlue   transition-all  "
                  />
                  <ErrorMessage errorObject={errors} target="email" />
                </div>
              </div>
            </div>

            {/* additional information */}
            <div className="mt-4 md:mt-0 ">
              <h2 className="uppercase text-2xl mb-8">
                Additional information
              </h2>
              {/* order notes */}
              <div className="flex flex-col gap-y-2 ">
                <label htmlFor="ordernotes" className="capitalize ">
                  order notes (optional)
                </label>
                <input
                  {...register('orderNotes')}
                  id="ordernotes"
                  type="text "
                  className=" border-2 border-gray-200 p-2 
                  outline-transparent
                  focus:outline-semiBlue   transition-all  "
                />
                <ErrorMessage errorObject={errors} target="orderNotes" />
              </div>
            </div>
          </div>

          <CartTotal />
          <PaymentMethod errors={errors} register={register} />
          <button
            type="submit"
            className=" ml-4 uppercase px-4 py-4 text-white bg-dark mt-8"
          >
            place an order
          </button>
        </form>
      </div>
      {isSubmitSuccessful && <FakeLoader />}
    </>
  );
};
export default CheckOutPage;
