import { useState } from 'react';
import { TProduct } from '../../../lib/types';

const AdditionalInfo = ({
  currentProduct,
}: {
  currentProduct: TProduct | undefined;
}) => {
  const [isActive, setIsActive] = useState(1);

  return (
    <div className="mb-2 mt-20">
      {/* tabs */}
      <div className="flex items-center justify-around text-[0.9rem] md:text-xl px-4  border-b-2 ">
        <span
          className={`uppercase  p-2 border-lightGray inline-block  cursor-pointer ${
            isActive === 1 ? 'text-semiBlue' : ''
          }`}
          onClick={() => setIsActive(1)}
        >
          description
        </span>

        <span
          className={`uppercase  p-2 border-lightGray inline-block  cursor-pointer ${
            isActive === 2 ? 'text-semiBlue' : ''
          }`}
          onClick={() => setIsActive(2)}
        >
          additional information
        </span>

        <span
          className={`uppercase  p-2 border-lightGray inline-block  cursor-pointer ${
            isActive === 3 ? 'text-semiBlue' : ''
          }`}
          onClick={() => setIsActive(3)}
        >
          reviews (2)
        </span>
      </div>

      <div className="p-4 text-gray-400">
        {/* description */}
        <div className={` ${isActive === 1 ? 'block' : 'hidden'}`}>
          <h2>Product description</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus accusamus soluta obcaecati eius ea rerum, alias
            molestiae quae, molestias eos pariatur placeat eaque est, minus
            tempore qui dolorem officia. Ad.
          </p>
          <ul className="list-disc pl-8 my-8">
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et,
              dignissimos!
            </li>
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat,
              nisi.
            </li>
          </ul>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint illum
            adipisci, iusto quibusdam eveniet dignissimos architecto quis
            dolores expedita accusantium aperiam labore fugiat unde et.
          </p>
        </div>

        {/* info */}
        <div className={` ${isActive === 2 ? 'block' : 'hidden'}`}>
          <p>additional info about the product</p>
          <table className="table-auto border-collapse  border-slate-500 p-4  mt-8 w-full uppercase">
            <tbody>
              <tr>
                <td className="border-b-[1px] border-slate-700 p-2 pt-8  font-semibold">
                  Full name
                </td>
                <td className="border-b-[1px] border-slate-700 p-2 pt-8 ">
                  {currentProduct?.title}
                </td>
              </tr>
              <tr>
                <td className="border-b-[1px] border-slate-700 p-2  font-semibold pt-8 ">
                  Category
                </td>
                <td className="border-b-[1px] border-slate-700 p-2 pt-8 ">
                  {currentProduct?.category}
                </td>
              </tr>

              <tr>
                <td className="border-b-[1px] border-slate-700 p-2  font-semibold pt-8 ">
                  Stock
                </td>
                <td className="border-b-[1px] border-slate-700 p-2 pt-8 ">
                  {currentProduct?.stock}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* reviews */}
        <div className={` ${isActive === 3 ? 'block' : 'hidden'}`}>
          <p>clients reviews</p>
        </div>
      </div>
    </div>
  );
};
export default AdditionalInfo;
