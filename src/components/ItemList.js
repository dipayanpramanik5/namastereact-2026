import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import { useLocation } from 'react-router-dom';
import { useState } from "react";
import { useSelector } from "react-redux";

const ItemList = ({ items, showVeg }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const cartItems = useSelector(store => store.cart.items); // get the items from the redux store
  const [ reRender, setReRender ] = useState(false);
  const addedCartItemsIDs = cartItems.length > 0
    ? cartItems.map((item) => item.card.info.id)
    : [];


  const handleAddItem = (item) => {
    // Check if item is already added in the cart or not.
    const isCartItem = cartItems.some(
      (cartItem) => cartItem.card.info.id === item.card.info.id
    );
    if (isCartItem) {
      // If the item is already in the cart, remove it from the cart
      // Dispatch an action
      dispatch(removeItem(item));
      setReRender(!reRender);
    }
    else {
        // Dispatch an action
        dispatch(addItem(item));
        setReRender(!reRender);
    }
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

    return (
        <div>
            {items.map((item, index) => 
              (!showVeg || (showVeg === true && item.card.info.isVeg === 1)) && (
                <div
                    data-testid="foodItems"
                    key={`${item.card.info.id} - ${index}`}
                    className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
                >
                    <div className="w-9/12">
                        <div className="py-2">
                            <p>{item.card.info.isVeg===1 ? '🟢': '🔴'}</p>
                            <span>{item.card.info.name}</span>
                            <span>
                                - ₹
                                {item.card.info.price
                                    ? item.card.info.price / 100
                                    : item.card.info.defaultPrice / 100}
                            </span>
                        </div>
                        <p className="text-xs">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12 p-4">
                        <div className="absolute">
                            <button
                                className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"
                                onClick={() => {location.pathname =='/cart'? handleRemoveItem(item) : handleAddItem(item)}}
                            > 
                                {(location.pathname == '/cart') ||
                                (addedCartItemsIDs.includes(item.card.info.id))  ? "Remove -" : "Add +" 
                                }
                            </button>
                        </div>
                        {item?.card?.info?.imageId && <img src={CDN_URL + item.card.info.imageId} className="w-full" />}
                    </div>
                </div>
            ))
            }
        </div>
    );
};

export default ItemList;