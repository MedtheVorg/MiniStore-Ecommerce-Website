import Blog from './Blog';
import Product from '../../../components/Product';
import { TBlog } from '../../../lib/types';

const BlogsSection = ({
  data,
  searchQuery,
  indexOfFistBlog,
  indexOfLastBlog,
  totalBlogs,
}: {
  data: TBlog[];
  searchQuery: string;
  indexOfLastBlog: number;
  indexOfFistBlog: number;
  totalBlogs: number;
}) => {
  return (
    <div className="w-full  flex-1 ">
      {/* results and sorting */}
      <div className="flex flex-row items-center justify-between p-2 font-light">
        <p>
          Showing {indexOfFistBlog}–{indexOfLastBlog} of {totalBlogs} results
        </p>
      </div>

      {/* products */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 p-2 ">
        {data.length > 0 ? (
          data.map((product) => <Blog key={product.id} data={product} />)
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
export default BlogsSection;
