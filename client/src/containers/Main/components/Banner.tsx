import { Link } from 'react-router-dom';
import watch from '../../../assets/bannerImages/watch.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
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
          <div className="bg-[url('./src/assets/bannerImages/Your-One-Stop-Tech-Shop.jpeg')]  bg-center text-white">
            <div className="max-w-screen-xl  h-[50vh] min-h-[500px] mx-auto flex items-center overflow-hidden px-10 relative ">
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
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-[url('./src/assets/bannerImages/Tech-Essentials-Await-You.jpeg')] bg-center  bg-cover text-white">
            <div className="max-w-screen-xl  h-[50vh] min-h-[500px] mx-auto flex items-center overflow-hidden px-10 relative ">
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
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
export default Banner;
