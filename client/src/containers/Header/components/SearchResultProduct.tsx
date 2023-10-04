import { Link } from 'react-router-dom';
import { TProduct } from '../../../lib/types';

const SearchResultProduct = ({
  data,
  setSearchTerm,
}: {
  data: TProduct;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}) => {
  function handleProductClicked() {
    setSearchTerm('');
  }
  return (
    <Link
      to={`/shop/${data.id}`}
      className="flex  h-[8rem]  cursor-pointer "
      onClick={handleProductClicked}
    >
      {/* image */}
      <div className="w-1/4">
        <img
          className=" object-cover  w-full h-full"
          src={data.image}
          alt={data.title}
        />
      </div>
      {/* details */}
      <div className="w-3/4 p-2 px-4 border-b-2 hover:scale-[0.98] transition-all">
        <p className="font-semibold capitalize text-xl">{data.title}</p>
        <p className="text-sm  text-gray-600">
          {data.description.length > 100
            ? data.description.slice(0, 100) + '...'
            : data.description}
        </p>
        <p>
          Price : <span className="font-semibold">${data.price}</span>
        </p>
      </div>
    </Link>
  );
};
export default SearchResultProduct;
