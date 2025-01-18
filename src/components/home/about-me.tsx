import { assets, infoList } from "@/assets/assets";
import Image from "next/image";

const AboutMe = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <div id="about" className="scroll-mt-20 py-10">
      <div className="container">
        <p className="text-center font-ovo mb-2 text-lg ">Introduction</p>
        <h1 className="text-center text-5xl font-ovo">About Me</h1>
        <div className="flex w-full flex-col lg:flex-row items-center  gap-20 my-20">
          <div className="w-64 sm:w-80 rounded-3xl max-w-none">
            <Image
              src={assets.profileImage}
              alt="Shahzaib's Profile Image"
              className="w-full object-contain"
              width={200}
              height={200}
              priority
            />
          </div>
          <div className="flex-1">
            <p className="mb-10 max-w-2xl font-ovo">
              I am an experienced Frontend Developer with over a decade of professional
              expertise in the field. Throughout my career, I have had the privilege of
              collaborating with prestigious organizations, contributing to their success
              and growth.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
              {infoList.map(({ title, description, icon, iconDark }, index) => (
                <li
                  className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover  hover:dark:bg-darkHover hover:-translate-y-1 transition-all duration-300 hover:shadow-black hover:dark:shadow-white"
                  key={index}
                >
                  <Image
                    src={isDarkMode ? iconDark : icon}
                    alt={title}
                    className="w-7 mt-3"
                  />
                  <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                    {title}
                  </h3>
                  <p className="text-gray-600 dark:text-white text-sm">{description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
