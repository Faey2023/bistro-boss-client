import Cover from "../../../Shared/section cover/Cover";
import UseMenu from "../../../../hooks/UseMenu";
import Menu from "../../../Shared/design/Menu";
import saladImg from "../../../../assets/menu/salad-bg.jpg";

const Salad = () => {
  const [menus] = UseMenu();
  const salads = menus.filter((i) => i.category === "salad");
  return (
    <>
      <Cover
        heading={salads}
        text={
          "Elevate your taste experience with our selection of salads at Bistro Boss. Crisp, colorful, and bursting with flavor, our salads feature the finest and freshest ingredients."
        }
        img={saladImg}
      />
      <div>
        {salads.map((menu) => (
          <Menu key={menu._id} menu={menu}></Menu>
        ))}
      </div>
    </>
  );
};

export default Salad;
