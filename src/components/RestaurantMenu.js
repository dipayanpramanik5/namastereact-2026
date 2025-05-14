import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import RestaurantCategory from "./RestaurantCategory";
import { useRestrauntMenu } from "../utils/useRestrauntMenu";
import { ShimmerRestroMenu } from "./ShimmerRestroMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showVeg, setShowVeg] = useState(false);
  const [showIndex, setShowIndex] = useState(0);
  //const [resInfo, setResInfo] = useState(null);

  // Fetch restraunbt menu data using custom hook.
  const resInfo = useRestrauntMenu(resId);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.4919045&lng=88.38562879999999&" + "restaurantId=" + resId + "&catalog_qa=undefined&submitAction=ENTER");
//     const json = await data.json();
//     setResInfo(json.data);
//   };

  if (resInfo === null) return <ShimmerRestroMenu />; 

  const { name, cuisines, costForTwoMessage } =
  resInfo?.cards[2]?.card?.card?.info;

//   const { itemCards } =
//   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;


  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <div>
        <label className="flex items-center space-x-2 justify-center my-4">

            <input
                type="checkbox"
                className="form-checkbox text-center"
                onChange={(e) => {
                    // Handle veg-only filter logic here
                    setShowVeg(e.target.checked);
                }}
            />
            <span>Veg Only</span>
        </label>
      </div>
      {/* {
        itemCards.map((item, index) => (
            <div key={item?.card?.info?.id} className="my-4">
                <h2 className="font-bold text-lg">{item?.card?.info?.name}</h2>
                <p>{item?.card?.info?.description}</p>
                <p className="font-bold text-lg">
                ₹{item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}
                </p>
            </div>
        ))
      } */}
      {categories.map((category, index) => (
        // controlled component
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          vegOnly={showVeg}
          showSubItems={index == showIndex ? true: false}
          setShowIndex = {(index) => setShowIndex(index)}
          index = {index}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;