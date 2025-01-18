import { assets } from "@/assets/assets";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex container items-center min-h-screen justify-center">
      <div className="flex flex-col items-center max-w-3xl mt-10">
        <Image
          src={assets.profile_img}
          alt="Shahzaib's Profile Image"
          className="w-32 rounded-full"
        />
        <h3 className="flex mt-4 items-end text-xl md:text-2xl mb-3 font-ovo">
          Hi! I&apos;m Muhammad Shahzaib Afzal{" "}
          <Image src={assets.hand_icon} alt="Hand Icon" className="w-6" />
        </h3>
        <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-ovo text-center">
          full stack developer based in Pakistan
        </h1>
        <p className="max-w-2xl text-center mt-4 mx-auto font-ovo">
          A passionate developer with 2+ years of experience building scalable and
          user-friendly web applications.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <a
            href="#contact"
            className="flex items-center  dark:bg-transparent gap-3 px-6 py-2.5 bg-black text-white border border-gray-500 rounded-full ml-4 capitalize"
          >
            contact me{" "}
            <Image
              src={assets.right_arrow_white}
              alt="Right arrow icon"
              className="w-4"
            />
          </a>
          <a
            href="/sample-resume.pdf"
            className="flex items-center gap-3 px-6 py-2.5 border border-gray-500 rounded-full ml-4 capitalize dark:bg-white dark:text-black"
            download
          >
            my resume{" "}
            <Image src={assets.download_icon} alt="Download icon" className="w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Header;
