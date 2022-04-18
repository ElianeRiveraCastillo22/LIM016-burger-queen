import { useEffect } from "react";
import ItemOrder from "./ItemOrder";

const TotalItems = ({
  listDishes,
  infoOrder,
  addOrder,
  totalOrder,
  setTotalOrder,
  arrayItemsOrder,
  setArrayItemsOrder,
  deleteItem,
}) => {
  const { nameOrder, numOrder } = infoOrder;

  useEffect(() => {
    addOrder({
      endTime:"",
      itemsOrder: arrayItemsOrder,
      nameOrder: nameOrder,
      numOrder: numOrder,
      startTime:Date.now(),
      stateOrder: "generado",
      totalPriceOrder: totalOrder,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [arrayItemsOrder, nameOrder, numOrder, totalOrder]);

  const addItems = (itemOrder) => {

        const {
          idItemOrder,
          extraOrder1,
          extraOrder2,
          noteOrder,
          numItemOrder,
          optionOrder,
          priceTotalItemOrder,
        } = itemOrder;

    const foundItem = arrayItemsOrder.find(
      (item) => item.idItemOrder === idItemOrder
    );

    // console.log(foundItem);

    if (foundItem !== undefined) {
      const newArray = arrayItemsOrder.map((item) =>
        item.idItemOrder === idItemOrder
          ? {
              ...item,
              noteOrder: noteOrder,
              numItemOrder: numItemOrder,
              priceTotalItemOrder: priceTotalItemOrder,
              optionOrder: optionOrder,
              extraOrder1: extraOrder1,
              extraOrder2: extraOrder2,
            }
          : item
      );
      setArrayItemsOrder(newArray);
    } else {
      setArrayItemsOrder([...arrayItemsOrder, itemOrder]);
    }
  };

  useEffect(() => {
    setTotalOrder(
      arrayItemsOrder.reduce(
        (total, value) => total + value.priceTotalItemOrder,
        0
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [arrayItemsOrder]);

  return (
    <>
      <div className="itemsTotalOrder">
        {listDishes.map((dish) => (

          <ItemOrder
            dish={dish}
            addItems={addItems}
            deleteItem={deleteItem}
            key={dish.id}
          />
        ))}

      </div>
      <hr/>
      <div className="priceOrder">
        <p className="item1">Total: </p>
        <p className="item2">S/. {totalOrder}.00</p>
      </div>

    </>
  );
};

export default TotalItems;
