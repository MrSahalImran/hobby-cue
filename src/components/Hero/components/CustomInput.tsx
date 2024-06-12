interface InputProps {
  placeholder: string;
  type?: string;
  textSize?: string; // Updated interface to include textSize prop
}

const CustomInput = ({ placeholder, type = "text", textSize }: InputProps) => {
  // Updated function arguments to include textSize
  return (
    <>
      <input
        type={type}
        className={`px-4 py-3 w-full focus:outline-none border border-[#ebedf0] rounded-md bg-[#ebedf0] ${textSize}`} // Used textSize prop in className
        placeholder={placeholder}
      />
    </>
  );
};

export default CustomInput;
