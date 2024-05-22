import useMenu from "../../hooks/useMenu";
import Button from "../../shared/button/Button";
import Menu from "../../shared/design/Menu";
import Title from "../../shared/title/Title";

const TodayOffer = () => {
  const [menus] = useMenu();
  const offered = menus.filter((i) => i.category === "offered");
  return (
    <div>
      <Title subHeading={"Don't miss"} heading={"today's offer"} />
      <div className="grid md:grid-cols-2 gap-10">
        {offered.map((menu) => (
          <Menu key={menu._id} menu={menu} />
        ))}
      </div>
      <Button title={"order your favorite food."} />
    </div>
  );
};

export default TodayOffer;
