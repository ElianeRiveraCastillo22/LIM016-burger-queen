import { useRef, useState } from "react";

const Hamburguesa = require("../../../../img/menu/menu2/burgerDouble_V1.png");

const ItemOrder = ({ dish }) => {

  const { name, price } = dish;
  const refTotalPrice=useRef();
  const refCantidad=useRef();
  let [num, setNum] = useState(1);
  const totalPrice = price * num;
  const aumentar = (e) => {
    console.log(refTotalPrice.current.innerHTML)
    console.log(refCantidad.current.innerHTML)
    e.preventDefault();
    setNum(++num);
  };
  const disminuir = (e) => {
    console.log(refTotalPrice.current.innerHTML)
    /* console.log(refCantidad.current.innerHTML) */
    e.preventDefault();
    if (num === 1) {
      setNum(1);
    } else {
      setNum(--num);
    }
  };

  const deleteItem = (e) => {
    e.preventDefault();
    e.target.parentNode.parentNode.parentNode.remove();
  };
  const valueTotalPrice = () => {
    console.log(refTotalPrice)
  };
        return (
          <div className="itemOrderBox">
            <div className="descriptionOrderItem">
              <div className="infoDish">
                <div className="photo">
                  <img src={Hamburguesa} alt="Food" />
                </div>
                <div className="info">
                  <p>{name}</p>
                  <p>$ {price}.00</p>
                </div>
              </div>
              <div className="noteOrder">
                <textarea placeholder="Indicaciones para el chef" />
              </div>
            </div>

            <div className="buttonsOrderBox">
              <div className="deleteOrder">
                <button className="fa-regular fa-trash-can trash" onClick={deleteItem}/>
              </div>
              <div className="secondRowButtons">
                <p onChage={valueTotalPrice} ref={refTotalPrice}>{totalPrice}</p>
              </div>
              <div className="firstRowButtons">
                <button
                  className="fa-regular fa-square-plus"
                  onClick={aumentar}
                />
                <p ref={refCantidad}>{num}</p>
                <button
                  className="fa-regular fa-square-minus"
                  onClick={disminuir}
                />
              </div>
            </div>
          </div>
        );
};

export default ItemOrder;
