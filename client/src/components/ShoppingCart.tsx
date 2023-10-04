import { useSelector } from 'react-redux';
import { type CartProduct } from '../lib/types';
import { StoreType } from '../redux/reduxStore';
import { Link } from 'react-router-dom';
import { BiSolidCart } from 'react-icons/bi';

const ShoppingCart = () => {
  const products: CartProduct[] = useSelector(
    (state: StoreType) => state.cartState.products
  );

  return (
    <Link
      to="/cart"
      className="fixed z-20 right-[10px] top-[20vh] bg-gray-100 border-2 border-dark/20 p-[10px] shadow-2xl rounded-md group hidden md:block"
    >
      <div className="relative flex items-center justify-center ">
        <BiSolidCart
          size={25}
          className="group-hover:scale-125 transition-all"
        />
        <span className="absolute top-[-5px] right-[5px] text-white bg-dark p-[8px] rounded-full text-sm h-[10px] w-[10px] flex items-center justify-center">
          {products.length}
        </span>
      </div>
      <p className="text-sm font-semibold capitalize">buy now</p>
    </Link>
  );
};
export default ShoppingCart;
