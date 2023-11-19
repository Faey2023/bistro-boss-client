import UseMenu from "../../../../hooks/UseMenu";
import Button from "../../../Shared/button/Button";
import Menu from "../../../Shared/design/Menu";
import Cover from "../../../Shared/section cover/Cover";
import dessertBg from "../../../../assets/menu/dessert-bg.jpeg";

const Dessert = () => {
  const [menus] = UseMenu();
  const dessert = menus.filter((i) => i.category === "dessert");
  return (
    <>
      <div className="h-[600px]">
        <Cover
          img={dessertBg}
          text={
            "Save room for indulgence at Bistro Boss. Our dessert selection is a delightful finale to your dining experience."
          }
          heading={"dessert"}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-10">
        {dessert.map((menu) => (
          <Menu key={menu._id} menu={menu}></Menu>
        ))}
      </div>
      <Button title={"order your favorite food"} />
    </>
  );
};

export default Dessert;
