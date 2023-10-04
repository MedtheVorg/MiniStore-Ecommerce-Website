import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { TCheckOutSchema } from '../../../lib/types';
import ErrorMessage from '../../../components/ErrorMessage';

const PaymentMethod = ({
  register,
  errors,
}: {
  register: UseFormRegister<TCheckOutSchema>;
  errors: FieldErrors<TCheckOutSchema>;
}) => {
  return (
    <div className="mt-8 grid gap-y-4 p-2">
      <label className="flex items-center justify-start gap-x-2">
        <input
          {...register('paymentMethod')}
          type="radio"
          value={'Direct bank transfer'}
        />
        <span>Direct bank transfer</span>
      </label>

      <label className="flex items-center justify-start gap-x-2">
        <input
          {...register('paymentMethod')}
          type="radio"
          value={'Check payments'}
        />
        <span>Check payments</span>
      </label>

      <label className="flex items-center justify-start gap-x-2">
        <input
          {...register('paymentMethod')}
          type="radio"
          value={'Cash on delivery'}
        />
        <span>Cash on delivery</span>
      </label>

      <label className="flex items-center justify-start gap-x-2">
        <input {...register('paymentMethod')} type="radio" value={'PayPal'} />
        <span>PayPal</span>
      </label>
      <ErrorMessage errorObject={errors} target="paymentMethod" />
    </div>
  );
};
export default PaymentMethod;
