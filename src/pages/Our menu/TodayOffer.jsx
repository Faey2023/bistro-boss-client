import UseMenu from "../../hooks/UseMenu";
import Button from "../Shared/button/Button";
import Menu from "../Shared/design/Menu";
import Title from "../Shared/title/Title";

const TodayOffer = () => {
  const [menus] = UseMenu();
  const offered = menus.filter((i) => i.category === "offered");
  return (
    <div>
      <Title subHeading={"Don't miss"} heading={"today's offer"} />
      <div className="grid md:grid-cols-2 gap-10">
        {offered.map((menu) => (
          <Menu key={menu._id} menu={menu}></Menu>
        ))}
      </div>
      <Button title={"order your favorite food."} />
    </div>
  );
};

export default TodayOffer;
