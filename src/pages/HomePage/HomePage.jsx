import Card from "../../components/Card/Card";
import CountryCard from "../../components/CountryCard/CountryCard";
// import CountryCard from "../../components/CountryCard/CountryCard";
// import CCard from "../../components/CountryCard/Card";

import NewsLetter from "../../components/NewsLetter/NewsLetter";
import Slider from "../../components/Slider/Slider";
import SpotsCard from "../../components/SpotsCard/SpotsCard";
import Testimonials from "../../components/Testimonials/Testimonials";

const HomePage = () => {
  return (
    <div>
      <Slider></Slider>
      <Card></Card>
      <SpotsCard></SpotsCard>
      <Testimonials></Testimonials>
      <CountryCard></CountryCard>

      <NewsLetter></NewsLetter>
    </div>
  );
};

export default HomePage;
