import { BiSolidStar } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import phones from '../../data/phones';
import watches from '../../data/watches';
import accessories from '../../data/accessories';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { addToCart } from '../../redux/cart/cartSlice';
import { toast } from 'react-toastify';
import Slider from '../../containers/Main/components/Slider';
import { motion } from 'framer-motion';
import AdditionalInfo from './components/AdditionalInfo';
import tablets from '../../data/tablets';

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);
  const shopData = [...phones, ...watches, ...accessories, ...tablets];
  const { id } = useParams();
  const currentProduct = shopData.find((product) => product.id === Number(id));

  const dispatch = useDispatch();

  return (
    <div className="max-w-screen-xl mx-auto font-lato flex flex-col ">
      {/* product details */}
      <div>
        {!currentProduct ? (
          <div>
            <h1>Product not found</h1>
          </div>
        ) : (
          <div className="grid grid-cols-1  py-8 gap-x-8 md:gap-x-8 md:grid-cols-2   ">
            {/* product image */}
            <motion.div
              initial={{ opacity: 0.5, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className=" h-full w-full"
            >
              <img
                src={currentProduct?.image}
                alt={currentProduct?.title}
                className="object-cover aspect-square "
              />
            </motion.div>

            {/* product details */}
            <div className="flex flex-col gap-y-4 p-4 bg-lightWhite ">
              {/* titile */}
              <h2 className="text-4xl uppercase">{currentProduct?.title}</h2>

              {/* rating */}
              <p className="flex flex-row items-center justify-start">
                <BiSolidStar /> {currentProduct?.rating}
              </p>

              {/* price */}
              <p className="text-5xl text-semiBlue">${currentProduct?.price}</p>

              {/* description */}
              <p className="text-gray-400">{currentProduct?.description}</p>

              {/* adjust quantity */}
              <div className="flex flex-row gap-x-2">
                <button
                  className="p-2 bg-white border-[1px] px-4 text-xl"
                  onClick={() =>
                    setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                  }
                >
                  -
                </button>
                <span className="p-2 bg-white border-[1px] px-10 text-xl">
                  {quantity}
                </span>
                <button
                  className="p-2 bg-white border-[1px] px-4 text-xl"
                  onClick={() => setQuantity((prev) => prev + 1)}
                >
                  +
                </button>
              </div>

              {/* options */}
              <div className="flex flex-row gap-x-4">
                <button
                  className="uppercase text-white bg-dark  px-10 py-4"
                  onClick={() => {
                    dispatch(
                      addToCart({
                        id: currentProduct.id,
                        title: currentProduct.title,
                        image: currentProduct.image,
                        quantity: quantity,
                        price: currentProduct.price,
                      })
                    );
                    toast.success(
                      `${currentProduct.title}  was added to your cart`,
                      {
                        position: 'bottom-right',
                        theme: 'light',
                        bodyStyle: {
                          fontWeight: 'bold',
                        },
                      }
                    );
                  }}
                >
                  add to cart
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* additional info */}
      <AdditionalInfo currentProduct={currentProduct} />
      {/* related products */}
      <div>
        <Slider
          title="related products"
          products={shopData}
          filter={currentProduct?.category}
        />
      </div>
    </div>
  );
};
export default ProductPage;
