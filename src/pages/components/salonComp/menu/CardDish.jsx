import { Options } from "./Options";
import { Extra } from "./Extra";

import { useOptionsContext } from "../../../context/OptionDish";

export const CardDish = ({ menuDish, ShowItem }) => {

  const { id, name, img, price } = menuDish;

  const {
    setExtraOrder1,
    setExtraOrder2,
    setOptionOrder,
    optionOrder,
    extraOrder1,
    extraOrder2,
  } = useOptionsContext();

  console.log(optionOrder);
  console.log(extraOrder1);
  console.log(extraOrder2);


  const getDish = (id, name) => {
    switch (name) {
      case "Hamburguesa clásica":
        Options({ setOptionOrder }).then(() => {
          Extra({ setExtraOrder1, setExtraOrder2 })
        });
        ShowItem(id);
      break;

      case "Hamburguesa doble":
        Options({ setOptionOrder }).then(() => {
          Extra({ setExtraOrder1, setExtraOrder2 });
        });
        ShowItem(id);
      break;

      default:
      ShowItem(id);
      break;
    }
  };

  return (
    <div
      className="carDish"
      key={id}
      onClick={() => getDish(id, name)}
    >
      <div className="photoDish">
        <img src={img} alt="Food" />
      </div>
      <div className="infoDish">
        <p  className="textInfo1">
          {name}
        </p>
        <p className="textInfo2">
          $ {price}.00
        </p>
      </div>
    </div>
  );
};
