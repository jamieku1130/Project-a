import React from "react";

const Ol = ({ orderList }) => (
  <ol style={{ marginLeft: "30px", fontWeight: 700 }}>
    {orderList.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ol>
);

export default Ol;
