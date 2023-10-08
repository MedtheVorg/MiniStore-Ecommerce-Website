import { Link } from 'react-router-dom';
import { TBlog } from '../../../lib/types';

type BlogsProps = {
  blogs: TBlog[];
};

const Blogs = ({ blogs }: BlogsProps) => {
  const latestBlogs = blogs
    .sort((a, b) => a.publishedAt.getTime() - b.publishedAt.getTime())
    .slice(0, 3);

  return (
    <section className="max-w-screen-xl mx-auto px-4 my-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="uppercase text-2xl font-[400] ">Latest Posts</h2>
        <Link
          to={'/blogs'}
          className="uppercase border-b-2 border-b-[#E1E1E1] hover:scale-105 transition-all duration-300"
        >
          Read blogs
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {latestBlogs?.map(({ id, title, image, category, publishedAt }) => (
          <Link
            to={`/blogs/${id}`}
            key={id}
            className="border-2 border-transparent shadow-xl  rounded-md overflow-hidden transition-all duration-300 hover:border-semiBlue hover:scale-105"
          >
            <div>
              <img
                src={image}
                alt={title}
                className="h-[300px] object-cover w-full"
              />
            </div>
            <div className="p-4">
              <span className="uppercase font-light mb-3 mt-2 inline-block text-sm">
                {publishedAt.toDateString()} - {category}
              </span>
              <h3 className="uppercase text-xl ">{title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
export default Blogs;
