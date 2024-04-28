import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination, Autoplay } from "swiper/modules";

import { RxArrowTopRight } from "react-icons/rx";
import { ServiceData } from "./constants.index";
import { Link } from "react-router-dom";

const CountryCard = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white pt-10 mb-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-base font-semibold leading-7 text-indigo-600">
            Get the help you need
          </p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Support center
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
        </div>
      </div>

      {/* slider goes here */}
      <div>
        <div>
          <div className="flex items-center justify-center flex-col">
            <Swiper
              breakpoints={{
                340: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
                700: {
                  slidesPerView: 3,
                  spaceBetween: 15,
                },
              }}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination, Autoplay]}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              className="max-w-[90%] lg:max-w-[80%]"
            >
              {ServiceData.map((item) => (
                <SwiperSlide key={item.title}>
                  <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer translate-x-5">
                    <div
                      className="absolute inset-0 bg-cover bg-center "
                      style={{
                        backgroundImage: `url(${item.backgroundImage})`,
                      }}
                    />
                    <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50 " />
                    <div className="relative flex flex-col gap-3 ">
                      <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" />
                      <h1 className="text-xl lg:text-2xl">{item.title} </h1>
                      <p className="lg:text-[18px]">{item.content} </p>
                    </div>
                    <Link to={`/explor-country/`}>
                    <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
