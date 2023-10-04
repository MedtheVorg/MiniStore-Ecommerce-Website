import History from './History';

type Blog = {
  id: number;
  title: string;
  image: string;
  category: string;
  publishedAt: string;
};

type BlogsProps = {
  blogs: Blog[];
};

const Blogs = ({ blogs }: BlogsProps) => {
  return (
    <section className="max-w-screen-xl mx-auto px-4 my-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="uppercase text-2xl font-[400] ">Latest Posts</h2>
        <a href="#" className="uppercase border-b-2 border-b-[#E1E1E1]">
          Read blogs
        </a>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogs?.map(({ id, title, image, category, publishedAt }) => (
          <article
            key={id}
            className="shadow-xl py-8 rounded-md overflow-hidden"
          >
            <div>
              <img
                src={image}
                alt={title}
                className="h-[300px] object-cover w-full"
              />
            </div>
            <div className="p-2">
              <span className="uppercase font-light mb-3 mt-2 inline-block text-sm">
                {publishedAt} - {category}
              </span>
              <h3 className="uppercase text-xl ">{title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
export default Blogs;
