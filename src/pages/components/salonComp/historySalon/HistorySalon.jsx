import NavSalon from "../navSalon/NavSalon";
import AllHistoryOrderSalon from "./AllHistoryOrderSalon";

export const HistorySalon = () => {

  return (
     <div className="salonGeneral">
        <nav className="headerSalon sectionA">
          <NavSalon />
        </nav>
        <div className="bodyHistory">
          <AllHistoryOrderSalon/>
        </div>
    </div>

  )
};
