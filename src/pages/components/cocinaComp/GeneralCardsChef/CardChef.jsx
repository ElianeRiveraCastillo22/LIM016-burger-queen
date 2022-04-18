import { FunctionTime } from "../../../utils/FunctionTime";

const CardChef = ({ filterOrder, orderByID }) => {
  console.log(orderByID)
  const IdOrder = filterOrder.id;
console.log(filterOrder.stateOrder)
  const { itemsOrder, startTime } = filterOrder;

  const handleOrder = () => {
    console.log(IdOrder)
    return orderByID(IdOrder);
  };

  return (
    <div className="backgroundCardCocina">
      <div className="cardCocina" onClick={handleOrder}>
        <div className="detailsCocina">
          {itemsOrder.map((item) => (
            <p key={item.idItemOrder}>○ {item.nameItemOrder}</p>
          ))}
        </div>
        <div className="footerOrderSalon">
          <span className="descriptionCampo"> Tiempo:</span>
          <p> {FunctionTime(startTime)} </p>
        </div>
      </div>
    </div>
  );
};
export default CardChef;
