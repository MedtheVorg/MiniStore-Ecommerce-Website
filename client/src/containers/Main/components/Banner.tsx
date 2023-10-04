import { Link } from 'react-router-dom';
import watch from '../../../assets/bannerImages/watch.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { images } from '../../../assets';
const Banner = () => {
  return (
    <section className="bg-lightWhite">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        // autoplay={{
        //   stopOnLastSlide: false,
        //   disableOnInteraction: false,
        //   pauseOnMouseEnter: true,
        //   reverseDirection: false,
        // }}
        loop={true}
        speed={3000}
      >
        <SwiperSlide>
          <div className="max-w-screen-xl  h-[50vh] min-h-[500px] mx-auto flex items-center overflow-hidden px-10 ">
            {/* left side */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="uppercase text-5xl lg:text-7xl font-light leading-tight  ">
                Discover the Latest Gadgets
              </h1>
              <p className="my-2 text-lightGray text-lg">
                Explore innovation at miniStore. From smartphones to
                smartwatches and tablets, find the latest gadgets here.
              </p>
              <button className="uppercase text-white bg-dark px-8 py-3 font-lato font-normal mt-8 rounded-lg transition-all hover:rounded-none ">
                <Link to={'/shop'}>discover more</Link>
              </button>
            </div>
            {/* right side */}
            <div className="flex-1 mt-28  hidden lg:block  ">
              <img
                className="object-cover  "
                src={watch}
                alt="image of a watch"
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" text-white relative">
            <div className="max-w-screen-xl  h-[50vh] min-h-[500px] mx-auto flex items-center overflow-hidden px-10  z-[2] relative">
              {/* left side */}
              <div className="flex-1 text-center lg:text-left z-10">
                <h1 className="uppercase text-5xl lg:text-7xl font-light leading-tight  ">
                  Your One-Stop Tech Shop
                </h1>
                <p className="my-2  text-lg">
                  Welcome to miniStore, your ultimate tech destination. Quality
                  electronics at your fingertips
                </p>
                <button className="uppercase text-dark bg-white px-8 py-3 font-lato font-normal mt-8  border-dark transition-all   border-2 border-transparent hover:border-white hover:bg-transparent hover:text-white">
                  <Link to={'/shop'}>shop now</Link>
                </button>
              </div>
              {/* right side */}
              <div className="flex-1 mt-28  hidden lg:block  "></div>
            </div>
            <img
              className="absolute top-0 left-0 bottom-0 right-0 h-full w-full object-cover z-[1]"
              src={images.bannerImage2}
              alt="banner image"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" text-white">
            <div className="max-w-screen-xl  h-[50vh] min-h-[500px] mx-auto flex items-center overflow-hidden px-10 relative z-[2] ">
              {/* left side */}
              <div className="flex-1 text-center lg:text-left z-10">
                <h1 className="uppercase text-5xl lg:text-7xl font-light leading-tight  ">
                  Tech Essentials Await You
                </h1>
                <p className="my-2  text-lg">
                  Find tech essentials at miniStore, from connectivity to
                  productivity solutions.
                </p>
                <button className="uppercase text-dark bg-white px-8 py-3 font-lato font-normal mt-8  border-dark transition-all   border-2 border-transparent hover:border-white hover:bg-transparent hover:text-white">
                  <Link to={'/shop'}>shop now</Link>
                </button>
              </div>
              {/* right side */}
              <div className="flex-1 mt-28  hidden lg:block  "></div>
            </div>
            <img
              className="absolute top-0 left-0 bottom-0 right-0 h-full w-full object-cover z-[1]"
              src={images.bannerImage1}
              alt="banner image"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
export default Banner;
