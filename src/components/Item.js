import React,{ useState } from "react";

function Item({ name, category }) {
  const [cart,setCart] = useState(false)
  const inCart = cart ? "in-cart" : ''
  function changeCart(){
    setCart(!cart)
  }
  return (
    <li className={inCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={changeCart} className="add">{cart?"Remove From Cart":"Add to Cart"}</button>
    </li>
  );
}

export default Item;
