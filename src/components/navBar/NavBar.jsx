import React from "react";
import Navitem from './NavItem'

export default function NavBar() {
  let student = { name: "Andrea" };
  const fruits = ["apple", "banana", "kiwi"];
  

  return <div>
    <Navitem  student={student.name} fruits={fruits} />
  </div>;
}
