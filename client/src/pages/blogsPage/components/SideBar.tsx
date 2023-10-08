import SideBarSearch from './SideBarSearch';
import { TBlog } from '../../../lib/types';
import _ from 'lodash';

const SideBar = ({
  setSearchQuery,
  searchQuery,
  setBlogs,
  blogsData,
  setCurrentPage,
}: {
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  setBlogs: React.Dispatch<React.SetStateAction<TBlog[]>>;
  searchQuery: string;
  blogsData: TBlog[];
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}) => {
  function filterByCategory(category: string) {
    setBlogs(
      _.shuffle(
        blogsData.filter((blog) =>
          category === ''
            ? blog.category != category
            : blog.category == category
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
              onClick={() => filterByCategory('technology')}
            >
              technology
            </li>

            <li
              className="capitalize cursor-pointer hover:underline"
              onClick={() => filterByCategory('gadgets')}
            >
              gadgets
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default SideBar;
