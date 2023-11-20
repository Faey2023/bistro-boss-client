import { Link } from "react-router-dom";
import errorImg from "../assets/404.gif";
import Button from "../pages/Shared/button/Button";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <Link className="text-5xl mt-5" to="/">
        <Button title={"Back to Home"} />
      </Link>

      <img src={errorImg} className="h-[calc(100vh-100px)]" />
    </div>
  );
};

export default ErrorPage;
