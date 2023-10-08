import { BiSearchAlt2 } from 'react-icons/bi';
import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import phones from '../../../data/phones';
import watches from '../../../data/watches';
import accessories from '../../../data/accessories';
import tablets from '../../../data/tablets';
import { TProduct } from '../../../lib/types';
import SearchResultProduct from './SearchResultProduct';
import CartIcon from './CartIcon';

const SearchBar = () => {
  // fake Data //todo : retrieve actual data from database

  const fakeData = [...phones, ...watches, ...accessories, ...tablets];

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchedProducts, setSearchedProducts] = useState<TProduct[]>([]);

  function search(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  useEffect(() => {
    if (searchTerm.trim().length > 0) {
      setSearchedProducts(
        fakeData.filter((product) =>
          product.title.toLowerCase().includes(searchTerm.trim().toLowerCase())
        )
      );
    } else {
      setSearchedProducts([]);
    }
  }, [searchTerm]);

  return (
    <div className=" bg-[#F5F5F3] p-2   ">
      <div className="relative md:max-w-[50vw] mx-auto px-2 md:px-0">
        <form
          className=" items-center   relative  flex  flex-1  "
          onSubmit={(e: FormEvent<HTMLFormElement>) => {
            search(e);
          }}
        >
          <BiSearchAlt2 size={20} className="absolute left-2" />
          <input
            value={searchTerm}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setSearchTerm(e.target.value);
            }}
            type="text"
            className="outline-transparent focus:outline-semiBlue  px-4 py-2 pl-8 border-2  transition-all duration-500 w-full"
            placeholder="Search for a product"
          />
          <CartIcon />
        </form>

        {/* search result */}
        {searchTerm && (
          <div className=" absolute top-[100%] left-0 z-20 bg-white w-full shadow-2xl ">
            {searchedProducts.length > 0 ? (
              <div className="h-96 overflow-y-scroll">
                {searchedProducts.map((product) => {
                  return (
                    <SearchResultProduct
                      key={product.id}
                      data={product}
                      setSearchTerm={setSearchTerm}
                    />
                  );
                })}
              </div>
            ) : (
              <p className="p-2 text-xl shadow-2xl capitalize">
                no match was found for this search term
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
export default SearchBar;
