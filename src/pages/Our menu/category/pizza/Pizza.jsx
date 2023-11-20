import UseMenu from "../../../../hooks/UseMenu";
import Menu from "../../../Shared/design/Menu";
import Cover from "../../../Shared/section cover/Cover";
import pizzaBg from "../../../../assets/menu/pizza-bg.jpg";
import Button from "../../../Shared/button/Button";
import { Link } from "react-router-dom";

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
        heading={"pizzas"}
      />
      <div className="grid md:grid-cols-2 gap-10">
        {pizza.map((menu) => (
          <Menu key={menu._id} menu={menu}></Menu>
        ))}
      </div>
      <Link to={`/order/${pizza}`}>
        <Button title={"order your favorite food"} />
      </Link>
    </>
  );
};

export default Pizza;
