const Title = ({ subHeading, heading }) => {
  return (
    <div className="flex flex-col justify-center items-center my-5 ">
      <p className="text-[#D99904] text-xl border-b-4">---{subHeading}---</p>
      <h1 className="uppercase text-4xl border-b-4">{heading}</h1>
    </div>
  );
};

export default Title;
