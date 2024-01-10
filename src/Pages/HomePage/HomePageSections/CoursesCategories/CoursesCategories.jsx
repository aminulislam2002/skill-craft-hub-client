import { MdOutlineArrowRightAlt } from "react-icons/md";
import { SiSemanticweb } from "react-icons/si";
import { Link } from "react-router-dom";

import web_design from "../../../../assets/categories/web-design.jpg";
import web_development from "../../../../assets/categories/web-development.jpg";
import software_development from "../../../../assets/categories/software-development.jpg";
import graphic_design from "../../../../assets/categories/graphic-design.jpg";
import animation from "../../../../assets/categories/3d-animation.jpg";

const CoursesCategories = () => {
  return (
    <div className="py-20 px-4 relative">
      {/* Part one */}
      <div className="grid grid-cols-1 lg:grid-cols-2 mb-4">
        <div>
          <h1 className="text-primary text-2xl font-primary font-bold mb-2">Via School Categories Courses</h1>
          <p className="text-secondary text-lg">Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
        </div>
        <div className="flex justify-end items-start">
          <button className="text-link-button-text text-lg font-bold font-primary relative flex justify-center items-center gap-2">
            View All Courses
            <span>
              <MdOutlineArrowRightAlt className="w-7 h-12" />
            </span>
          </button>
        </div>
      </div>

      {/* Part two */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        <Link>
          <div className="relative group overflow-hidden rounded-md">
            <img src={web_design} className="w-full rounded-md h-[245px] object-cover" alt="" />
            <div className="absolute inset-0 bg-black opacity-50 group-hover:bg-blue-700 group-hover:opacity-50 transition-opacity"></div>

            <div className="absolute inset-0 flex justify-center items-center">
              <div className="text-center text-white">
                <div className="flex justify-center items-center">
                  <SiSemanticweb className="w-20 h-20" />
                </div>
                <div className="text-center py-5 px-3">
                  <h1 className="text-lg font-bold">Web Development</h1>
                  <p className="text-lg">Over 10 courses</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link>
          <div className="relative group overflow-hidden rounded-md">
            <img src={web_development} className="w-full rounded-md h-[245px] object-cover" alt="" />
            <div className="absolute inset-0 bg-black opacity-50 group-hover:bg-blue-700 group-hover:opacity-50 transition-opacity"></div>

            <div className="absolute inset-0 flex justify-center items-center">
              <div className="text-center text-white">
                <div className="flex justify-center items-center">
                  <SiSemanticweb className="w-20 h-20" />
                </div>
                <div className="text-center py-5 px-3">
                  <h1 className="text-lg font-bold">Web Design</h1>
                  <p className="text-lg">Over 8 courses</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link>
          <div className="relative group overflow-hidden rounded-md">
            <img src={graphic_design} className="w-full rounded-md h-[245px] object-cover" alt="" />
            <div className="absolute inset-0 bg-black opacity-50 group-hover:bg-blue-700 group-hover:opacity-50 transition-opacity"></div>

            <div className="absolute inset-0 flex justify-center items-center">
              <div className="text-center text-white">
                <div className="flex justify-center items-center">
                  <SiSemanticweb className="w-20 h-20" />
                </div>
                <div className="text-center py-5 px-3">
                  <h1 className="text-lg font-bold">Graphics Design</h1>
                  <p className="text-lg">Over 6 courses</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link>
          <div className="relative group overflow-hidden rounded-md">
            <img src={software_development} className="w-full rounded-md h-[245px] object-cover" alt="" />
            <div className="absolute inset-0 bg-black opacity-50 group-hover:bg-blue-700 group-hover:opacity-50 transition-opacity"></div>

            <div className="absolute inset-0 flex justify-center items-center">
              <div className="text-center text-white">
                <div className="flex justify-center items-center">
                  <SiSemanticweb className="w-20 h-20" />
                </div>
                <div className="text-center py-5 px-3">
                  <h1 className="text-lg font-bold">Software Development</h1>
                  <p className="text-lg">Over 3 courses</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link>
          <div className="relative group overflow-hidden rounded-md">
            <img src={animation} className="w-full rounded-md h-[245px] object-cover" alt="" />
            <div className="absolute inset-0 bg-black opacity-50 group-hover:bg-blue-700 group-hover:opacity-50 transition-opacity"></div>

            <div className="absolute inset-0 flex justify-center items-center">
              <div className="text-center text-white">
                <div className="flex justify-center items-center">
                  <SiSemanticweb className="w-20 h-20" />
                </div>
                <div className="text-center py-5 px-3">
                  <h1 className="text-lg font-bold">3D Animation</h1>
                  <p className="text-lg">Over 5 courses</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CoursesCategories;
