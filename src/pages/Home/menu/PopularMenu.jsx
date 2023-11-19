import Title from "../../Shared/title/Title";
import Menu from "./Menu";
import Button from "../../Shared/button/Button";
import UseMenu from "../../../hooks/UseMenu";

const PopularMenu = () => {
  const [menus] = UseMenu();
  const popular = menus.filter((i) => i.category === "popular");
  // const [menus, setMenus] = useState([]);
  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularItems = data.filter((i) => i.category === "popular");
  //       setMenus(popularItems);
  //     });
  // }, []);

  return (
    <>
      <Title subHeading="Popular Items" heading="from our menu" />
      <div className="grid md:grid-cols-2 gap-10">
        {popular.map((menu) => (
          <Menu key={menu._id} menu={menu}></Menu>
        ))}
        <Button text={"View full menu"} />
      </div>
    </>
  );
};

export default PopularMenu;
