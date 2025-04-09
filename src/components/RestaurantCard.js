import {CDN_URL} from "../utils/constants";

// Restaurant Card Component.
const RestaurantCard = (props) => {
    const {resData} = props;
    return (
      <div className="res-card">
        <img className="res-logo" alt="res-logo" src={CDN_URL + resData?.info?.cloudinaryImageId} />
        <h3>{resData?.info?.name}</h3>
        <h4>{resData?.info?.avgRating} {resData?.info?.sla?.slaString}</h4>
        <h4>{resData?.info?.cuisines.join(', ')}</h4>
        <h4>{resData?.info?.areaName}</h4>
      </div>
    )
  }

export default RestaurantCard;