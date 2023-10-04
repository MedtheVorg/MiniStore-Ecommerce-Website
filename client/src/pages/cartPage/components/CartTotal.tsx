import { useSelector } from 'react-redux';
import { StoreType } from '../../../redux/reduxStore';

const CartTotal = () => {
  const cart = useSelector((state: StoreType) => state.cartState);
  const totalProductsPrice = cart.products.reduce((accumulator, product) => {
    return accumulator + product.price * product.quantity;
  }, 0);
  return (
    <div className="mt-16 px-2">
      <h2 className="uppercase text-2xl">cart totals</h2>
      <div className=" w-full flex items-center justify-between text-xl px-4 border-[1px] border-l-0 border-r-0">
        <p className="py-8 uppercase underline">subtotal</p>
        <p className="  text-semiBlue">${totalProductsPrice}</p>
      </div>
      <div className=" w-full flex items-center justify-between text-xl px-4 border-[1px] border-l-0 border-r-0">
        <p className="py-8 uppercase underline">total</p>
        <p className="  text-semiBlue">${totalProductsPrice}</p>
      </div>
    </div>
  );
};
export default CartTotal;
