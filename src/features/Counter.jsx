import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
  startLoading,
  stopLoading,
} from "./counter/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const loading = useSelector((state) => state.counter.loading); // Loading state
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(0);
  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  }

  const addBulkAmount = () => {
    dispatch(startLoading()); 
    dispatch(incrementByAmount(addValue));
    setTimeout(() => {
      dispatch(stopLoading()); 
    }, 300);
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
            onClick={addBulkAmount}
            disabled={loading} // Disable button during loading
          >
            {loading ? "Adding..." : "Add Bulk Amount"}
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
