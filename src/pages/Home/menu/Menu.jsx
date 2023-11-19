import MenuDesign from "../../Shared/design/MenuDesign";

const Menu = ({ menu }) => {
  const { _id, name, recipe, image, price } = menu || {};
  return (
    <>
      <MenuDesign name={name} recipe={recipe} image={image} price={price} />
    </>
  );
};

export default Menu;
