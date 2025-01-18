import { services } from "@/assets/assets";

const Services = () => {
  return (
    <div id="services" className="scroll-mt-20 py-10">
      <div className="container">
        <p className="text-center font-ovo mb-2 text-lg ">What I Offer</p>
        <h1 className="text-center text-5xl font-ovo">My Services</h1>
        <div className="flex w-full flex-col lg:flex-row  gap-10 my-20">
          {services.map((service, index) => {
            return (
              <div
                className="border-[0.5px] flex-1 border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 transition-all duration-300 hover:shadow-black hover:dark:shadow-white hover:dark:bg-darkHover "
                key={index}
              >
                <div className="h-14 w-14 rounded-md bg-pink-500 flex justify-center items-center">
                  {<service.icon className="size-7 text-white" />}
                </div>
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-gray-500 dark:text-white">{service.subtitle}</p>
                <p className="text-gray-500 dark:text-white">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Services;
