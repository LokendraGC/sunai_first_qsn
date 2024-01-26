import React, { useContext } from 'react'
import { AppContext } from "../App";

const Order = () => {
    let {Order} = useContext(AppContext);

  return (
    <div>Order {Order++}</div>
  )
}

export default Order