import { useLoaderData } from "react-router-dom";
import MyListCard from "./MyListCard";
// import LocationAnimation from "../../components/Animation/LocationAnimation";

export default function MyList() {
  const places = useLoaderData();

  console.log(places);

  return (
    <>
      {/* {places.map((place) => (
        <MyListCard key={place._id} place={place}></MyListCard>
      ))} */}
      {/* <LocationAnimation></LocationAnimation> */}

      <MyListCard></MyListCard>
    </>
  );
}
