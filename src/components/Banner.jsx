import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Login from "@/pages/Login";
import BannerContent from "./BannerContent";
const Banner = () => {
  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
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
    </div>
  );
};

export default Banner;
