import React from "react";

export default function NavItem({student,fruits}) {
  return <div>
    <p>{student}</p>
     {fruits.map(element => {
      return <p> {element}</p>
    })}
  </div>;
}
