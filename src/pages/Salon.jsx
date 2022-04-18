import { useEffect, useState } from "react";

import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";

import NavSalon from "./components/salonComp/navSalon/NavSalon";
import { Order } from "./components/salonComp/order/Order";
import { Menu } from "../pages/components/salonComp/menu/Menu";

function Salon() {

  const [listDishes, setListDishes] = useState([]);
  const [dishID, setDishID] = useState("");

  const ShowItem = async (id) => {
    setDishID(id);
  }

  const getDataByID = async (id) => {
    const dishRef = doc(db, "menu", id);
    const dish = await getDoc(dishRef);
    return dish.data();
  };
  //para las ordenes que no se repita las ordenes
  useEffect(() => {
  // ¿Esto deberia estar en el useEffect?
    async function fetchData() {
      const dataByID = await getDataByID(dishID);

      const foundItem = listDishes.find((dish) => dish.id === dataByID.id);
      if (foundItem === undefined) {
        setListDishes([...listDishes, dataByID]);
      }
    }
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dishID]);

  return (
    <div className="salonGeneral">
      <nav className="headerSalon sectionA">
        <NavSalon />
      </nav>
      <div className="bodySalon">
        <Menu ShowItem={ShowItem} />
        <Order
          listDishes={listDishes}
          setListDishes={setListDishes}
        />
      </div>
    </div>
  );
};

  export default Salon