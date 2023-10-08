import Banner from '../containers/Main/components/Banner.tsx';
import Features from '../containers/Main/components/Features.tsx';
import Slider from '../containers/Main/components/Slider.tsx';
import Sales from '../containers/Main/components/Sales.tsx';
import Blogs from '../containers/Main/components/Blogs.tsx';
import Testimonial from '../containers/Main/components/Testimonial';

// custom Data
import { blogsData } from '../data/blogs.ts';
import reviews from '../data/reviews.ts';
import phones from '../data/phones.ts';
import watches from '../data/watches.ts';
import { Suspense } from 'react';

const HomePage = () => {
  return (
    <>
      <Banner />
      <Features />

      <Slider title={'phones'} products={phones} />
      <Slider title={'watches'} products={watches} />
      <Sales />
      <Blogs blogs={blogsData} />
      <Testimonial reviews={reviews} />
    </>
  );
};
export default HomePage;
