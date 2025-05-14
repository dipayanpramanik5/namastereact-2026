import {CDN_URL} from "../utils/constants";

// Restaurant Card Component.
const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="m-4 p-4 w-64 h-128 bg-gray-100 shadow-lg rounded-lg hover:bg-gray-200 hover:shadow-2xl hover:scale-105 cursor-pointer">
      <img className="rounded-2xl" alt="res-logo" src={CDN_URL + resData?.info?.cloudinaryImageId} />
      <h3 className="font-bold py-4">{resData?.info?.name}</h3>
      <h4>{resData?.info?.avgRating} {resData?.info?.sla?.slaString}</h4>
      <h4>{resData?.info?.cuisines.join(', ')}</h4>
      <h4>{resData?.info?.areaName}</h4>
    </div>
  )
}

export const topRatedRestrauntCard = (RestaurantCard) => {
  return (props) => {
    return (
      // Add a top rated label to the restaurant card. On hover of the restro card, the label will be displayed.
      // The label will be positioned at the top left corner of the card.
      // The label will be a red colored background with white text.
      <div className="relative">
        <span className="absolute top-0 left-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-bl-lg ">Top Rated</span>
        <RestaurantCard {...props} />
      </div>
    )
  }
}

export default RestaurantCard;