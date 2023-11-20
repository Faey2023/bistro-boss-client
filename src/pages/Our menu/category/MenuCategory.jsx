import { Link } from "react-router-dom";
import Menu from "../../Shared/design/Menu";
import Button from "../../Shared/button/Button";

const MenuCategory = ({ items, category }) => {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-10">
        {items.map((menu) => (
          <Menu key={menu._id} menu={menu}></Menu>
        ))}
      </div>
      <Link to={`/order/${category}`}>
        <Button title={"order your favorite food"} />
      </Link>
    </>
  );
};

export default MenuCategory;
