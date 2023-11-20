const Button = ({ title }) => {
  return (
    <>
      <div className="text-center flex flex-col justify-center items-center">
        <button className="uppercase text-xl font-medium mb-5 border-b-4 rounded-lg btn btn-outline mt-3 border-0 ">
          {title}
        </button>
      </div>
    </>
  );
};

export default Button;
