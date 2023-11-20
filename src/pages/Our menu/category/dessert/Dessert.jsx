import UseMenu from "../../../../hooks/UseMenu";
import Button from "../../../Shared/button/Button";
import Menu from "../../../Shared/design/Menu";
import Cover from "../../../Shared/section cover/Cover";
import dessertBg from "../../../../assets/menu/dessert-bg.jpeg";
import { Link } from "react-router-dom";

const Dessert = () => {
  const [menus] = UseMenu();
  const dessert = menus.filter((i) => i.category === "dessert");
  return (
    <>
      <Cover
        img={dessertBg}
        text={
          "Save room for indulgence at Bistro Boss. Our dessert selection is a delightful finale to your dining experience."
        }
        heading={"dessert"}
      />
      <div className="grid md:grid-cols-2 gap-10">
        {dessert.map((menu) => (
          <Menu key={menu._id} menu={menu}></Menu>
        ))}
      </div>
      <Link to={`/order/${dessert}`}>
        <Button title={"order your favorite food"} />
      </Link>
    </>
  );
};

export default Dessert;
