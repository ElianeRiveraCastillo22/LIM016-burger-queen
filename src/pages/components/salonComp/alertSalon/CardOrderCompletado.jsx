import { FunctionTime } from "../../../utils/FunctionTime";
const CardOrderCompletado=({OrderById,orderCompletado})=>{

    const IdOrder = orderCompletado.id;

    const { itemsOrder, startTime } = orderCompletado;

    const handleOrder = () => {
        OrderById(IdOrder);
    };
    return(
        <div className="backgroundCardAlertSalon" onClick={handleOrder}>
        <div className="cardAlertSalon">
          <div className="detailsAlertCocina">
            {itemsOrder.map((item) => (
              <p key={item.idItemOrder}>○ {item.nameItemOrder}</p>
            ))}
          </div>
      </div>
      </div>
    )
}
export default CardOrderCompletado;