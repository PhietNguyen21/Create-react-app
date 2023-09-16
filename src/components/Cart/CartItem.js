import { CardAdd } from "iconsax-react";
import React from "react";
import { useDispatch } from "react-redux";
import { ADD_CART, ADD_CART_REDUX } from "../../redux/action/addCartAction";

const CartItem = ({ card }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <div className="img">
          <img src={card?.img} alt="" style={{ width: 160, height: 200 }} />
        </div>
        <div>
          <div className="Card-content">
            <div className="price">Price : {card?.price}$</div>
          </div>
          <div className="btn-add">
            <CardAdd
              onClick={() => {
                dispatch(ADD_CART_REDUX());
              }}
              size="32"
              color="#FF8A65"
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
