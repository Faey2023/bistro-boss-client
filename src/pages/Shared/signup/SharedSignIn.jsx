import { FaFacebookF } from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";
import { GrGithub } from "react-icons/gr";

const SharedSignIn = () => {
  return (
    <div className="flex flex-col justify-center text-center items-center">
      <h4 className="text-xl font-medium mb-4">Or sign in with</h4>
      <div className="flex gap-14">
        <button className="btn btn-circle border-black text-2xl">
          <FaFacebookF />
        </button>
        <button className="btn btn-circle border-black text-2xl">
          <BsGoogle />
        </button>
        <button className="btn btn-circle border-black text-2xl">
          <GrGithub />
        </button>
      </div>
    </div>
  );
};

export default SharedSignIn;
