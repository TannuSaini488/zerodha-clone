import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { useAuth } from "../hooks/useAuth";

const Orders = () => {
  const [allOrders, SetAllOrders] = useState([]);
  let { user } = useAuth();
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      // .get("https://zerodha-clone-backend-8nlf.onrender.com/orders/index", {
      .get("https://zerodha-clone-backend-itcc.onrender.com/orders/index", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        SetAllOrders(res.data);
      });
  }, [allOrders]);

  return (
    <>
      <h3 className="title">Orders ({allOrders.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Name</th>
            <th>Qty.</th>
            <th>Price</th>
            <th>Mode</th>
          </tr>

          {allOrders.map((stock, index) => {
            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{stock.mode}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Orders;
