import { BiMenu, BiSolidUser, BiSolidCart } from 'react-icons/bi';
import { IoClose } from 'react-icons/io5';
import { useState } from 'react';
import Nav from './components/Nav';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CartProduct } from '../../lib/types';
import Avatar from 'boring-avatars';
import { StoreType } from '../../redux/reduxStore';
import { logoutUser } from '../../redux/user/userSlice';
import SearchBar from './components/SearchBar';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const user = useSelector((state: StoreType) => state.userState.user);
  const products: CartProduct[] = useSelector(
    (state: StoreType) => state.cartState.products
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogOutUser() {
    dispatch(logoutUser());
    setIsOpen(false);
    navigate('/');
  }

  return (
    <header className="  bg-white z-10 shadow-2xl border-b-[2px] ">
      {/* LOGO */}
      <div className="max-w-screen-xl mx-auto p-2 md:flex md:justify-between md:items-center gap-4   relative  ">
        <div className="flex justify-between ">
          <Link to={'/'} className="font-normal text-3xl">
            MiniStore<span className="text-semiBlue">.</span>
          </Link>
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden"
          >
            {!isOpen ? <BiMenu size={40} /> : <IoClose size={40} />}
          </button>
        </div>

        <div
          className={`md:flex  md:gap-x-4 lg:gap-x-28 ${
            isOpen ? 'h-[386px] md:h-auto p-2 ' : 'h-0 md:h-auto'
          }  absolute left-0 top-[100%] z-30  md:static w-full md:w-auto md:p-0 bg-white  transition-all duration-500 overflow-hidden md:overflow-visible`}
        >
          {/* Nav */}
          <Nav setIsOpen={setIsOpen} />

          {/* utils */}
          <div className=" flex gap-2  justify-between flex-col md:flex-row md:items-center">
            {user == null ? (
              <>
                <Link
                  to={'/auth/login'}
                  onClick={() => setIsOpen(false)}
                  role="button"
                  className=" py-2 px-4   text-center border-[1px] text-white bg-dark "
                >
                  Log In
                </Link>
                <Link
                  to={'/auth/signup'}
                  onClick={() => setIsOpen(false)}
                  role="button"
                  className="border py-2 px-4 bg-semiBlue text-white text-center transition-colors hover:bg-semiBlue/80"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <div className="flex md:items-center justify-center flex-col  md:flex-row md:gap-x-4">
                <Link
                  to={'/profile'}
                  className="cursor-pointer flex items-center"
                  onClick={() => setIsOpen(false)}
                >
                  <p className="block  mt-2 py-2 hover:text-semiBlue  uppercase mr-4">
                    {user.username}
                  </p>
                  <Avatar
                    name={`${user.username} ${user.email} ${user._id}`}
                    size={30}
                    colors={[
                      '#92A1C6',
                      '#146A7C',
                      '#F0AB3D',
                      '#C271B4',
                      '#C20D90',
                    ]}
                    variant="beam"
                  />
                </Link>
                <button
                  className="py-2 px-4 border-[1px] bg-dark text-white"
                  onClick={handleLogOutUser}
                >
                  Log out
                </button>
              </div>
            )}
            <Link
              to={'/cart'}
              className="relative place-self-start md:place-self-center hidden lg:block"
              onClick={() => setIsOpen(false)}
            >
              <BiSolidCart size={30} />
              <span className="absolute top-[-5px] right-[-10px] text-white bg-dark p-[10px] rounded-full h-[20px] w-[20px] flex items-center justify-center">
                {products.length}
              </span>
            </Link>
          </div>
        </div>
      </div>
      <SearchBar />
    </header>
  );
};
export default Header;
