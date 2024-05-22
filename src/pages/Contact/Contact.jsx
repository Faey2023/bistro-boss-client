import { Helmet } from "react-helmet";
import Cover from "../../shared/section cover/Cover";
import contactBannerImg from "../../assets/contact/banner.jpg";
import Title from "../../shared/title/Title";

// icons
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { IoLocationSharp } from "react-icons/io5";
import { GoClockFill } from "react-icons/go";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Bistro Boss|Contact</title>
      </Helmet>
      <Cover
        img={contactBannerImg}
        heading={"Contact Us"}
        text={"Would you like to try a dish?"}
      />
      <Title subHeading={"visit us"} heading={"our location"} />
      <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
        {/* div 1 */}
        <div className="border w-96 h-[300px]">
          <div className="h-16 bg-[#D1A054] text-white flex items-center justify-center">
            <LiaPhoneVolumeSolid className=" text-3xl" />
          </div>
          <div className="bg-[#f3f3f3] flex flex-col items-center mx-auto text-center justify-center w-[300px] h-[200px]">
            <h4 className="uppercase font-semibold text-xl mb-2">phone</h4>
            <p>(+880) 1111111111</p>
          </div>
        </div>
        {/* div 2 */}
        <div className="border w-96 h-[300px]">
          <div className="h-16 bg-[#D1A054] text-white flex items-center justify-center">
            <IoLocationSharp className=" text-3xl" />
          </div>
          <div className="bg-[#f3f3f3] flex flex-col items-center mx-auto text-center justify-center w-[324px] h-[200px]">
            <h4 className="uppercase font-semibold text-xl mb-2">Address</h4>
            <p> 123 ABS Street, Uni 21, Bangladesh</p>
          </div>
        </div>
        {/* div 3 */}
        <div className="border w-96 h-[300px]">
          <div className="h-16 bg-[#D1A054] text-white flex items-center justify-center">
            <GoClockFill className=" text-3xl" />
          </div>
          <div className="bg-[#f3f3f3] flex flex-col items-center mx-auto text-center justify-center w-[324px] h-[200px]">
            <h4 className="uppercase font-semibold text-xl mb-2">
              working hours
            </h4>
            <p>Mon - Fri: 08:00 - 22:00</p>
            <p>Sat - Sun: 10:00 - 23:00</p>
          </div>
        </div>
      </div>
      {/* form */}
      {/* <Title subHeading={"send us a message"} heading={"contact form"} /> */}
    </>
  );
};

export default Contact;
