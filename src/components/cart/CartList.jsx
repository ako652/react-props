import React from "react";
import CartItem from './CartItem'

export default function CartList() {
  const lastName = "Andrea";
  const number = 1;
  // write a function here then pass to cart list as a prop. Function name: addNumber with 2 parameters and return sum of 2 parameters
const addNumber=(firstname, num)=>{
return `${firstname } ${lastName}` + ' ' + `${number} ${num}`
}
  return <div>
    <CartItem addNumber={addNumber}/>
  </div>;
}
