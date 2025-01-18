import { skillsList } from "@/assets/assets";

const Skills = () => {
  return (
    <div id="skills" className="scroll-mt-20 py-10">
      <div className="container">
        <p className="text-center font-ovo mb-2 text-lg ">My Expertise</p>
        <h1 className="text-center text-5xl font-ovo">Skills</h1>
        <div className="flex w-full flex-col lg:flex-row items-center  gap-20 my-20">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {skillsList.map(({ category, skills }, index) => (
              <li
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 transition-all duration-300 hover:shadow-black"
                key={index}
              >
                <h3 className="my-4 font-semibold text-gray-700">{category}</h3>
                <div className="flex flex-wrap gap-4">
                  {skills.map((skill, index) => (
                    <p
                      className="p-1 px-3 text-sm border-[0.5px] border-gray-400 rounded-full"
                      key={index}
                    >
                      {skill}
                    </p>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Skills;
