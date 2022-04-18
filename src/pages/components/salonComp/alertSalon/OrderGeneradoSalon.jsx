
import { onSnapshot,collection } from "firebase/firestore";
import { useState,useEffect } from "react";
import {db} from "../../../../firebase/config"
import AllOrderCompletado from "./AllOrderCompletado";
const SectionShowAlert=({OrderById})=>{
const [listOrdersAlert, setListOrdersAlert] = useState([]);
const [filterOrderCompletado, setFilterOrderCompletado ]=useState([]);

    useEffect(
        () =>
        onSnapshot(collection(db, "order"), (snapshot) =>
            setListOrdersAlert(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        ),
        []
    );
    useEffect(()=>{
        setFilterOrderCompletado(listOrdersAlert.filter((stateGenerado)=>stateGenerado.stateOrder === "completado"))

    },[listOrdersAlert])

    return(
           <AllOrderCompletado 
                filterOrderCompletado={filterOrderCompletado}
                OrderById={OrderById}
            />
           )
        }
export default SectionShowAlert;