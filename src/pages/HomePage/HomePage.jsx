import NewsLetter from "../../components/NewsLetter/NewsLetter";
import Slider from "../../components/Slider/Slider";
import SpotsCard from "../../components/SpotsCard/SpotsCard";
import Testimonials from "../../components/Testimonials/Testimonials";

const HomePage = () => {
  return (
    <div>
      <Slider></Slider>
      <SpotsCard></SpotsCard>
      <Testimonials></Testimonials>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default HomePage;
