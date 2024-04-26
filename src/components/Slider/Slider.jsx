import { useEffect } from "react";
import "./style.css";

const slides = [
  {
    id: 1,
    title: "Switzerland",
    subtitle: "Explore the beauty of Switzerland",
    button: "Explore",
    imageUrl: "https://i.ibb.co/qCkd9jS/img1.jpg",
  },
  {
    id: 2,
    title: "Finland",
    subtitle: "Discover the wonders of Finland",
    button: "Explore",
    imageUrl: "https://i.ibb.co/jrRb11q/img2.jpg",
  },
  {
    id: 3,
    title: "Iceland",
    subtitle: "Experience the magic of Iceland",
    button: "Explore",
    imageUrl: "https://i.ibb.co/NSwVv8D/img3.jpg",
  },
  {
    id: 4,
    title: "Australia",
    subtitle: "Explore the diversity of Australia",
    button: "Explore",
    imageUrl: "https://i.ibb.co/Bq4Q0M8/img4.jpg",
  },
  {
    id: 5,
    title: "Netherland",
    subtitle: "Discover the charm of the Netherlands",
    button: "Explore",
    imageUrl: "https://i.ibb.co/jTQfmTq/img5.jpg",
  },
  {
    id: 6,
    title: "Ireland",
    subtitle: "Explore the green landscapes of Ireland",
    button: "Explore",
    imageUrl: "https://i.ibb.co/RNkk6L0/img6.jpg",
  },
];

const Slider = () => {
  useEffect(() => {
    const handleNextClick = () => {
      const items = document.querySelectorAll(".item");
      document.querySelector(".slide").appendChild(items[0]);
    };

    const handlePrevClick = () => {
      const items = document.querySelectorAll(".item");
      document.querySelector(".slide").prepend(items[items.length - 1]);
    };

    const nextButton = document.querySelector(".next");
    const prevButton = document.querySelector(".prev");

    nextButton.addEventListener("click", handleNextClick);
    prevButton.addEventListener("click", handlePrevClick);


    return () => {
      nextButton.removeEventListener("click", handleNextClick);
      prevButton.removeEventListener("click", handlePrevClick);
    };
  }, []);

  return (
    <div className="container mx-auto  ">
      <div className="slider_container ">
        <div className="slide">
          {/* Slide image by mapping */}
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="item"
              style={{ backgroundImage: `url(${slide.imageUrl})` }}
            >
              <div className="content">
                <div className="name">{slide.title}</div>
                <div className="des">{slide.subtitle}</div>
                <button>{slide.button}</button>
              </div>
            </div>
          ))}
        </div>

        <div className="button">
          <button className="prev">
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button className="next">
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
