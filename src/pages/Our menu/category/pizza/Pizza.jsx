import UseMenu from "../../../../hooks/UseMenu";
import Menu from "../../../Shared/design/Menu";
import Cover from "../../../Shared/section cover/Cover";
import pizzaBg from "../../../../assets/menu/pizza-bg.jpg";
import Button from "../../../Shared/button/Button";

const Pizza = () => {
  const [menus] = UseMenu();
  const pizza = menus.filter((i) => i.category === "pizza");
  return (
    <>
      <Cover
        img={pizzaBg}
        text={
          "Dive into the pizza paradise at Bistro Boss. Our gourmet pizzas are a celebration of quality ingredients, expertly crafted crusts, and imaginative toppings."
        }
        heading={"pizza"}
      />
      <div className="grid md:grid-cols-2 gap-10">
        {pizza.map((menu) => (
          <Menu key={menu._id} menu={menu}></Menu>
        ))}
      </div>
      <Button title={"ORDER YOUR FAVORITE FOOD"} />
    </>
  );
};

export default Pizza;
