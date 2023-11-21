import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const UseAuth = () => {
  const info = useContext(AuthContext);
  return info;
};

export default UseAuth;
