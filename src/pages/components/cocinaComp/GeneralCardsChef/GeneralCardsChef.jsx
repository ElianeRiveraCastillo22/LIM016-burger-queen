import { useState, useEffect } from "react";

import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../../../../firebase/config";

import AllCardsChef from "./AllCardsChef";

export const GeneralCardsChef = ({ orderByID }) => {

  const [allOrder, setAllOrder] = useState([]);
  const [filterOrders, SetFilterOrders] = useState([]);
  // const [currentState, SetCurrentState] = useState("generado");

  useEffect(
    () =>
      onSnapshot(collection(db, "order"), (snapshot) =>
        setAllOrder(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );

  useEffect(() => {
    SetFilterOrders(
      allOrder.filter((orders) => orders.stateOrder === "proceso")
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allOrder]);

  return (
    <div className="MenuCardsChef">
      <div className="gridBtnChef">
        Pedidos en proceso
      </div>

      <AllCardsChef filterOrders={filterOrders} orderByID={orderByID} />
    </div>
  );
};

