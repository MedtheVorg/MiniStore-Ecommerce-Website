import SideBarSearch from './SideBarSearch';
import { TProduct } from '../../../lib/types';
import _ from 'lodash';

const SideBar = ({
  setSearchQuery,
  searchQuery,
  setShopProducts,
  shopData,
  setCurrentPage,
}: {
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  setShopProducts: React.Dispatch<React.SetStateAction<TProduct[]>>;
  searchQuery: string;
  shopData: TProduct[];
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}) => {
  function filterByCategory(category: string) {
    setShopProducts(
      _.shuffle(
        shopData.filter((product) =>
          category === ''
            ? product.category != category
            : product.category == category
        )
      )
    );
    setCurrentPage(1);
  }

  function filterByBrand(brand: string) {
    setShopProducts(
      _.shuffle(
        shopData.filter((product) =>
          product.title.toLowerCase().includes(brand.toLowerCase())
        )
      )
    );
    setCurrentPage(1);
  }
  return (
    <div className=" p-2 md:p-0  w-full">
      {/* search  bar*/}
      <SideBarSearch
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
      />
      <div className="flex flex-col justify-between px-2 gap-y-8  py-4">
        <div>
          <h3 className="text-xl uppercase  underline underline-offset-2">
            categories
          </h3>
          <ul className="flex  gap-x-8 mt-4 pl-2 md:flex-col gap-y-4">
            <li
              className="capitalize cursor-pointer hover:underline"
              onClick={() => filterByCategory('')}
            >
              all
            </li>

            <li
              className="capitalize cursor-pointer hover:underline"
              onClick={() => filterByCategory('phone')}
            >
              phones
            </li>

            <li
              className="capitalize cursor-pointer hover:underline"
              onClick={() => filterByCategory('accessory')}
            >
              accessories
            </li>

            <li
              className="capitalize cursor-pointer hover:underline"
              onClick={() => filterByCategory('tablet')}
            >
              tablets
            </li>

            <li
              className="capitalize cursor-pointer hover:underline"
              onClick={() => filterByCategory('watch')}
            >
              watches
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl uppercase  underline underline-offset-2">
            brands
          </h3>
          <ul className="flex  gap-x-8 mt-4 pl-2 md:flex-col gap-y-4">
            <li
              className="capitalize cursor-pointer hover:underline"
              onClick={() => filterByBrand('apple')}
            >
              apple
            </li>
            <li
              className="capitalize cursor-pointer hover:underline"
              onClick={() => filterByBrand('samsung')}
            >
              samsung
            </li>
            <li
              className="capitalize cursor-pointer hover:underline"
              onClick={() => filterByBrand('xiaomi')}
            >
              xiaomi
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default SideBar;
