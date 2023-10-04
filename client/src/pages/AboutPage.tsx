import Features from '../containers/Main/components/Features';
import History from '../containers/Main/components/History';
import Testimonial from '../containers/Main/components/Testimonial';
import reviews from '../data/reviews';
import { Link } from 'react-router-dom';

//sample video
import sampleVideo from '../assets/sample.mp4';
const AboutPage = () => {
  return (
    <>
      <History />
      <Features />
      <section>
        <div className="max-w-screen-xl mx-auto flex flex-col p-2 lg:flex-row">
          <div className="flex-1 ">
            <video
              controls
              muted
              className=" object-cover w-full aspect-video lg:aspect-auto lg:max-h-[700px]"
            >
              <source src={sampleVideo} />
              <p>Your browser does not support this type of media</p>
            </video>
          </div>
          <div className="flex-1 p-8 lg:px-16 flex items-start justify-center flex-col text-left gap-y-4">
            <h2 className="text-4xl uppercase">How was Ministore Found?</h2>
            <p className=" font-light">
              miniStore was founded with a passion for technology and a vision
              to bring the latest cutting-edge devices to tech enthusiasts and
              gadget lovers. Our journey began when a group of tech-savvy
              individuals came together, driven by a shared love for innovation
              and a desire to make the latest advancements accessible to
              everyone.
            </p>

            <p className="font-light">
              Inspired by the fast-paced world of smartphones, tablets, and
              smartwatches, we embarked on a mission to curate a collection of
              high-quality products that represent the forefront of technology.
              With a commitment to quality, affordability, and customer
              satisfaction, miniStore was born.
            </p>
            <p className="font-light">
              Over the years, we've dedicated ourselves to staying ahead of the
              tech curve, continually updating our product offerings to showcase
              the most exciting and innovative devices. Our website is designed
              to provide a seamless and enjoyable shopping experience, making it
              easier than ever to explore and purchase the latest gadgets.
            </p>
            <p className="font-light">
              At miniStore, we're not just a retailer; we're a community of tech
              enthusiasts who share our passion for staying on the edge of
              technology. We're excited to serve our customers and be a part of
              their tech journeys.
            </p>

            <p className="font-light">
              Thank you for choosing miniStore as your destination for the
              latest in phones, tablets, and smartwatches. We look forward to
              being your trusted source for all things tech.
            </p>

            <Link
              preventScrollReset={true}
              to={'/shop'}
              className="uppercase text-white bg-dark px-8 py-3 font-lato font-normal mt-8"
            >
              check our store
            </Link>
          </div>
        </div>
      </section>
      <Testimonial reviews={reviews} />
    </>
  );
};
export default AboutPage;
