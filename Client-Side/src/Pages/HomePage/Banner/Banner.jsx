import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination } from "swiper/modules";

import b1 from "../../../assets/Banner/banner.png";

const data = [
  {
    id: 1,
    img: b1,
    title: " Celebrate the season of lux",
    description:
      " Discover a World of Unmatched Style: Your Ultimate Destination for Trendy Fashion, Timeless Elegance, Everyday Essentials, and Statement Pieces That Redefine Your Wardrobe!",
  },
  {
    id: 2,
    img: b1,
    title: " Celebrate the season of lux",
    description:
      " Discover a World of Unmatched Style: Your Ultimate Destination for Trendy Fashion, Timeless Elegance, Everyday Essentials, and Statement Pieces That Redefine Your Wardrobe!",
  },
  {
    id: 3,
    img: b1,
    title: " Celebrate the season of lux",
    description:
      " Discover a World of Unmatched Style: Your Ultimate Destination for Trendy Fashion, Timeless Elegance, Everyday Essentials, and Statement Pieces That Redefine Your Wardrobe!",
  },
];

const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {data.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="flex flex-col-reverse md:flex-row justify-center items-center bg-[#DFF9E4] px-5 py-10 gap-5 md:gap-2 rounded">
              <div className="md:w-1/2 text-center md:text-left">
                <h2 className="text-[#FD7E14] text-3xl md:text-5xl font-bold">
                  {item.title}
                </h2>
                <p className="text-sm md:text-base my-5 text-[#4F4F4F] md:mr-32">
                  {item.description}
                </p>
                <button className="bg-green-600 px-10 py-3 rounded-full text-white">
                  Shop Now
                </button>
              </div>
              <div className="md:w-1/2">
                <figure>
                  <img src={item.img} alt={item.title} />
                </figure>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div></div>
    </div>
  );
};

export default Banner;
