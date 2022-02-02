import React,{useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  // console.log(items)
  const [selectedCategory,setCat] = useState("All")
  function changeCat({target}){
    setCat(target.value)
  }
  const showCat = items.filter((item) => {
    if(selectedCategory === 'All'){
      return true;
    }else{
      return selectedCategory === item.category
    }
  })
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={changeCat} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {showCat.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
        {/* {console.log(items)} */}
      </ul>
    </div>
  );
}

export default ShoppingList;
// function changeSet(e){
//   setCat(e.target.value)
//   // if(e.target.value==='All'){

//   // }
//   const arr = items.filter(item => 
//     item.category === selectedCategory
//   )
//   console.log(selectedCategory)
//   return (
//     <ul className="Items">
//     {items.map(item => (
//       <Item key={item.id} name={item.name} category={item.category} />
//     ))}
//     {console.log(arr)}
//     </ul>
//   )
// }