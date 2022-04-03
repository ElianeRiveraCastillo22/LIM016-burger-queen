import { doc, updateDoc } from "firebase/firestore";
import {db} from "../../../../firebase/config";
import { useEffect, useState } from "react";

import { DetailsOrderCard } from "./DetailsOrderCard";


const OrderCard = ({ orderCompleto, orderID, estilo, setEstilo }) => {
  const { numOrder, stateOrder, itemsOrder } = orderCompleto;

  const [checkboxes, setCheckboxes] = useState({});

  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const cantidadItems = itemsOrder.length;
    const cantidadChecks = Object.keys(checkboxes).length;

    if (cantidadItems === cantidadChecks) {
      const laVerdad = Object.values(checkboxes).every(
        (listo) => listo === true
      );
      setCompleted(laVerdad);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkboxes]);

  // const handleState = async () => {
  //   const orderRef = doc(db, "order", orderID);
  //   await updateDoc(orderRef, {
  //     stateOrder: "proceso",
  //   });
  // };

  const handleStateEnd = async () => {
    const orderRef = doc(db, "order", orderID);
    await updateDoc(orderRef, {
      stateOrder: "completado",
    }).then(() => {
      // setEstilo("buttonStateCompletado");
      alert("Pedido entregado")
    });
  };

  return (
    <div className="ContainerOrderCard">
      <div className="headerDescriptionOrder">
        <div className="orderState orderStateProceso">
          <p>En {stateOrder}</p>
        </div>

        <p>Numero de orden: {numOrder}</p>
        <p> Tiempo: 0:10:00 </p>
      </div>
      <hr />
      <div className="flexOrderDescription">
        <div className="gridTitleOrder">
          <p className="unidad">Unidad</p>
          <p className="description">Description</p>
        </div>
        <div className="GeneralDeilsOrderCard">
          {itemsOrder.map((details) => (
            <DetailsOrderCard
              details={details}
              key={details.idItemOrder}
              checkHandler={setCheckboxes}
              checkboxes={checkboxes}
            />
          ))}
        </div>
        <div className="contentEntregarPedido">
          <button
            disabled={!completed}
            onClick={handleStateEnd}
            className="entregarPedido"
          >
            Entregar pedido
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;


  // const [estilo, setEstilo] = useState("buttonStatePendiente");

  // useEffect(() => {
  //   const estado = orderCompleto.stateOrder;

  //   console.log(estado);
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