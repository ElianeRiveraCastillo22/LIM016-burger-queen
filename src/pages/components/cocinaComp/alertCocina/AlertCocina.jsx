import { useEffect, useState } from "react";

import { getDoc, doc } from "firebase/firestore";
import { db } from "../../../../firebase/config";

import NavCocina from "../navCocina/NavCocina";
import { OrderGenerados } from "./OrderGenerados";
import { OrderAlert } from "./orderAlert/OrderAlert";

import { Vacio2 } from "./orderAlert/Vacio2";

export const AlertCocina = () => {

  const [orderAlertID, setOrderAlertID] = useState("");
  const [newOrder, setNewOrder] = useState({});

  const orderByID = (id) => {
    return setOrderAlertID(id);
  };

  const getOrderByID = async (id) => {

    const orderRef = doc(db, "order", id);
    const order = await getDoc(orderRef);

    return order.data();
  };

  useEffect(() => {
    async function fetchOrder() {
      const orderByID = await getOrderByID(orderAlertID);

      setNewOrder(orderByID);
    }
    fetchOrder();
  }, [orderAlertID]);

  // const [estilo, setEstilo] = useState("buttonStatePendiente");

  // useEffect(() => {
  //   const estado = orderCompleto.stateOrder;

  //   const stateChange = () => {
  //     switch (estado) {
  //       case "generado":
  //         return setEstilo("buttonStatePendiente");

  //       case "proceso":
  //         return setEstilo("buttonStateProceso");

  //       default:
  //         break;
  //     }
  //   };
  //   stateChange();
  // }, [orderCompleto]);

  const verificacion = Object.keys(newOrder).length === 0;

  return (
    <div className="contentCocina">
      <nav className="navCocina">
        <NavCocina />
      </nav>
      <div className="bodyAlertCocina">
        <OrderGenerados orderByID={orderByID} />

        {verificacion === false ? (
          <OrderAlert
            newOrder={newOrder}
            orderAlertID={orderAlertID}
            // estilo={estilo}
            // setEstilo={setEstilo}
          />
        ) : (
          <Vacio2 />
        )}
      </div>
    </div>
  );
};
