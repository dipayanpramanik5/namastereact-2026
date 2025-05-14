import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, vegOnly, showSubItems, setShowIndex, index}) => {
  //const [showSubItems, setShowSubItems] = useState(false);
  const categoryItemCount = !vegOnly ? data.itemCards.length : data.itemCards.filter((item) => item.card.info.isVeg === 1).length;
  const handleClick = () => {
    showSubItems ? setShowIndex(-1) : setShowIndex(index);
  };
//   if (vegOnly === true) {
//     const itemCards = data.itemCards.filter((item) => {
//       return item.card.info.isVeg === 1;
//     });     
//     let categoryItemCount = itemCards.length;
//     e.log(categoryItemCount);
//   }
//   else {
//     let categoryItemCount = data.itemCards.length;
//   }
  return (
    categoryItemCount > 0  && <div>
      {/* Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({categoryItemCount})
          </span>
          <span>{showSubItems ? "−": "✚"}</span>
        </div>

        {showSubItems && <ItemList items={data.itemCards} showVeg={vegOnly}/>}
      </div>
    </div>
  );
};

export default RestaurantCategory;