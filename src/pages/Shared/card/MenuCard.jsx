import Button from "../button/Button";

const MenuCard = ({ menu }) => {
  const { image, name, recipe, price } = menu;
  return (
    <>
      <div className="card card-compact bg-[#F3F3F3] shadow-xl">
        <figure>
          <img
            style={{ width: "424px", height: "300px" }}
            src={image}
            alt={name}
          />
        </figure>
        <p className="absolute right-0 bg-[#737373] text-xl font-bold rounded-sm text-white">
          ${price}
        </p>
        <div className="card-body">
          <h2 className="text-2xl font-semibold text-center">{name}</h2>
          <p className="text-[#737373] text-xl">{recipe}</p>
        </div>
        <Button title={"add to card"} />
      </div>
    </>
  );
};

export default MenuCard;
