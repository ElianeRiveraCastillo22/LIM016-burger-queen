import { useState, useEffect } from "react";

import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../../../../firebase/config";

// import BtnOrderChef from "./BtnOrderChef";
import { AllOrderGenerados } from "././AllOrderGenerados";

export const OrderGenerados = ({ orderByID }) => {
  const [allOrder, setAllOrder] = useState([]);
  const [ordersGeneradas, SetOrdersGeneradas] = useState([]);
  // const [currentState, SetCurrentState] = useState("generado");

  useEffect(
    () =>
      onSnapshot(collection(db, "order"), (snapshot) =>
        setAllOrder(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );

  useEffect(() => {
    SetOrdersGeneradas(
      allOrder.filter((orders) => orders.stateOrder === "generado")
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allOrder]);

  return (
    <div className="bodyAlertCocina">
      <div className="descriptionStateAlertCocina">
        Pedidos pendientes
      </div>

      <AllOrderGenerados ordersGeneradas={ordersGeneradas} />
    </div>
  );
};

