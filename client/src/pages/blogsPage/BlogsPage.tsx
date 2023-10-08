import underConstruction from '../assets/work-in-progress.png';
import History from '../../containers/Main/components/History';
import { useState, useEffect } from 'react';
import { TBlog } from '../../lib/types';
import Pagination from './components/Pagination';

// fake data for testing
import { blogsData } from '../../data/blogs';
import BlogsSection from './components/BlogsSection';
import SideBar from './components/SideBar';

const BlogsPage = () => {
  const [blogs, setBlogs] = useState<TBlog[]>([...blogsData]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setBlogs(
      blogsData.filter((blog) =>
        blog.title.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
      )
    );
  }, [searchQuery]);
  const [blogsPerPage, setBlogsPerPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);

  // get current Products
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFistBlog = indexOfLastBlog - blogsPerPage;

  const currentBlogs = blogs.slice(indexOfFistBlog, indexOfLastBlog);

  //  change active Page
  return (
    <>
      <History />
      <div className="max-w-screen-xl  mx-auto flex  flex-col-reverse md:flex-row md:gap-x-4 ">
        <div className="w-5/5 md:w-4/5">
          <BlogsSection
            data={currentBlogs}
            searchQuery={searchQuery}
            indexOfLastBlog={indexOfLastBlog}
            indexOfFistBlog={indexOfFistBlog}
            totalBlogs={blogs.length}
          />
          <Pagination
            setCurrentPage={setCurrentPage}
            itemsPerPage={blogsPerPage}
            totalItems={blogs.length}
            currentPage={currentPage}
          />
        </div>
        <div className="w-full  md:w-1/5 ">
          <SideBar
            setSearchQuery={setSearchQuery}
            searchQuery={searchQuery}
            setBlogs={setBlogs}
            blogsData={blogsData}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </>
  );
};
export default BlogsPage;
