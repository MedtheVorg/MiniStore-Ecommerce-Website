import { useLocation, NavLink } from 'react-router-dom';

const History = () => {
  const location = useLocation();

  return (
    <section className=" bg-lightWhite">
      <div className="max-w-screen-xl mx-auto py-16 flex items-center justify-center flex-col gap-8">
        <h1 className="uppercase text-6xl font-light">
          {location.pathname.slice(1)}
        </h1>
        <p className="uppercase">
          <NavLink
            to={'/'}
            className={({ isActive }) =>
              isActive ? 'text-semiBlue underline' : ''
            }
          >
            home
          </NavLink>
          <span className="mx-4">&gt;</span>
          <NavLink
            to={location.pathname}
            className={({ isActive }) =>
              isActive ? 'text-semiBlue underline' : ''
            }
          >
            {location.pathname.slice(1)}
          </NavLink>
        </p>
      </div>
    </section>
  );
};
export default History;
