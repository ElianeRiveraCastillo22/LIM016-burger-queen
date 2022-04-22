import { Routes, Route } from 'react-router-dom';
import '../style/app.scss';
import Cocina from '../pages/Cocina';
import Login from '../pages/Login';
import Salon from '../pages/Salon';

import NotFound from '../pages/Notfound';
import { AlertSalon } from '../pages/components/salonComp/alertSalon/AlertSalon';
import { HistorySalon } from '../pages/components/salonComp/historySalon/HistorySalon';
import { AlertCocina } from "../pages/components/cocinaComp/alertCocina/AlertCocina";
import { HistoryCocina } from '../pages/components/cocinaComp/historyCocina/HistoryCocina';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/salon" element={<Salon />} />
        <Route path="/salon/alert" element={<AlertSalon />} />
        <Route path="/salon/history" element={<HistorySalon />} />
        <Route path="/cocina" element={<Cocina />} />
        <Route path="/cocina/alert" element={<AlertCocina />} />
        <Route path="/cocina/history" element={<HistoryCocina />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
