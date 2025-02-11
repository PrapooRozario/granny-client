import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Autoplay,
  EffectCreative,
  Navigation,
  Pagination,
} from "swiper/modules";
import "swiper/css/effect-creative";
import BannerContent from "./BannerContent";
import { ChevronLeft, ChevronRight } from "lucide-react";
const Banner = () => {
  return (
    <div className="w-full relative mt-20">
      <button className="custom-prev absolute text-black/80 bg-yellow-300/40 z-30 p-3 rounded-full left-4 top-1/2 transform -translate-y-1/2">
        <ChevronLeft className="text-3xl"></ChevronLeft>
      </button>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCreative]}
        effect={"creative"}
        grabCursor={true}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{ prevEl: ".custom-prev", nextEl: ".custom-next" }}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        className="w-full"
      >
        <SwiperSlide>
          <BannerContent
            bgImage={
              "https://transcode-v2.app.engoo.com/image/fetch/f_auto,c_lfill,w_300,dpr_3/https://assets.app.engoo.com/images/x7jPxj9YtJfv97hnC3mMmQog5VwuYojZ7tlrhczGXIV.jpeg"
            }
            title={"Savor the Flavor of Efficiency"}
            subtitle={
              "Transform your restaurant management into a delightful experience."
            }
          ></BannerContent>
        </SwiperSlide>
        <SwiperSlide>
          <BannerContent
            bgImage={
              "https://royalmahal.co.uk/storage/2023/01/indian-restaurant-scaled-e1670322083921-1024x692.jpg"
            }
            title={"Effortless Restaurant Management Starts Here"}
            subtitle={
              "Elevate customer experiences with seamless management tools."
            }
          ></BannerContent>
        </SwiperSlide>
        <SwiperSlide>
          <BannerContent
            bgImage={
              "https://i0.wp.com/www.drdavidludwig.com/wp-content/uploads/2017/01/1-RIS_6IbCLYv1X3bzYW1lmA.jpeg?fit=800%2C552&ssl=1"
            }
            title={"Deliciously Simplifying Your Operations"}
            subtitle={"Tools to serve smarter and grow faster."}
          ></BannerContent>
        </SwiperSlide>
      </Swiper>
      <button className="custom-next absolute text-black/80 bg-yellow-300/40 z-30 p-3 rounded-full right-4 top-1/2 transform -translate-y-1/2">
        <ChevronRight className="text-3xl"></ChevronRight>
      </button>
    </div>
  );
};

export default Banner;
