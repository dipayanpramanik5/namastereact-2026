import { useEffect, useState } from "react";
import { RESTAURANT_API_URL } from "./constants";


export const useRestrauntList = () => {
    const [listOfRestraunts, setlistOfRestraunts] = useState([]);
    const [searchedRestraunts, setSearchedRestraunts] = useState([]);

    const fetchData = async () => {
      const data = await fetch(RESTAURANT_API_URL);
      const json = await data.json();
      setlistOfRestraunts(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setSearchedRestraunts(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    useEffect(()=>{
        fetchData();
    }, []);

    return [listOfRestraunts, searchedRestraunts, setSearchedRestraunts];
}