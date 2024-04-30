import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { RxArrowTopRight } from "react-icons/rx";
import { Link } from "react-router-dom";

const CountryCard = () => {
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://adventure-axis-server.vercel.app/country"
        );
        if (response.ok) {
          const data = await response.json();
          setCountryData(data);
        } else {
          console.error("Failed to fetch country data");
        }
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
              {countryData.map((item) => (
                <SwiperSlide key={item._id}>
                  <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer translate-x-5">
                    <div
                      className="absolute inset-0 bg-cover bg-center "
                      style={{
                        backgroundImage: `url(${item.image})`,
                      }}
                    />
                    <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50 " />
                    <div className="relative flex flex-col gap-3 ">
                      {/* <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" /> */}
                      <h1 className="text-xl lg:text-2xl">
                        {item.country_Name}{" "}
                      </h1>
                      <p className="lg:text-[18px]">{item.description} </p>
                    </div>
                    <Link to={item.url}>
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
