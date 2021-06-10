import React, { useState } from "react";
import Filter from "./Fliter";
import Item from "./Item";

function ShoppingList({ items }) {
  
const [currentList, setCurrentList] = useState(items)

console.log(items)
  function showNewItems(category){
    console.log(items)
    let newList
    if (category === "All") {
      newList = items
    } else {
      newList = items.filter(el => el.category === category) 
    }

    setCurrentList(newList)
  }

  return (
    <div className="ShoppingList">
      <Filter onCategoryChange={showNewItems}/>
      <ul className="Items">
        {currentList.map((item) => (
          <Item key={item.name} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
