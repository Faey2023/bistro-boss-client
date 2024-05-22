import MenuCard from "../../shared/card/MenuCard";

const OrderTab = ({ items }) => {
  return (
    <div className="grid md:grid-cols-3 gap-10">
      {items.map((menu) => (
        <MenuCard key={menu._id} menu={menu}></MenuCard>
      ))}
    </div>
  );
};

export default OrderTab;
