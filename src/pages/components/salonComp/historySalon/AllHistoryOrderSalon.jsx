import { collection,onSnapshot } from "firebase/firestore";
import { db } from "../../../../firebase/config";
import BtnsHistory from "./BtnsHistory";
import SectionShowHistory from "./SectionShowHistory";
import { useState,useEffect } from "react";

const AllHistoryOrderSalon=()=>{
    const [listOrderHistory, setListOrdersHistory] = useState([]);
    const [filterOrderHistory, setFilterOrderHistory ]=useState([]);
    const [currentStateHistory,setCurrentStateHistory]=useState("all");

    useEffect(
      () =>
        onSnapshot(collection(db, "order"), (snapshot) =>
        setListOrdersHistory(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        ),
      []
    );

    useEffect(()=>{
      if(currentStateHistory === "all"){
        setFilterOrderHistory(listOrderHistory)
      }else{
        setFilterOrderHistory(listOrderHistory.filter((stateGenerado)=>stateGenerado.stateOrder === currentStateHistory))
      }

       // eslint-disable-next-line react-hooks/exhaustive-deps
      },[currentStateHistory, listOrderHistory])
      return(
        <>
          <BtnsHistory setCurrentStateHistory={setCurrentStateHistory}/>
          <SectionShowHistory filterOrderHistory={filterOrderHistory}/>
        </>

      )
}
export default AllHistoryOrderSalon;