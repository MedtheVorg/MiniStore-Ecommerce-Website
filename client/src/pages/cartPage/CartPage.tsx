import { useDispatch, useSelector } from 'react-redux';
import History from '../../containers/Main/components/History';
import { Link } from 'react-router-dom';
import emptyCartImage from '../../assets/emptyCart.png';
import CartItem from './components/CartItem';
import CartTotal from './components/CartTotal';
import { motion } from 'framer-motion';
import { StoreType } from '../../reduxStore/store';
import { resetCart } from '../../reduxStore/features/cart/cartSlice';
import { CartProduct, TProduct } from '../../lib/types';

const CartPage = () => {
  const cart = useSelector((state: StoreType) => state.cartState);
  const dispatch = useDispatch();
  const isEmpty = cart.products.length == 0;

  if (isEmpty) {
    return (
      <>
        <History />
        <section className="max-w-screen-xl mx-auto py-16">
          <motion.div
            initial={{ opacity: 0.5, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 place-items-center"
          >
            <img src={emptyCartImage} alt="empty cart image" className="" />
            <div className="flex flex-col items-center justify-center py-8 gap-y-8 shadow-xl px-10 border-[1px]">
              <p className=" text-xl">Your cart is currently empty.</p>
              <Link to={'/shop'} className="px-8 py-4 text-white bg-dark">
                Continue Shopping ---&gt;
              </Link>
            </div>
          </motion.div>
        </section>
      </>
    );
  }

  return (
    <>
      <History />
      <section className="max-w-screen-xl mx-auto py-8">
        <div>
          {/* table header */}
          <div className="grid grid-cols-4 font-semibold px-2 ">
            <span className="col-span-2 uppercase">product</span>
            <span className="col-span-1 uppercase text-center">quantity</span>
            <span className="col-span-1 uppercase text-center">subtotal</span>
          </div>
          {/* table content */}
          <div className="p-2 md:p-0">
            {cart.products.map((product: CartProduct) => (
              <CartItem product={product} key={product.id} />
            ))}
          </div>
          {/* table footer */}
          <CartTotal />

          <div className="flex gap-x-4 mt-8 px-2 text-sm md:px-4 md:gap-x-8">
            <Link
              to={'/shop'}
              className="uppercase p-2 md:px-8 md:py-4 text-white bg-dark"
            >
              continue shopping
            </Link>
            <Link
              to={'/checkout'}
              className="uppercase p-2 md:px-8 md:py-4 text-white bg-dark"
            >
              proceed to checkout
            </Link>
            <button
              className="uppercase p-2 md:px-8 md:py-4 text-white bg-red-400"
              onClick={() => dispatch(resetCart())}
            >
              reset cart
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
export default CartPage;
