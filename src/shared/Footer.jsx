import { IoLogoTwitter } from "react-icons/io";
import { FaFacebookF, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="text-neutral-content flex flex-col md:flex-row h-[400px]">
        <div className="h-full flex-1 flex flex-col justify-center items-center bg-[#1F2937] space-y-2">
          <h4 className="uppercase font-semibold text-2xl">contact us</h4>
          <div className="w-[350px] flex flex-col justify-center items-center">
            <p> 123 ABS Street, Uni 21, Bangladesh</p>
            <p>+88 123456789</p>
            <p>Mon - Fri: 08:00 - 22:00</p>
            <p>Sat - Sun: 10:00 - 23:00</p>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center bg-[#111827] space-y-2">
          <h4 className="uppercase font-semibold text-2xl">follow us</h4>
          <p>Join us on social media</p>
          <div className="grid grid-flow-col gap-4">
            <a>
              <IoLogoTwitter className="text-white text-2xl" />
            </a>
            <a>
              <FaFacebookF className="text-white text-2xl" />
            </a>
            <a>
              <FaYoutube className="text-white text-2xl" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer footer-center p-4 bg-black text-white">
        <div>
          <p>Copyright © 2023 - All right reserved by Bistro Boss</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
