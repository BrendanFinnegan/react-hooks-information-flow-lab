import {useState} from 'react'

function Filter ({onCategoryChange}) {

    const [selectedCategory, setSelectedCategory] = useState("All");

    function handleCategoryChange(event) {
        onCategoryChange(event.target.value);
    }
  
    return(
        <div className="Filter">
        <select name="filter" onChange={handleCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
    )
}

export default Filter

    // const itemsToDisplay = items.filter((item) => {
    //     if (selectedCategory === "All") return true;
    
    //     return item.category === selectedCategory;
    //   });