import { Link } from "react-router-dom";
import loginBg from "../../assets/others/authentication.png";
import loginImg from "../../assets/others/authentication2.png";
import SharedSignIn from "../Shared/signup/SharedSignIn";
import UseAuth from "../../hooks/UseAuth";

const Registration = () => {
  const { register } = UseAuth();

  const handleRegistration = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
    register(email, password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => {
        console.log(err.code);
      });
  };
  return (
    <div style={{ backgroundImage: `url(${loginBg})` }}>
      <div className="hero">
        <div className="hero-content mt-5 flex-col shadow-2xl border-2 lg:flex-row-reverse">
          <div className="text-center">
            <img src={loginImg} alt="image for registration page" />
          </div>
          <div className=" max-w-sm">
            <h1 className="text-center font-bold text-4xl">Register</h1>
            <form onSubmit={handleRegistration} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
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
