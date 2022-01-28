import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const ProductCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.productReducer.cart);
  //   console.log("cart=====>", cartItems);
  return (
    <div>
      <h2> product Cart</h2>
      <div className="cards-parent">
        {cartItems.map((item) => {
          return (
            <div className="cards">
              <img className="image" src={item.image} alt="" />
              <h3>{item.title.substr(0, 20) + "..."}</h3>
              <h4>Price: ${item.price}</h4>
              <button
                onClick={() => dispatch({ type: "Remove_Product", data: item })}
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductCart;
