import orderImg from "../../assets/shop/banner2.jpg";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../hooks/useMenu";
import OrderTab from "./OrderTab";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import Cover from "../../shared/section cover/Cover";

const Order = () => {
  const categories = ["salad", "pizza", "soup", "dessert"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);

  const [menus] = useMenu();

  const salad = menus.filter((i) => i.category === "salad");
  const pizza = menus.filter((i) => i.category === "pizza");
  const soup = menus.filter((i) => i.category === "soup");
  const dessert = menus.filter((i) => i.category === "dessert");

  return (
    <>
      <Helmet>
        <title>Bistro Boss|Order</title>
      </Helmet>
      <Cover
        img={orderImg}
        heading={"order"}
        text={
          "Ordering your favorite dishes from Bistro Boss is simple and convenient."
        }
      />
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className="flex flex-row justify-center items-center text-center my-5">
          <Tab>Salads</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
        </TabList>
        <TabPanel>
          <OrderTab items={salad} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={dessert} />
        </TabPanel>
      </Tabs>
    </>
  );
};

export default Order;
