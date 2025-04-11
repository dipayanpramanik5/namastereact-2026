import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";


const Body = () => {
    const [listOfRestraunts, setlistOfRestraunts] = useState([]);
    const [searchedRestraunts, setSearchedRestraunts] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState('');

    useEffect(() =>{
        fetchData();
    }, []);
    
    const fetchData = async () => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.4876464&lng=88.371583&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      setlistOfRestraunts(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setSearchedRestraunts(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    // Conditional Rendering.
    // if (listOfRestraunts.length == 0) {
    //     return <Shimmer />;
    // }

    return listOfRestraunts.length == 0 ? (
        <Shimmer/> 
      ) : (
      <div className="body">
        <div className="filter">
            <div className="search">
                <input
                  type="text"
                  className="search-box"
                  value={searchKeyword}
                  onChange={(e) => {
                    setSearchKeyword(e.target.value);
                  }}
                />
                <button onClick={() => {
                    filteredRestraunt = listOfRestraunts.filter(
                        (res) => res.info.name.toLowerCase().includes(searchKeyword.toLowerCase())
                    )
                    setSearchedRestraunts(filteredRestraunt);
                }}> Search </button>
            </div>
            <button 
              className="filter-btn"
              onClick={()=>{
                filteredRestraunt = listOfRestraunts.filter(
                    (res) => res.info.avgRating > 4.6
                );
                setSearchedRestraunts(filteredRestraunt);
            }}
            >
              Top Rated Restro
            </button>
        </div>
        <div className="res-container">
          {
            searchedRestraunts.map((restraunt) => (
              <RestaurantCard key={restraunt?.info?.id} resData={restraunt}/>
            ))
          }
        </div>
      </div>
    );
  };

export default Body;