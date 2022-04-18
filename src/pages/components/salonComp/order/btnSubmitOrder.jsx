import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../../firebase/config";

import Swal from "sweetalert2";

const BtnSubmitOrder = ({ order, clearOrder }) => {
  const { nameOrder, numOrder, totalPriceOrder } = order;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nameOrder.trim() && numOrder === 0) {
      return Swal.fire({
        title: "¡Cuidado!",
        text: "Complete la orden",
        icon: "warning",
      });
    } else if ((!nameOrder.trim() || numOrder === 0)) {
      return Swal.fire({
        title: "¡Cuidado!",
        text: "La orden tiene campos vacios",
        icon: "warning",
      });
   } else if (totalPriceOrder === 0) {
     return Swal.fire({
       title: "¡Cuidado!",
       text: "Debes ingresar un plato",
       icon: "warning",
     });
   } else {
     try {
       try {
         await addDoc(collection(db, "order"), order);
          return Swal.fire({
            title: "Éxito!",
            text: "El pedido fue enviado",
            icon: "success",
          });
       } finally {
         clearOrder();
       }
     } catch (error) {
       console.log(error);
        return Swal.fire({
          title: "¡Error!",
          text: "Ocurrió un error con la orden",
          icon: "error",
        });
     }
   }
  };



  return (
    <button className="btnSubmitOrder" type="submit" onClick={handleSubmit}>
      Enviar pedido
    </button>
  );
};
export default BtnSubmitOrder;
