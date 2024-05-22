const Menu = ({ menu }) => {
  const { name, recipe, image, price } = menu || [];
  return (
    <>
      <div className="flex gap-4">
        <img
          style={{
            borderRadius: "0px 200px 200px 200px",
            width: "120px",
            height: "110px",
          }}
          src={image}
          alt=""
        />
        <div>
          <h3 className="text-xl uppercase">{name} ------------------</h3>
          <p className="text-base text-[#737373] w-[440px]">{recipe}</p>
        </div>
        <p className="text-xl text-[#BB8506]">${price}</p>
      </div>
    </>
  );
};

export default Menu;
