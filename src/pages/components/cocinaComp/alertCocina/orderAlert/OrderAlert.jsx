import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../../../firebase/config";
import { DetailsAlertCocina } from "./DetailsAlert";
import { FunctionTime } from "../../../../utils/FunctionTime";


export const OrderAlert = ({ newOrder, orderAlertID,setEstilo }) => {

  const { stateOrder, startTime, itemsOrder,numOrder} = newOrder;
  const handleState = async() => {
    const orderRef = doc(db, "order", orderAlertID);
    await updateDoc(orderRef, {
      stateOrder: "proceso",
   })
     .then(() => {
       // setEstilo("buttonStateCompletado");
        alert("Pedido procesado");
     });
  }

  return (
    <div className="detailsAlert">
      <div className="headerDescriptionOrder">
        <p><span className="headerSpan">Estado: </span>{stateOrder}</p>
        <p><span className="headerSpan">Numero de orden: </span>{numOrder}</p>
        <p><span className="headerSpan">Tiempo: </span> {FunctionTime(startTime)}</p>
      </div>
      <hr />
      <div className="flexOrderDescriptionAlert">
        <div className="gridTitleOrderAlert">
          <p className="unidad">Cantidad</p>
          <p className="description">Description</p>
        </div>
        <div className="generalDeilsOrderCardAlert">
          {itemsOrder.map((details) => (
            <DetailsAlertCocina details={details} key={details.idItemOrder} />
          ))}
        </div>
        <div className="contentEntregarPedidoAlert">
          <button className="entregarPedidoAlert" onClick={handleState}>
            Preparar
          </button>
        </div>
      </div>
    </div>
  )
};
