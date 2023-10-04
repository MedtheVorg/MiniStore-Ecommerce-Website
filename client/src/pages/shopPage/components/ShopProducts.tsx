import Product from '../../../components/Product';
import { TProduct } from '../../../lib/types';

const ShopProducts = ({
  data,
  searchQuery,
  indexOfFistProduct,
  indexOfLastProduct,
  totalProducts,
}: {
  data: TProduct[];
  searchQuery: string;
  indexOfLastProduct: number;
  indexOfFistProduct: number;
  totalProducts: number;
}) => {
  return (
    <div className="w-full  flex-1 ">
      {/* results and sorting */}
      <div className="flex flex-row items-center justify-between p-2 font-light">
        <p>
          Showing {indexOfFistProduct}–{indexOfLastProduct} of {totalProducts}{' '}
          results
        </p>
      </div>

      {/* products */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 p-2 bg-lightWhite">
        {data.length > 0 ? (
          data.map((product) => <Product key={product.id} data={product} />)
        ) : (
          <div className=" col-span-4  p-12">
            <h2 className="font-semibold text-3xl">
              No results matching the search query : {searchQuery}
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};
export default ShopProducts;
