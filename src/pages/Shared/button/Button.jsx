const Button = ({title }) => {
  return (
    <>
      <button className="uppercase text-xl font-medium mb-5 text-black border-b-4 rounded-lg btn btn-outline mt-3 border-0 text-center flex flex-col justify-center items-center">
        {title}
      </button>
    </>
  );
};

export default Button;
