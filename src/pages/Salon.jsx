import { useEffect, useState } from "react";

import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";

import NavSalon from "../pages/components/salonComp/nav/NavSalon";
import { Order } from "./components/salonComp/order/Order";
import { Menu } from "../pages/components/salonComp/menu/Menu";


function Salon() {

  const [listDishes, setListDishes] = useState([]);
  const [dishID, setDishID] = useState("");

  const ShowItem = (id) => {
    setDishID(id);
  }

  const getDataByID = async (id) => {
    const dishRef = doc(db, "menu", id);
    const dish = await getDoc(dishRef);
    return dish.data();
  };

  useEffect(() => {
// ¿Esto deberia estar en el useEffect?
    async function fetchData() {
      const dataByID = await getDataByID(dishID);
      console.log(dataByID.id);
      console.log(listDishes);

      // listDishes.forEach(object => {
      //   if (object.id === dataByID.id) {

      //     const ItemOrder = {
      //       extraOrder1: "",
      //       extraOrder2: "",
      //       idItemOrder: dataByID.id,
      //       nameItemOrder: dataByID.name,
      //       noteOrder: "",
      //       numItemOrder: 1,
      //       optionOrder: "",
      //       priceItemOrder: dataByID.price,
      //       priceTotalItemOrder: 0,
      //     };

      //     // console.log(ItemOrder);
      //     console.log(true);
      //   } else {

      //   }
      // })

      setListDishes([...listDishes, dataByID]);

    }
    fetchData();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dishID]);

  return (
    <div className="salonGeneral">
      <header className="headerSalon sectionA">
        <NavSalon />
      </header>
      <div className="bodySalon">
        <Menu ShowItem={ShowItem}  />
        <Order listDishes={listDishes}  />
      </div>
    </div>
  );
};

  export default Salon