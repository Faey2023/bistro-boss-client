import { Link, useLocation, useNavigate } from "react-router-dom";
import loginBg from "../../assets/others/authentication.png";
import loginImg from "../../assets/others/authentication2.png";

import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useEffect, useState } from "react";
import UseAuth from "../../hooks/UseAuth";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import SharedSignIn from "../../shared/SharedSignIn";

const Login = () => {
  const { login } = UseAuth();
  const navigate = useNavigate();
  // const location = useLocation();

  // const from = location.state?.from?.pathname || "/";

  // const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    //console.log(email, password);
    login(email, password)
      .then((res) => {
        //console.log(res.user);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully logged in!!!",
          showConfirmButton: false,
          timer: 2000,
        });
        // navigate(from, { replace: true });
        navigate("/");
      })
      .catch((err) => {
        //console.log(err.code);
        toast.error(err.code);
      });
  };
  const handleValidateCaptcha = (e) => {
    const captcha = e.target.value;
    //console.log(captcha);
    if (validateCaptcha(captcha) == true) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <div style={{ backgroundImage: `url(${loginBg})` }}>
      <div className="hero min-h-screen ">
        <div className="hero-content mt-5 flex-col shadow-2xl border-2 lg:flex-row">
          <div className="text-center">
            <img src={loginImg} alt="image for login page" />
          </div>
          <div className=" w-full max-w-sm">
            <h1 className="text-center font-bold text-4xl">Login</h1>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
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
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  onBlur={handleValidateCaptcha}
                  name="captcha"
                  placeholder="Type here"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button
                  disabled={disabled}
                  className="btn btn-outline text-[#d1a054b3] hover:text-white hover:bg-[#d1a054b3] hover:border-none font-bold text-xl"
                >
                  Login
                </button>
              </div>
              <h4 className="text-[#d1a054b3] text-xl ">
                New here? {""}
                <Link to="/regi" className="font-bold">
                  Create a New Account
                </Link>
              </h4>
            </form>
            <SharedSignIn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
