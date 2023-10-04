import { useDispatch, useSelector } from 'react-redux';
import { CartProduct } from '../../../lib/types';
import { StoreType } from '../../../redux/reduxStore';
import { AiOutlineClose } from 'react-icons/ai';

import {
  decrementItemQuantity,
  deleteItem,
  incrementItemQuantity,
} from '../../../redux/cart/cartSlice';

const CartItem = ({ product }: { product: CartProduct }) => {
  const cart = useSelector((state: StoreType) => state.cartState);
  const dispatch = useDispatch();

  return (
    <>
      <article className="  gap-y-2 border-[1px] bg-[#F7FBFC] mb-4 grid grid-cols-4 h-36">
        {/* details */}
        <div className="flex  overflow-hidden col-span-2 ">
          <div className=" w-1/3  ">
            <img
              className=" object-cover h-full w-full "
              src={product.image}
              alt={product.title}
            />
          </div>
          <div className="w-2/3  p-2">
            <p className="uppercase text-sm lg:text-2xl">{product.title}</p>
            <p className="text-semiBlue lg:text-xl">$ {product.price}</p>
          </div>
        </div>
        {/* quantiy */}
        <div className=" flex items-center justify-center gap-x-4 ">
          <button
            onClick={() => dispatch(decrementItemQuantity(product.id))}
            className="border-[1px]  p-[1px] px-2 font-semibold  hover:bg-gray-200 hover:border-black/20 transition-colors bg-white md:p-2 md:px-4"
          >
            -
          </button>
          <p className="border-[1px]  p-[1px] px-6  bg-white md:p-2 md:px-8">
            {product.quantity}
          </p>
          <button
            onClick={() => dispatch(incrementItemQuantity(product.id))}
            className="border-[1px]  p-[1px] px-2  font-semibold hover:bg-gray-200 hover:border-black/20 transition-colors bg-white md:p-2 md:px-4"
          >
            +
          </button>
        </div>
        {/* subtotal */}
        <div className=" flex flex-row items-center justify-center gap-x-2 md:gap-x-12">
          <p className="text-semiBlue md:text-3xl">
            ${product.price * product.quantity}
          </p>
          {/* delete btn */}
          <button
            onClick={() => dispatch(deleteItem(product.id))}
            className="border-[1px] bg-red-400 text-white p-[1px]"
          >
            <AiOutlineClose />
          </button>
        </div>
      </article>
    </>
  );
};
export default CartItem;
