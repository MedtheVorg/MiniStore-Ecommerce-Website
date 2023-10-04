import { FC, useEffect, useState } from 'react';
import History from '../../containers/Main/components/History';
import SideBar from './components/SideBar';
import { TProduct } from '../../lib/types';
import Pagination from './components/Pagination';
import ShopProducts from './components/ShopProducts';

// fake data for testing
import phones from '../../data/phones';
import watches from '../../data/watches';
import accessories from '../../data/accessories';
import tablets from '../../data/tablets';

const ShopPage: FC = () => {
  const shopData = [...phones, ...watches, ...accessories, ...tablets];
  const [shopProducts, setShopProducts] = useState<TProduct[]>(shopData);
  const [searchQuery, setSearchQuery] = useState('');
  useEffect(() => {
    setShopProducts(
      shopData.filter((product) =>
        product.title
          .toLocaleLowerCase()
          .includes(searchQuery.toLocaleLowerCase())
      )
    );
  }, [searchQuery]);
  const [productsPerPage, setProductPerPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);

  // get current Products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFistProduct = indexOfLastProduct - productsPerPage;

  const currentProducts = shopProducts.slice(
    indexOfFistProduct,
    indexOfLastProduct
  );

  //  change active Page
  return (
    <>
      <History />
      <div className="max-w-screen-xl  mx-auto flex  flex-col-reverse md:flex-row md:gap-x-4 ">
        <div className="w-5/5 md:w-4/5">
          <ShopProducts
            data={currentProducts}
            searchQuery={searchQuery}
            indexOfLastProduct={indexOfLastProduct}
            indexOfFistProduct={indexOfFistProduct}
            totalProducts={shopProducts.length}
          />
          <Pagination
            setCurrentPage={setCurrentPage}
            productsPerPage={productsPerPage}
            totalProducts={shopProducts.length}
            currentPage={currentPage}
          />
        </div>
        <div className="w-full  md:w-1/5 ">
          <SideBar
            setSearchQuery={setSearchQuery}
            searchQuery={searchQuery}
            setShopProducts={setShopProducts}
            shopData={shopData}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </>
  );
};
export default ShopPage;
