import Swal from "sweetalert2";
import UseAuth from "../../../hooks/UseAuth";
import Button from "../button/Button";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import UseAxios from "../../../hooks/UseAxios";
import UseCart from "../../../hooks/UseCart";

const MenuCard = ({ menu }) => {
  const { user } = UseAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = UseAxios();
  const [,refetch] = UseCart();
  const { image, name, recipe, price, _id } = menu;
  const handleAddToCart = () => {
    // console.log(food);
    if (user && user.email) {
      //send data to database
      const cartItem = {
        menuId: _id,
        email: user.email,
        image,
        name,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        toast.success(`Added ${name} to cart.`);
        refetch();
      });
    } else {
      Swal.fire({
        title: "Please Log in",
        text: "You need to be a user to order.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Go to Log In page",
      }).then((result) => {
        if (result.isConfirmed) {
          //send user to login
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <>
      <div className="card card-compact bg-[#F3F3F3] shadow-xl">
        <figure>
          <img
            style={{ width: "424px", height: "300px" }}
            src={image}
            alt={name}
          />
        </figure>
        <p className="absolute right-0 bg-[#737373] text-xl font-bold rounded-sm text-white">
          ${price}
        </p>
        <div className="card-body">
          <h2 className="text-2xl font-semibold text-center">{name}</h2>
          <p className="text-[#737373] text-xl">{recipe}</p>
        </div>
        <div onClick={handleAddToCart}>
          <Button title={"add to cart"} />
        </div>
      </div>
    </>
  );
};

export default MenuCard;
