import { useState, useEffect } from "react";

import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../../../../firebase/config";

import { AllHistoryOrder } from "./AllHistoryOrder";
import { SelectHistory } from "./SelectHistory";

export const GeneralHistory = () => {
  const [allOrder, setAllOrder] = useState([]);
  const [filterHistory, setFilterHistory] = useState([]);
  const [currentState, SetCurrentState] = useState("all");

  useEffect(
    () =>
      onSnapshot(collection(db, "order"), (snapshot) =>
        setAllOrder(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );

  useEffect(() => {
    if (currentState === "all") {
      setFilterHistory(allOrder);
    } else {
      setFilterHistory(allOrder.filter((orders) => orders.stateOrder === currentState));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentState, allOrder]);

  return (
    <>
      <SelectHistory SetCurrentState={SetCurrentState} />
      <AllHistoryOrder filterHistory={filterHistory} />
    </>
  );
};

