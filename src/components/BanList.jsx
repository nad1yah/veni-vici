import React from "react";

function BanList({ banList }) {
  return (
    <div className="ban-list">
      <h2>Ban List:</h2>
      <ul>
        {banList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default BanList;