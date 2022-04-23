import NavCocina from "../navCocina/NavCocina";
import {GeneralHistory} from "./GeneralHistory";

export const HistoryCocina = () => {

  return (
    <div className="contentCocina">
      <nav className="navCocina">
        <NavCocina />
      </nav>
      <div className="bodyhistory">
        <GeneralHistory />
      </div>
    </div>
  );
};
