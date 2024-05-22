import { Link } from "react-router-dom";
import Menu from "../../../shared/design/Menu";
import Button from "../../../shared/button/Button";

const MenuCategory = ({ items, category }) => {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-10">
        {items.map((menu) => (
          <Menu key={menu._id} menu={menu} />
        ))}
      </div>
      <Link to={`/order/${category}`}>
        <Button title={"order your favorite food"} />
      </Link>
    </>
  );
};

export default MenuCategory;
