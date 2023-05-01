import React from "react";

export default function CartItem({addNumber}) {

  const result = addNumber('john',2)
  return <div>
    {result}
    
     </div>;
}
