import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

//icons
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

type Review = {
  id: number;
  review: string;
  rating: number;
  ratingBy: string;
};

interface TestimonialProps {
  reviews: Review[];
}
const Testimonial = ({ reviews }: TestimonialProps) => {
  return (
    <section className="max-w-screen-xl mx-auto my-4">
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        height={500}
        navigation
        autoplay={true}
        speed={1000}
        loop={true}
      >
        {reviews?.map(({ id, ratingBy, rating, review }) => (
          <SwiperSlide key={id}>
            <div className=" py-32 px-16 lg:px-32 flex flex-col items-center gap-4">
              <p className="font-lato text-2xl font-light text-center mb-8">
                "{review}"
              </p>
              <div className="stars flex">
                {[1, 2, 3, 4, 5].map((star) => {
                  return star <= rating ? (
                    <AiFillStar
                      key={star}
                      className="text-semiBlue"
                      size={20}
                    />
                  ) : (
                    <AiOutlineStar
                      key={star}
                      className="text-semiBlue"
                      size={20}
                    />
                  );
                })}
              </div>
              <p className="uppercase">{ratingBy}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
export default Testimonial;
