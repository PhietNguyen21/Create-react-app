import React from "react";

import { data } from "./../../data/data";
import CartItem from "./CartItem";

const ListCard = () => {
  const DT = [...data];

  return (
    <>
      <div className="listCard">
        {DT.map((item, index) => {
          return <CartItem key={`card-${index}`} card={item} />;
        })}
      </div>
    </>
  );
};

export default ListCard;
