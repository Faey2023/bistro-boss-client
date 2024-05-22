import UseMenu from "../../../hooks/useMenu";
import Menu from "../../../shared/design/Menu";
import Button from "../../../shared/button/Button";
import Title from "../../../shared/title/Title";

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
          <Menu key={menu._id} menu={menu} />
        ))}
      </div>
      <Button title={"View full menu"} link={"menu"} />
    </>
  );
};

export default PopularMenu;
