import { Parallax } from "react-parallax";

const Cover = ({ img, heading, text }) => {
  return (
    <>
      <Parallax blur={{ min: -50, max: 50 }} bgImage={img} strength={-200}>
        <div
          className="bg-cover p-32"
          style={{ backgroundImage: `url(${img})`, height: "610px" }}
        >
          <div className="flex flex-col justify-center items-center text-center text-white bg-[#15151599] w-[1000px] mx-auto p-24">
            <h1 className="uppercase text-7xl font-bold">{heading}</h1>
            <h4 className="text-2xl font-semibold">{text}</h4>
          </div>
        </div>
      </Parallax>
    </>
  );
};

export default Cover;