import React from "react";
import { useRecoilValue } from "recoil";

import { theBill } from "./read-only-atoms";

const TheBill = () => {
  const bill = useRecoilValue(theBill);
  return (
    <table width="100%">
      <tr>
        <th>Name</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Total</th>
      </tr>
      {bill.items.map((item) => (
        <tr key={item.name}>
          <th>{item.name}</th>
          <th>${item.price}</th>
          <th>{item.quantity}</th>
          <th>${item.total}</th>
        </tr>
      ))}
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td>${bill.total}</td>
      </tr>
    </table>
  );
};

export default TheBill;
