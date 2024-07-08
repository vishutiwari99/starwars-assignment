import { useEffect, useState } from "react";
import {   getData } from "../http/api";
import StarshipItem from "./StarshipItems";
import { Starship } from "../types";

const StarshipList = () => {

  const [starshipList, setStarshipList] = useState<Starship[]>();

  const getStarShipList = async () => {
    setStarshipList(await getData());
  };

  useEffect(() => {
    getStarShipList();
  }, []);

  return (
    <ul className="mx-auto max-w-lg">
      {starshipList?.map((starship,index) => (
        <StarshipItem key={index} starship={starship} />
      ))}
    </ul>
  )
}

export default StarshipList;
