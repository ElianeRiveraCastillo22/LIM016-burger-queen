import { useState } from "react";

import TotalItems from "./TotalItemsOrder";
import BtnSubmitOrder from "./BtnSubmitOrder";

export const Order = ({ listDishes, setListDishes}) => {

  const initialOrderInfo = {
    nameOrder: "",
    numOrder: "",
    stateOrder: "generado",
  };
  /*orden*/
  const initialOrder = {
    endTime: 0,
    itemsOrder: [],
    nameOrder: "",
    numOrder: 0,
    startTime: 0,
    stateOrder: "generado",
    totalPriceOrder: 0,
  };

  const [infoOrder, setinfoOrder] = useState(initialOrderInfo);
  const [order, setOrder] = useState(initialOrder);
  const [totalOrder, setTotalOrder] = useState(0);
  const [arrayItemsOrder, setArrayItemsOrder] = useState([]);

  const addOrder = (newOrder) => {
    setOrder(newOrder);
  };

  const handleChange = (e) => {
    setinfoOrder({
      ...infoOrder,
      [e.target.name]: e.target.value,
    });
  };

  const clearOrder = () => {
    setListDishes([]);
    setOrder(initialOrder);
    setinfoOrder(initialOrderInfo);
    setTotalOrder(0);
    setArrayItemsOrder([]);
  };

  const deleteItem = (id, e) => {
    e.preventDefault();
    e.target.parentNode.parentNode.parentNode.remove();

    const newArrayItemsOrder = arrayItemsOrder.filter(
      (item) => item.idItemOrder !== id
    );

    setArrayItemsOrder(newArrayItemsOrder);
  };

  return (
    <>
      <form className="formOrder">
        <div className="headerOrder">
          <BtnSubmitOrder order={order} clearOrder={clearOrder} />
          <div className="infoOrder">
            <input
              name="nameOrder"
              placeholder="Nombre del cliente"
              type="text"
              className="nameOrder"
              onChange={handleChange}
              value={infoOrder.nameOrder}
            />
            <input
              name="numOrder"
              placeholder="Número de mesa"
              type="text"
              className="numOrder"
              onChange={handleChange}
              value={infoOrder.numOrder}
            />
          <hr/>
          </div>
        </div>
        <TotalItems
          listDishes={listDishes}
          infoOrder={infoOrder}
          addOrder={addOrder}
          totalOrder={totalOrder}
          setTotalOrder={setTotalOrder}
          arrayItemsOrder={arrayItemsOrder}
          setArrayItemsOrder={setArrayItemsOrder}
          deleteItem={deleteItem}
        />
      </form>
    </>
  );
};
