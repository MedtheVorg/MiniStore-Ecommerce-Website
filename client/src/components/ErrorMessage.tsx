import { type FieldErrors, type FieldValues } from 'react-hook-form';
import { CiCircleAlert } from 'react-icons/ci';
type ErrorLMessageProps = {
  errorObject: FieldErrors<FieldValues>;
  target: string;
};

const ErrorMessage = ({ errorObject, target }: ErrorLMessageProps) => {
  return (
    <>
      {errorObject[target] && (
        <p className="p-1 bg-gray-100  text-[#cf364a] ">
          <CiCircleAlert className="inline text-[#cf364a]" />{' '}
          {errorObject[target]!.message as string}
        </p>
      )}
    </>
  );
};
export default ErrorMessage;
