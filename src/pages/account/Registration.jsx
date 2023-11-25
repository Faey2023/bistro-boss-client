import { Link } from "react-router-dom";
import loginBg from "../../assets/others/authentication.png";
import loginImg from "../../assets/others/authentication2.png";
import SharedSignIn from "../Shared/signup/SharedSignIn";
import { useForm } from "react-hook-form";
import UseAuth from "../../hooks/UseAuth";

const Registration = () => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => {
        console.log(err.code);
      });
  };
  const { createUser } = UseAuth();

  // console.log(watch("example"));

  return (
    <div style={{ backgroundImage: `url(${loginBg})` }}>
      <div className="hero">
        <div className="hero-content mt-5 flex-col shadow-2xl border-2 lg:flex-row-reverse">
          <div className="text-center">
            <img src={loginImg} alt="image for registration page" />
          </div>
          <div className=" max-w-sm">
            <h1 className="text-center font-bold text-4xl">Register</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name", { required: true })}
                  type="name"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-700">
                    Name is required to register.
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-700">
                    Email is required to register.
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", { required: true, minLength: 8 })}
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "minLength" && (
                  <span className="text-red-700">
                    Password length should be 6 characters.
                  </span>
                )}
                {errors.password?.type === "required" && (
                  <span className="text-red-700">
                    Password is required to register.
                  </span>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#d1a054b3] text-white">
                  Register
                </button>
              </div>
              <h4 className="text-[#d1a054b3] text-xl">
                Already Registered?
                <Link to="/login" className="font-bold">
                  Go to login
                </Link>
              </h4>
              <SharedSignIn />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
