import { FaFacebookF } from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";
import { GrGithub } from "react-icons/gr";
import UseAuth from "../hooks/UseAuth";
import toast from "react-hot-toast";
import UseAxiosPublic from "../hooks/UseAxiosPublic";

const SharedSignIn = () => {
  const { google } = UseAuth();
  const axiosPublic = UseAxiosPublic();
  const handleLogIn = () => {
    google().then((res) => {
      //console.log(res.user);
      const userInfo = {
        name: res.user?.displayName,
        email: res.user?.email,
      };
      axiosPublic.post("/user", userInfo).then((res) => {
        //console.log(res.data);
        if (res.data.insertedId) {
          toast.success("user added to database.");
        }
      });
    });
  };
  return (
    <div className="flex flex-col justify-center text-center items-center">
      <h4 className="text-xl font-medium mb-4 divider">Or sign in with</h4>
      <div className="flex gap-14">
        {/* <button className="btn btn-circle border-black hover:border-none hover:bg-black hover:text-white text-2xl">
          <FaFacebookF />
        </button> */}
        <button
          onClick={handleLogIn}
          className="btn btn-circle border-black hover:border-none hover:bg-black hover:text-white text-2xl"
        >
          <BsGoogle />
        </button>
        {/* <button className="btn btn-circle border-black text-2xl">
          <GrGithub />
        </button> */}
      </div>
    </div>
  );
};

export default SharedSignIn;
