import bg_image from "../../../../assets/banner/statistics.png";
import { FaGraduationCap, FaFreeCodeCamp } from "react-icons/fa";
import { FaChalkboardUser } from "react-icons/fa6";
import { VscVmActive } from "react-icons/vsc";

const Statistics = () => {
  return (
    <div className="relative overflow-hidden py-[130px] lg:py-0">
      {/* Background Image */}
      <div
        className="relative"
        style={{
          backgroundImage: `url(${bg_image})`,
          backgroundSize: "cover",
          width: "100%",
          height: "700px",
          overflow: "hidden",
        }}
      ></div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 w-full h-full"></div>

      {/* Content Container */}
      <div className="absolute z-20 inset-0 flex flex-col justify-center items-center text-center text-white">
        <div>
          <h1 className="font-primary text-2xl font-bold mb-4">Enhance your skills with the best online courses</h1>
          <p className="uppercase text-lg mb-8">Starting Online Learning</p>
        </div>

        {/* Statistics Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
          <div className="text-center">
            <div className="flex justify-center items-center mb-4">
              <FaChalkboardUser className="w-16 h-16 text-white" />
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-primary mb-2">6500</h1>
            <h3 className="text-lg">Students Learning</h3>
          </div>
          <div className="text-center">
            <div className="flex justify-center items-center mb-4">
              <FaGraduationCap className="w-16 h-16 text-white" />
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-primary mb-2">58263</h1>
            <h3 className="text-lg">Graduates</h3>
          </div>
          <div className="text-center">
            <div className="flex justify-center items-center mb-4">
              <FaFreeCodeCamp className="w-16 h-16 text-white" />
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-primary mb-2">896673</h1>
            <h3 className="text-lg">Free courses</h3>
          </div>
          <div className="text-center">
            <div className="flex justify-center items-center mb-4">
              <VscVmActive className="w-16 h-16 text-white" />
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-primary mb-2">8570</h1>
            <h3 className="text-lg">Active courses</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
