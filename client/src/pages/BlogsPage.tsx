import underConstruction from '../assets/work-in-progress.png';
import History from '../containers/Main/components/History';

const BlogsPage = () => {
  return (
    <>
      <History />
      <div className="max-w-screen-xl h-[90vh] mx-auto grid place-content-center">
        <img src={underConstruction} alt="" />
      </div>
    </>
  );
};
export default BlogsPage;
