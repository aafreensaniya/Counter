import React, { useState } from "react";
import { Dec } from "./Dec";
import { Inc } from "./Inc";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const Incr = () => {
    setCount(count + 1);
  };
  const Decr = () => {
    count > 0 && setCount(count - 1);
  };
  return (
    <React.Fragment>
      <Inc Incr={Incr} />
      <h1>{count} </h1>
      <Dec Decr={Decr} />
    </React.Fragment>
  );
};
