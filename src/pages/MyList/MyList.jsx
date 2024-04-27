import { useLoaderData } from "react-router-dom";
import MyListCard from "./MyListCard";

export default function MyList() {
  const places = useLoaderData();

  return (
    <>
      {places.map((place) => (
        <MyListCard key={place._id} place={place}></MyListCard>
      ))}
    </>
  );
}
