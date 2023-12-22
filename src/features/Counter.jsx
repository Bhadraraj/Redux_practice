import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// useSelector: select spefic information from the store ;
// useDispatch : to  tell about the action that happens
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from "./counter/counterSlice";


const Counter = () => {

  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState(0);
  const addValue = Number(incrementAmount) || 0;
  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };

  return (
    <div>
      <section className="counterSection">
        <p className="displayCounts">Amount in Wallet : {count}</p>

        <input
          type="text"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <div className="btnSec">
          <button className="incrBtn" onClick={() => dispatch(increment())}>
            Add Rs.1
          </button>

          <button className="decBtn" onClick={() => dispatch(decrement())}>
            Remove Rs.1
          </button>
        </div>
        <div className="btnSec2">
          <button
            className="addAmount"
            onClick={() => dispatch(incrementByAmount(addValue))}
          >
            Add Bulk Amount
          </button>
          <button className="resetBtn" onClick={resetAll}>
            Reset Amount
          </button>
        </div>
      </section>
    </div>
  );
};

export default Counter;