import UseMenu from "../../../../hooks/UseMenu";
import Menu from "../../../Shared/design/Menu";
import Cover from "../../../Shared/section cover/Cover";
import soupBg from "../../../../assets/menu/soup-bg.jpg";
import Button from "../../../Shared/button/Button";

const Soup = () => {
  const [menus] = UseMenu();
  const pizza = menus.filter((i) => i.category === "pizza");
  return (
    <>
      <Cover
        img={soupBg}
        text={
          "Experience comfort in a bowl at Bistro Boss. Our soups are crafted with care, delivering a symphony of flavors with every spoonful."
        }
        heading={"soups"}
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

export default Soup;
