export const CardDish = ({ menuDish, ShowItem }) => {

  const { id, name, img, price } = menuDish;

  return (
    <div className="carDish" key={id} onClick={() => ShowItem(id)}>
      <div className="photoDish">
        <img src={img} alt="Food" />
      </div>
      <div className="infoDish">
        <p className="textInfo1">{name}</p>
        <p className="textInfo2">S/. {price}.00</p>
      </div>
    </div>
  );
};
