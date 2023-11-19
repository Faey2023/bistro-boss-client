import { useEffect, useState } from "react";
import Title from "../../Shared/title/Title";
import Menu from "./Menu";

const PopularMenu = () => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((i) => i.category === "popular");
        setMenus(popularItems);
      });
  }, []);
  return (
    <>
      <Title subHeading="Popular Items" heading="from our menu" />
      <div className="grid md:grid-cols-2 gap-10">
        {menus.map((menu) => (
          <Menu key={menu._id} menu={menu}></Menu>
        ))}
        <div className="flex flex-col justify-center items-center">
          <button className="uppercase text-xl font-medium mb-5">
            view full menu
          </button>
        </div>
      </div>
    </>
  );
};

export default PopularMenu;
