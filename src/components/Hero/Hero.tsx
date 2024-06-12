import Image from "next/image";
import Form from "./components/Form";
import { HERO_CONTENT } from "../../constants";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row max-w-screen-xl bg-[#f7f5f9] h-full md:h-screen my-24">
      <div className="md:w-[60%] flex items-center justify-evenly flex-col">
        <div className="text-left">
          <h1 className=" px-0 md:px-5 text-4xl font-semibold font-[#Poppins] italic">
            Explore your <span className="text-[#0096c8]">hobby </span>
            or
            <span className="text-[#8064a2]"> passion</span>
          </h1>
          <p className="text-sm py-2 md:p-6 font-light font-[#Poppins] tracking-wide leading-8">
            {HERO_CONTENT.content1}
          </p>
          <p className="text-sm px-0 md:px-6 font-light font-[#Poppins] tracking-wide leading-8">
            {HERO_CONTENT.content2}
          </p>
        </div>
        <div className="w-full md:block hidden">
          <Image
            src="/assets/group.png"
            alt="group"
            width={1000}
            className="w-full"
            height={10}
          />
        </div>
      </div>
      <div className="w-full md:w-[40%] pt-10 md:pt-28 flex flex-col items-center ">
        <Form />
      </div>
      <div className="w-full mt-10 md:hidden">
        <Image
          src="/assets/group.png"
          alt="group"
          width={1000}
          className="w-full"
          height={550}
        />
      </div>
    </section>
  );
};

export default Hero;
