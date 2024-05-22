import { Link } from "react-router-dom";

const Button = ({ title, link }) => {
  return (
    <>
      <div className="flex justify-center items-center">
        <Link
          to={`${link}`}
          className="uppercase text-xl font-medium mb-5 border-b-4 rounded-lg btn btn-outline mt-3 border-0"
        >
          {title}
        </Link>
      </div>
    </>
  );
};

export default Button;
