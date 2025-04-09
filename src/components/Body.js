import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useState } from "react";


const Body = () => {
    const [listOfRestraunts, setlistOfRestraunts] = useState(resObj);
    // let listOfRestraunts = [
    //     {
    //       "info": {
    //         "id": "10369",
    //         "name": "Pizza Hut",
    //         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/2b5e29f4-8edb-400e-a65d-d7617a9ef913_10369.jpg",
    //         "locality": "Tollygunge (241)",
    //         "areaName": "Netaji Nagar",
    //         "costForTwo": "₹350 for two",
    //         "cuisines": [
    //             "Pizzas"
    //         ],
    //         "avgRating": 4.3,
    //         "parentId": "721",
    //         "avgRatingString": "4.3",
    //         "totalRatingsString": "31K+",
    //         "sla": {
    //             "deliveryTime": 29,
    //             "lastMileTravel": 2.5,
    //             "serviceability": "SERVICEABLE",
    //             "slaString": "25-30 mins",
    //             "lastMileTravelString": "2.5 km",
    //             "iconType": "ICON_TYPE_EMPTY"
    //         },
    //       },
    //     },
    //     {
    //         "info": {
    //       "id": "103900",
    //       "name": "KFC",
    //       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/54a0790c-ca73-4082-91ca-cece2013e469_103900.JPG",
    //       "locality": "Southcity Mall",
    //       "areaName": "Jadavpur",
    //       "costForTwo": "₹450 for two",
    //       "cuisines": [
    //           "American",
    //           "Snacks",
    //           "Biryani"
    //       ],
    //       "avgRating": 4.5,
    //       "parentId": "547",
    //       "avgRatingString": "4.5",
    //       "totalRatingsString": "12K+",
    //       "sla": {
    //           "deliveryTime": 37,
    //           "lastMileTravel": 3,
    //           "serviceability": "SERVICEABLE",
    //           "slaString": "35-40 mins",
    //           "lastMileTravelString": "3.0 km",
    //           "iconType": "ICON_TYPE_EMPTY"
    //       },
    //     }
    //     }
    // ];
    return (
      <div className="body">
        <div className="filter">
            <button 
              className="filter-btn"
              onClick={()=>{
                filteredRestraunt = listOfRestraunts.filter(
                    (res) => res.info.avgRating > 4.6
                );
                setlistOfRestraunts(filteredRestraunt);
            }}
            >
              Top Rated Restro
            </button>
        </div>
        <div className="res-container">
          {
            listOfRestraunts.map((restraunt) => (
              <RestaurantCard key={restraunt?.info?.id} resData={restraunt}/>
            ))
          }
        </div>
      </div>
    );
  };

export default Body;