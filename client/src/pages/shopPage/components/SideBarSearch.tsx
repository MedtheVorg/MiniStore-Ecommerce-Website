import { FormEvent, useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';

const SideBarSearch = ({
  setSearchQuery,
  searchQuery,
}: {
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  searchQuery: string;
}) => {
  function filterProducts(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }
  return (
    <form className="flex w-full" onSubmit={filterProducts}>
      <input
        type="text"
        placeholder="search"
        className="flex-1 p-2  border-[1px] focus:outline-semiBlue"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button
        type="submit"
        className="flex-[0.5] bg-dark text-white flex items-center justify-center   p-2 "
      >
        <BiSearchAlt2 size={25} />
      </button>
    </form>
  );
};
export default SideBarSearch;
