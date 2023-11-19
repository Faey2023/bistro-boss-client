import { useEffect, useState } from "react";

const UseMenu = () => {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setMenus(data);
      });
  }, []);

  return [menus, loading];
};

export default UseMenu;
