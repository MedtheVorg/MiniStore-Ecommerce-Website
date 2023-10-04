import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Pagination = ({
  productsPerPage,
  setCurrentPage,
  totalProducts,
  currentPage,
}: {
  productsPerPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalProducts: number;
  currentPage: number;
}) => {
  const pageNumber: number[] = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <div className="flex gap-x-4 items-center justify-center my-8">
      <IoIosArrowBack
        size={45}
        className="hover:text-semiBlue cursor-pointer"
        onClick={() => setCurrentPage((prev) => (prev === 1 ? 1 : prev - 1))}
      />
      {pageNumber.map((ele) => {
        return (
          <div
            className={`border-2 px-4 hover:border-semiBlue transition-colors cursor-pointer ${
              currentPage === ele ? 'border-semiBlue' : ''
            }`}
            key={ele}
            onClick={() => {
              setCurrentPage(ele);
              window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
            }}
          >
            {ele}
          </div>
        );
      })}
      <IoIosArrowForward
        size={45}
        className="hover:text-semiBlue cursor-pointer"
        onClick={() =>
          setCurrentPage((prev) => {
            return prev === pageNumber[pageNumber.length - 1]
              ? pageNumber[pageNumber.length - 1]
              : prev + 1;
          })
        }
      />
    </div>
  );
};
export default Pagination;
