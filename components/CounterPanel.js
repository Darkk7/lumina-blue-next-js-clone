import React from 'react';
import "../styles/counter-panel.css";

const CounterPanel = () => {
  return (
    <div className="panel">
      <div className="stats">
        <div className="statItem">
          <h3> Sunglasses Stock </h3>
          <p>1000</p>
        </div>
        <div className="statItem">
          <h3> Number of Brands </h3>
          <p> 92 </p>
        </div>
        <div className="statItem">
          <h3> Trading Since </h3>
          <p> 2020 </p>
        </div>
        <div className="statItem">
          <h3> Number of Patients </h3>
          <p>12200</p>
        </div>
      </div>
    </div>
  );
};

export default CounterPanel;