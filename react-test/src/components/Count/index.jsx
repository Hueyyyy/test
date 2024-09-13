import { useState } from "react";
import "./Count.style.css";

const Count = () => {
  const [count, setCount] = useState(0);

  // todo:dasdasd
  // warn:dasdas
  // fixme:
  // review:sdasdas=
  // feature: hdiashda

  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleIncrease = () => {
    setCount(count + 1);
  };

  return (
    <div className="container">
      <h1 className="count">{count}</h1>
      <div className="btn-group">
        <button className="decrease" onClick={() => handleDecrease()}>
          Decrease
        </button>
        <button className="reset" onClick={() => handleReset()}>
          Reset
        </button>
        <button className="increase" onClick={() => handleIncrease()}>
          Increase
        </button>
      </div>
    </div>
  );
};

export default Count;
