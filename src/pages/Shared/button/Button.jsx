const Button = ({ text }) => {
  return (
    <>
      <button className="uppercase text-xl font-medium mb-5 text-black border-b-4 rounded-lg btn btn-outline mt-3 border-0 text-center">
        {text}
      </button>
    </>
  );
};

export default Button;
