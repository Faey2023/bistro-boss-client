import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const useAuth = () => {
  const info = useContext(AuthContext);
  return info;
};

export default useAuth;


