import { useState } from "react";

export const DetailsOrderCard = ({ details, checkHandler,checkboxes }) => {

  const [stateItem, setStateItem] = useState(false)

  const {
    extraOrder1,
    extraOrder2,
    idItemOrder,
    nameItemOrder,
    noteOrder,
    numItemOrder,
    optionOrder,
    // stateItem,
  } = details;

  const handleChange = (e) => {
    const estado = e.target.checked;
    setStateItem(estado);
    checkHandler({ ...checkboxes, [idItemOrder]:estado });
  };

  return (
    <div className="DetailsOrderCard">
        <input
          type="checkbox"
          checked={stateItem}
          onChange={handleChange}
        />

      <p className="num" >{numItemOrder}</p>
      <div>
        <h3 onClick={handleChange}>{nameItemOrder}</h3>
        <p>Detalle:{optionOrder}</p>
        <p>
          {extraOrder1}
          {extraOrder2}
        </p>
        <p>Nota: {noteOrder}</p>
      </div>
    </div>
  );
};
