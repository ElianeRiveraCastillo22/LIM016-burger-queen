import NavSalon from "../navSalon/NavSalon";
import {getDoc,doc } from "firebase/firestore";
import { db } from "../../../../firebase/config";
import { useState,useEffect } from "react";
import DetailsSalon from "./OrderAlertSalon/DetailsSalon";
import OrderGeneradoSalon from "./OrderGeneradoSalon.jsx";
import { async } from "@firebase/util";
import OrderAlert from "../alertSalon/OrderAlertSalon/OrderAlert"
import VacioAlert from "../alertSalon/OrderAlertSalon/vacioAlert"
export const AlertSalon = () => {
  const [orderAlertIdSalon, setOrderAlerIdSalon]=useState("")
  const [newOrderList, setNewOrderList]= useState({})

  const OrderById=(id)=>{
    return setOrderAlerIdSalon(id)
  }
  
  const getOrderId= async(id)=>{
    const orderRef =doc(db, "order",id);
    const order = await getDoc(orderRef)
    return order.data()
  }

  useEffect(()=>{
  async function fetchOrder(){
    const orderByID= await getOrderId(orderAlertIdSalon)
    setNewOrderList(orderByID);
  }
  fetchOrder();

  },[orderAlertIdSalon])
  const verificacion = Object.keys(newOrderList).length===0;


  /*   const [listOrdersAlert, setListOrdersAlert] = useState([]);
 
  const [filterOrder, setFilterOrder ]=useState([]);

  useEffect(
    () =>
      onSnapshot(collection(db, "order"), (snapshot) =>
        setListOrdersAlert(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );
  useEffect(()=>{
      setFilterOrder(listOrdersAlert.filter((stateGenerado)=>stateGenerado.stateOrder === "generado"))
    },[listOrdersAlert])
    console.log(filterOrder) */
  return (
    <div className="salonGeneral">
      <div className="headerSalon sectionA">
        <NavSalon />
      </div>
      <div className="bodyAlertSalon">
        <OrderGeneradoSalon OrderById={OrderById} />
        {verificacion === false ? (
          <OrderAlert
          newOrderList={newOrderList}
          orderAlertIdSalon={orderAlertIdSalon}
            // estilo={estilo}
            // setEstilo={setEstilo}
          />
        ) : (
          <VacioAlert/>
        )}
      </div>
    </div>
  );
};
