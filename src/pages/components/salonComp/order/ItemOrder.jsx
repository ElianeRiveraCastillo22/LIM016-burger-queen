import { useEffect, useState } from "react";
// import { useOptionsContext } from "../../../context/OptionDish";
import { OptionsDish } from "./OptionsDish";

const ItemOrder = ({ dish, addItems, deleteItem }) => {
  const { id, name, img, price } = dish;
  const [stateExtra1, setStateExtra1] = useState(false);
  const [stateExtra2, setStateExtra2] = useState(false);

  const [item, setItem] = useState({
    extraOrder1: "-",
    extraOrder2: "-",
    idItemOrder: id,
    nameItemOrder: name,
    noteOrder: "",
    numItemOrder: 1,
    optionOrder: "",
    priceItemOrder: price,
    priceTotalItemOrder: price,
  });

  const handleItem = (propiedad, valor) => {
    // if (typeof valor === "number") {
    if (propiedad === "numItemOrder") {
      const currentTotalPrice = valor * price;

      setItem({
        ...item,
        numItemOrder: valor,
        priceTotalItemOrder: currentTotalPrice,
      });
    } else if (propiedad === "optionOrder") {
      // console.log(valor);
      setItem({
        ...item,
        optionOrder: valor,
      });
    } else if (propiedad === "extraOrder1") {
      setItem({
        ...item,
        extraOrder1: valor,
      });
    } else if (propiedad === "extraOrder2") {
      setItem({
        ...item,
        extraOrder2: valor,
      });
    } else {
      setItem({
        ...item,
        noteOrder: valor,
      });
    }
  };

  useEffect(() => {
    addItems(item);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    item,
    item.numItemOrder,
    item.noteOrder,
    item.optionOrder,
    item.extraOrder1,
    item.extraOrder2,
  ]);

  const aumentar = (e) => {
    e.preventDefault();

    const currentAccount = ++item["numItemOrder"];

    handleItem("numItemOrder", currentAccount);
  };

  const disminuir = (e) => {
    e.preventDefault();
    if (item["numItemOrder"] === 1) {
      handleItem("numItemOrder", item["numItemOrder"]);
    } else {
      const currentAccount = --item["numItemOrder"];

      handleItem("numItemOrder", currentAccount);
    }
  };

  const handleNote = (e) => {
    const currentNote = e.target.value;

    handleItem("noteOrder", currentNote);
  };
  const changeSelect = (e) => {
    const currentOption = e.target.value;
    // console.log(currentOption);
    handleItem("optionOrder", currentOption);
  };

  const changeChecked1 = (e) => {
    const extra1 = e.target.checked;

    setStateExtra1(extra1);
    if (extra1 === true) {
      handleItem("extraOrder1", "huevo");
    } else {
      handleItem("extraOrder1", "-");
    }
  };
  const changeChecked2 = (e) => {
    const extra2 = e.target.checked;
    setStateExtra2(extra2);

    if (extra2 === true) {
      handleItem("extraOrder2", "queso");
    } else {
      handleItem("extraOrder2", "-");
    }
  };

  return (

    <div className="itemOrderBox">

      <div className="descriptionOrderItem">
        <div className="infoDish">
          <div className="photo">
            <img src={img} alt="Food" />
          </div>
          <div className="info">
            <p>{name}</p>
            <p>S/. {price}.00</p>
            {name === "Hamburguesa clásica" || name === "Hamburguesa doble" ? (
              <OptionsDish
                changeSelect={changeSelect}
                changeChecked1={changeChecked1}
                stateExtra1={stateExtra1}
                changeChecked2={changeChecked2}
                stateExtra2={stateExtra2}
              />
            ) : null}
          </div>
        </div>
        <div className="noteOrder">
          <textarea
            placeholder="Indicaciones"
            onChange={handleNote}
          />
        </div>
      </div>
      <div className="buttonsOrderBox">
        <div className="deleteOrder">
          <button
            className="fa-regular fa-trash-can trash"
            onClick={(e)=>deleteItem(id, e)}
          />
        </div>
        <div className="secondRowButtons">
          <p>S/. {item["priceTotalItemOrder"]}.00 </p>
        </div>
        <div className="firstRowButtons">
          <button className="fa-regular fa-square-minus" onClick={disminuir} />
          <p>{item["numItemOrder"]}</p>
          <button className="fa-regular fa-square-plus" onClick={aumentar} />
        </div>
      </div>
    </div>
  );
};

export default ItemOrder;
