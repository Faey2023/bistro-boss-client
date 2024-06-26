import { Helmet } from "react-helmet";
import TodayOffer from "./TodayOffer";
import useMenu from "../../hooks/useMenu";

//images
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import MenuCategory from "./category/MenuCategory";
import Cover from "../../shared/section cover/Cover";
import bannerImg from "../../assets/menu/banner3.jpg";

const OurMenu = () => {
  const [menus] = useMenu();
  const dessert = menus.filter((i) => i.category === "dessert");
  const pizza = menus.filter((i) => i.category === "pizza");
  const salad = menus.filter((i) => i.category === "salad");
  const soup = menus.filter((i) => i.category === "soup");
  return (
    <>
      <Helmet>
        <title>Bistro Boss|Menu</title>
      </Helmet>
      <Cover
        img={bannerImg}
        heading={"Our menu"}
        text={
          "Explore Bistro Boss's menu—a symphony of flavors! Every dish is crafted to perfection for an unforgettable dining experience. Taste the extraordinary."
        }
      />
      <TodayOffer />
      {/* dessert */}
      <div>
        <Cover
          img={dessertImg}
          text={
            "Save room for indulgence at Bistro Boss. Our dessert selection is a delightful finale to your dining experience."
          }
          heading={"dessert"}
        />
        <MenuCategory category={"dessert"} items={dessert} />
      </div>
      {/* pizza */}
      <div>
        <Cover
          img={pizzaImg}
          text={
            "Dive into the pizza paradise at Bistro Boss. Our gourmet pizzas are a celebration of quality ingredients, expertly crafted crusts, and imaginative toppings."
          }
          heading={"pizzas"}
        />
        <MenuCategory category={"pizza"} items={pizza} />
      </div>
      {/* salad */}
      <div>
        <Cover
          heading={"salads"}
          text={
            "Elevate your taste experience with our selection of salads at Bistro Boss. Crisp, colorful, and bursting with flavor, our salads feature the finest and freshest ingredients."
          }
          img={saladImg}
        />
        <MenuCategory category={"salad"} items={salad} />
      </div>
      {/* soup */}
      <div>
        <Cover
          img={soupImg}
          text={
            "Experience comfort in a bowl at Bistro Boss. Our soups are crafted with care, delivering a symphony of flavors with every spoonful."
          }
          heading={"soups"}
        />
        <MenuCategory category={"soup"} items={soup} />
      </div>
    </>
  );
};

export default OurMenu;
