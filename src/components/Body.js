import RestaurantCard, {topRatedRestrauntCard} from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import { useRestrauntList } from "../utils/useRestrauntList";
import UserContext from "../utils/UserContext";


const Body = () => {
    // const [listOfRestraunts, setlistOfRestraunts] = useState([]);
    // const [searchedRestraunts, setSearchedRestraunts] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState('');
    const {loggedInUser, setUserName} = useContext(UserContext); // useContext to get the loggedInUser from UserContext

    // useEffect(() =>{
    //     fetchData();
    // }, []);
    
    // const fetchData = async () => {
    //   const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.4876464&lng=88.371583&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    //   const json = await data.json();
    //   setlistOfRestraunts(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    //   setSearchedRestraunts(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // }

    // Custom Hook to fetch restraunt list.
    const [listOfRestraunts, searchedRestraunts, setSearchedRestraunts] = useRestrauntList();
    const TopRatedRestro = topRatedRestrauntCard(RestaurantCard);

    // Custom Hook to check online status.
    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) {
        return (
            <div className="text-center">
                <h1 className="font-bold text-2xl">Looks like you are offline</h1>
            </div>
        )
    }

    // Conditional Rendering.
    // if (listOfRestraunts.length == 0) {
    //     return <Shimmer />;
    // }

    return listOfRestraunts.length == 0 ? (
        <Shimmer/> 
      ) : (
      <div className="body ">
        <div className="flex space-around">
            <div className="search m-4 p-4">
                <input
                  type="text"
                  className="border border-gray-400 p-2 rounded-lg"
                  placeholder="Search for restraunts"
                  value={searchKeyword}
                  onChange={(e) => {
                    setSearchKeyword(e.target.value);
                  }}
                />
                <button 
                  className="m-4 p-4 bg-green-200 rounded-lg"
                  onClick={() => {
                    const filteredRestraunt = listOfRestraunts.filter(
                        (res) => res.info.name.toLowerCase().includes(searchKeyword.toLowerCase())
                    )
                    setSearchedRestraunts(filteredRestraunt);
                }}> Search </button>
            </div>
            <div className="search m-4 p-4">
              <button 
                className="m-4 p-4 bg-green-200 rounded-lg"
                onClick={()=>{
                  const filteredRestraunt = listOfRestraunts.filter(
                      (res) => res.info.avgRating > 4.4
                  );
                  setSearchedRestraunts(filteredRestraunt);
              }}
              >
                Top Rated Restro
              </button>
            </div>
            <div className="search m-4 p-4 flex items-center">
              <label className="flex items-center space-x-2 justify-center my-4"> UserName : </label>
              <input
                type="text"
                className="border border-gray-400 p-2 rounded-lg mx-1.5"
                placeholder="Enter your name"
                value={loggedInUser}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
        </div>
        <div className="flex flex-wrap">
          {
            searchedRestraunts.length == 0 ?
            // If no restraunts found. Dislay the text at the middle of the page.
            <div className="text-center">
                <h1 className="font-bold text-2xl align-middle flex justify-center items-center">No restraunts found</h1>
            </div> :
            searchedRestraunts.map((restraunt) => (
              
              <Link
                key={restraunt?.info.id}
                to={"/restaurants/" + restraunt?.info.id}
              >
                {
                  restraunt?.info.avgRating > 4.4 ? (
                    <TopRatedRestro key={restraunt?.info?.id} resData={restraunt} />
                  ) : (
                    <RestaurantCard key={restraunt?.info?.id} resData={restraunt} />
                  )
                }
              </Link>
            ))
          }
        </div>
      </div>
    );
  };

export default Body;