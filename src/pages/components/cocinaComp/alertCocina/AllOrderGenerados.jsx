import { CardOrderGenerada } from "./CardOrderGenerada";

export const AllOrderGenerados = ({ orderByID, ordersGeneradas }) => {
  return (
    <div className="allOrderGenerados">
      <div className="descriptionStateAlertCocina">
        Pedidos pendientes
      </div>
      <div className="contentCardAlertCocina">
        {ordersGeneradas.map((orderGenerada) =>
            orderGenerada.itemsOrder?.length >= 0 ? (
            <CardOrderGenerada
              orderGenerada={orderGenerada}
              orderByID={orderByID}
              key={orderGenerada.id}
            />
          ) : null
        )}
      </div>
    </div>
  );
};
