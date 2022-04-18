import { useEffect, useState } from "react";

import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../../../../firebase/config";

import { AllCardsDishes } from "./AllCardsDishes";
import SelectMenu from "./SelectMenu";

export const Menu = ({ ShowItem }) => {
  const [allDishes, setAllDishes] = useState([]);
  const [MenuDishes, SetMenuDishes] = useState([]);
  const [curretMenu, SetCurrentMenu] = useState("Desayuno");

  useEffect(
    () =>
      onSnapshot(collection(db, "menu"), (snapshot) =>
        setAllDishes(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        )
      ),
    []
  );

  useEffect(() => {
    if (curretMenu === "Bebida") {
      SetMenuDishes(allDishes.filter((dishes) => dishes.type === curretMenu));
    } else {
      SetMenuDishes(allDishes.filter((dishes) => dishes.menu === curretMenu));
    }
  }, [curretMenu, allDishes]);

  return (
    <div className="menu sectionB">
      <div className="headerMenu">
        {/*<div className="titleMenu">
          <h2>Salón</h2>
        </div> */}
        <SelectMenu SetCurrentMenu={SetCurrentMenu} />
      </div>
        <AllCardsDishes
          MenuDishes={MenuDishes}
          ShowItem={ShowItem}
        />
    </div>
  );
};
