import { FunctionTime } from "../../../utils/FunctionTime";

export const HistoryCard = ({ orderHistory }) => {
  const { itemsOrder, startTime,numOrder,nameOrder } = orderHistory;
  return (
    <div className="backgroundCardHistoryCocina">
      <div className="cardHistoryCocina">
        <div className="headerOrderHistoryCocina">
          <p><span># de mesa: </span>{numOrder}</p>
          <p><span>nombre:</span> {nameOrder}</p>
        </div>
        <div className="detailsHistoryOrderCocina">
          {itemsOrder.map((item) => (
            <p key={item.idItemOrder}>○ {item.nameItemOrder}</p>
          ))}
        </div>
        <p className="totalTime"><span>Tiempo:</span> {FunctionTime(startTime)} </p>
      </div>
    </div>
  );
};
