
import { CardDish } from "./CardDish";


export const AllCardsDishes = ({ MenuDishes, ShowItem }) => {
  return (
    <div className="dishGeneral">
      {MenuDishes.map((menuDish) => (
          <CardDish key={menuDish.id} menuDish={menuDish} ShowItem={ShowItem} />
      ))}
    </div>
  );
};
