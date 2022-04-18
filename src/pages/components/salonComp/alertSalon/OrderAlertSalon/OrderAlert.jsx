import DetailsSalon from "./DetailsSalon";
import { FunctionTime } from "../../../../utils/FunctionTime";
import { doc,updateDoc } from "firebase/firestore";
import { db } from "../../../../../firebase/config"
const OrderAlert=({newOrderList,orderAlertIdSalon})=>{

    const {
        stateOrder,
        startTime,
        itemsOrder,
        numOrder
    } = newOrderList;

    const handleState = async() => {
        const orderRef = doc(db, "order", orderAlertIdSalon);
        await updateDoc(orderRef, {
          stateOrder: "EntregadoAlUsuario",
        })
       .then(() => {
        // setEstilo("buttonStateCompletado");
         alert("Entregar pedido al usuario");
        });
    }
    console.log(stateOrder)
    return(
        <div className="detailsAlert">
        <div className="headerDescriptionOrder">
            <p><span>Estado: </span>{stateOrder}</p>
            <p><span>Numero de orden:</span>{numOrder}</p>
            <p><span>Tiempo: </span> {FunctionTime(startTime)}</p>
        </div>
        <hr />
        <div className="flexOrderDescriptionAlert">
            <div className="gridTitleOrderAlert">
                <p className="unidad">Unidad</p>
                <p className="description">Description</p>
            </div>
            <div className="generalDeilsOrderCardAlert">
            {itemsOrder.map((details) => (
                <DetailsSalon details={details} key={details.idItemOrder} />
            ))}
            </div>
            <div className="contentEntregarPedidoAlert">
            <button
                className="entregarPedidoAlert" 
                onClick={handleState}
            >
                Entregar pedido
            </button>
            </div>
        </div>
    </div>
    )
     }
export default OrderAlert;

