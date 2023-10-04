import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <section>
      <div className="max-w-screen-xl mx-auto flex items-center justify-center flex-col py-32">
        <h1 className="text-6xl text-center mb-2 ">Page Not Found 404</h1>
        <Link to={'/'} className="underline text-xl">
          Go Home
        </Link>
      </div>
    </section>
  );
};
export default ErrorPage;
