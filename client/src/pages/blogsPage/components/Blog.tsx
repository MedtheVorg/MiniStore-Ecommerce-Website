import { Link } from 'react-router-dom';
import { TBlog } from '../../../lib/types';

const Blog = ({ data }: { data: TBlog }) => {
  const { id, category, publishedAt, title, image } = data;

  return (
    <Link
      to={`/blogs/${id}`}
      className=" border-[1px] flex flex-col h-72 group"
    >
      {/* card image */}
      <div className=" flex-1 relative     overflow-hidden ">
        <img
          src={image}
          alt={title}
          className=" w-full h-full object-cover object-center  transition-all group-hover:scale-110 duration-300"
          loading="lazy"
        />
      </div>

      {/* card details */}
      <div className=" flex  items-start p-2  border-[1px] flex-col">
        <p className="text-gray-400 uppercase pb-2 text-[0.7rem] md:text-sm ">
          <span>{publishedAt.toDateString()}</span>{' '}
          <span className="mx-2 text-xl">-</span> <span>{category}</span>
        </p>
        <span className="uppercase text-sm md:text-base">{title}</span>
      </div>
    </Link>
  );
};
export default Blog;
