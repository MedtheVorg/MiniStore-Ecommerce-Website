import { FaShoppingCart } from 'react-icons/fa';
import { CartProduct, TProduct } from '../lib/types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { addToCart } from '../reduxStore/features/cart/cartSlice';

const Product = ({ data }: { data: TProduct }) => {
  const { id, title, description, image, price, stock } = data;
  const dispatch = useDispatch();
  const cartProduct: CartProduct = {
    id: id,
    title: title,
    image: image,
    quantity: 1,
    price: price,
  };

  return (
    <article className=" border-[1px] flex flex-col h-72 group">
      {/* card image */}
      <div className=" flex-1 relative     overflow-hidden ">
        <img
          src={image}
          alt={title}
          className=" w-full h-full object-cover object-center  transition-all group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute bottom-[30%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col gap-y-2 w-[80%] sm:w-[50%] text-sm opacity-0 group-hover:opacity-80 transition-all duration-300">
          <button
            className=" bg-dark text-white uppercase   p-2 flex items-center justify-between gap-2"
            onClick={() => {
              dispatch(addToCart(cartProduct));
              toast.success(`${title}  was added to your cart`, {
                position: 'bottom-right',
                theme: 'light',
                bodyStyle: {
                  fontWeight: 'bold',
                },
              });
            }}
          >
            <span className="tracking-wider ">add to cart</span>
            <FaShoppingCart />
          </button>

          <Link
            to={`/shop/${id}`}
            className=" bg-dark text-white uppercase  p-2 flex items-center justify-between gap-2"
          >
            <span className="tracking-wider ">more details</span>
            <FaShoppingCart />
          </Link>
        </div>
      </div>

      {/* card details */}
      <div className=" flex justify-between items-center p-2 py-4  border-[1px]">
        <span className="uppercase text-sm md:text-base">{title}</span>
        <span className="text-semiBlue text-sm md:text-base">${price}</span>
      </div>
    </article>
  );
};
export default Product;
