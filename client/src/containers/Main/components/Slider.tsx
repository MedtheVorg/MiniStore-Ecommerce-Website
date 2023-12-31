// import Swiper core and required modules
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

//icons
import { SliderProps } from '../../../lib/types';
import Product from '../../../components/Product';
import { Link } from 'react-router-dom';
import Blog from '../../../pages/blogsPage/components/Blog';

const Slider = ({
  title,
  products,
  filter = undefined,
  blogs,
}: SliderProps) => {
  return (
    <section className="max-w-screen-xl mx-auto px-4 my-16">
      <div className="flex items-center justify-between mb-4">
        <h2 className="uppercase text-2xl font-[400]  underline">{title}</h2>
        <Link
          to={'/cart'}
          className="uppercase  underline underline-offset-8  hover:scale-110 transition-all "
        >
          {products ? ' go to shop' : 'read blogs'}
        </Link>
      </div>

      {/* TODO: Find a better solution than this */}
      {/* products Slider */}
      {products ? (
        <Swiper
          // install Swiper modules
          modules={[Navigation, Autoplay]}
          spaceBetween={10}
          speed={600}
          parallax={true}
          navigation={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            480: {
              slidesPerView: 1.5,
              spaceBetween: 30,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1000: {
              slidesPerView: 4,
            },
          }}
          className="px-20"
        >
          {filter
            ? products
                ?.filter((pr) => pr.category === filter)
                .sort(() => Math.random() - 1)
                .map((product) => (
                  <SwiperSlide key={product.id}>
                    <Product data={product} />
                  </SwiperSlide>
                ))
            : products?.map((product) => (
                <SwiperSlide key={product.id}>
                  <Product data={product} />
                </SwiperSlide>
              ))}
        </Swiper>
      ) : null}

      {/* blogs Slider */}
      {blogs ? (
        <Swiper
          // install Swiper modules
          modules={[Navigation, Autoplay]}
          spaceBetween={10}
          speed={600}
          parallax={true}
          navigation={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            480: {
              slidesPerView: 1.5,
              spaceBetween: 30,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1000: {
              slidesPerView: 4,
            },
          }}
          className="px-20"
        >
          {filter
            ? blogs
                ?.filter((pr) => pr.category === filter)
                .sort(() => Math.random() - 1)
                .map((blg) => (
                  <SwiperSlide key={blg.id}>
                    <Blog data={blg} />
                  </SwiperSlide>
                ))
            : blogs?.map((blg) => (
                <SwiperSlide key={blg.id}>
                  <Blog data={blg} />
                </SwiperSlide>
              ))}
        </Swiper>
      ) : null}
    </section>
  );
};

export default Slider;
