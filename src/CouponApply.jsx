import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { applyCoupon } from "./Store";


function CouponApply() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

 

  const handleApply = () => {
    dispatch(applyCoupon(input));
  };

  return (
    <>
      <input
        type="text"placeholder="Enter coupon"value={input}onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={handleApply}>Apply</button>

      
    </>
  );
}

export default CouponApply;
