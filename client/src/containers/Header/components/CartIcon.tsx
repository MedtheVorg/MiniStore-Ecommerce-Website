import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CartProduct } from '../../../lib/types';
import { BiSolidCart } from 'react-icons/bi';
import { StoreType } from '../../../reduxStore/store';

const CartIcon = () => {
  const products: CartProduct[] = useSelector(
    (state: StoreType) => state.cartState.products
  );
  return (
    <Link to={'/cart'} className="relative md:hidden ">
      <BiSolidCart size={30} />
      <span className="absolute top-[-5px] right-[-10px] text-white bg-dark p-[10px] rounded-full h-[20px] w-[20px] flex items-center justify-center">
        {products.length}
      </span>
    </Link>
  );
};
export default CartIcon;
