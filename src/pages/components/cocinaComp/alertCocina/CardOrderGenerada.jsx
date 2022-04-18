import { FunctionTime } from "../../../utils/FunctionTime";

export const CardOrderGenerada = ({ orderGenerada, orderByID }) => {
  const IdOrder = orderGenerada.id;

  const { itemsOrder, startTime } = orderGenerada;
  //     const { itemsOrder, stateOrder } = orderGenerada;

  const handleOrder = () => {
    orderByID(IdOrder);
  };
  return (
    <div className="backgroundCardAlertCocina" onClick={handleOrder}>
      <div className="cardAlertCocina">
        <div className="detailsAlertCocina">
          {itemsOrder.map((item) => (
           <p key={item.idItemOrder}>○ {item.nameItemOrder}</p>
          ))}
        </div>
        <div className="footerCardChef">
          <span className="descriptionCampo"> Tiempo:</span>
          <p> {FunctionTime(startTime)}</p>
        </div>
      </div>
    </div>
  );
};
