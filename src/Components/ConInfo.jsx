// normal function can be hoisted. for dispaly purpose. there is (this) keyword
// arrow function cant be hoisted. there is no need to binding in arrow function
import React from "react";

export const ConInfo = () => {
  return (
    <div className="sub">
      <h1> Conatct Info</h1>
      <h3> Mob : 8888445566</h3>
      <h3> email : aafreen123@gmail.com </h3>
      <h3> emergency contact : 7350401280</h3>
    </div>
  );
};
