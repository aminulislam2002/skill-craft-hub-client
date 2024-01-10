import { useForm } from "react-hook-form";
import { IoIosStarOutline } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";

import image1 from "../../../../assets/courses/3.png";
import { Link } from "react-router-dom";

const TopCourses = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="py-20 px-4 relative bg-primary">
      {/* Part one */}
      <div className="grid grid-cols-1 lg:grid-cols-2 mb-4">
        <div>
          <h1 className="text-primary text-2xl font-primary font-bold mb-2">Browse Our Top Courses</h1>
          <p className="text-secondary text-lg">
            Cum doctus civibus efficiantur in imperdiet deterruisCum doctus civibus efficiantur in imperdiet deterruisset.
          </p>
        </div>
        <div className="flex justify-end items-start">
          <form onSubmit={handleSubmit(onSubmit)}>
            <select {...register("gender")} className="w-60 h-14 px-5 rounded-md border">
              <option value="all">All</option>
              <option value="webDevelopment">Web Development</option>
              <option value="webDesign">Web Design</option>
              <option value="graphicsDesign">Graphics Design</option>
              <option value="softwareDevelopment">Software Development</option>
              <option value="3dAnimation">3D Animation</option>
            </select>
          </form>
        </div>
      </div>

      {/* Part two */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="bg-white relative group overflow-hidden rounded-md">
          <Link>
            <img src={image1} className="h-48 w-full" alt="" />
            <div className="absolute inset-0 group-hover:bg-blue-600 group-hover:bg-opacity-50 w-full h-48"></div>
            <div className="absolute inset-0 flex justify-center items-center w-full h-48">
              <div className="text-center text-white">
                <h1 className="hidden group-hover:block">Preview Course</h1>
                <div className="bg-[#c75533] text-white absolute top-5 left-5 px-3 py-1 rounded-lg hidden group-hover:block">
                  Top Seller
                </div>
              </div>
            </div>
          </Link>

          <div className="p-5">
            <p className="text-secondary mb-2">Updated 21/12/19</p>
            <Link className="text-lg font-bold font-primary">Fashion Photography From Professional</Link>
            <div className="flex justify-start items-center gap-1 mt-5">
              <IoIosStarOutline className="text-[#d0d23c] w-5 h-5" />
              <IoIosStarOutline className="text-[#d0d23c] w-5 h-5" />
              <IoIosStarOutline className="text-[#d0d23c] w-5 h-5" />
              <IoIosStarOutline className="text-[#d0d23c] w-5 h-5" />
              <IoIosStarOutline className="text-[#d0d23c] w-5 h-5" />
              <span>(0)</span>
            </div>
          </div>
          <div className="border-t p-5 grid grid-cols-2">
            <div className="flex justify-start items-center gap-1 text-secondary">
              <FaRegUser className="w-4 h-4" /> <span className="text-lg">6</span>
            </div>
            <div>
              <h1 className="text-[#c75533] font-primary text-lg font-bold text-end">$49.99</h1>
            </div>
          </div>
        </div>
        <div className="bg-white relative group overflow-hidden rounded-md">
          <Link>
            <img src={image1} className="h-48 w-full" alt="" />
            <div className="absolute inset-0 group-hover:bg-blue-600 group-hover:bg-opacity-50 w-full h-48"></div>
            <div className="absolute inset-0 flex justify-center items-center w-full h-48">
              <div className="text-center text-white">
                <h1 className="hidden group-hover:block">Preview Course</h1>
                <div className="bg-[#c75533] text-white absolute top-5 left-5 px-3 py-1 rounded-lg hidden group-hover:block">
                  Top Seller
                </div>
              </div>
            </div>
          </Link>

          <div className="p-5">
            <p className="text-secondary mb-2">Updated 21/12/19</p>
            <Link className="text-lg font-bold font-primary">Fashion Photography From Professional</Link>
            <div className="flex justify-start items-center gap-1 mt-5">
              <IoIosStarOutline className="text-[#d0d23c] w-5 h-5" />
              <IoIosStarOutline className="text-[#d0d23c] w-5 h-5" />
              <IoIosStarOutline className="text-[#d0d23c] w-5 h-5" />
              <IoIosStarOutline className="text-[#d0d23c] w-5 h-5" />
              <IoIosStarOutline className="text-[#d0d23c] w-5 h-5" />
              <span>(0)</span>
            </div>
          </div>
          <div className="border-t p-5 grid grid-cols-2">
            <div className="flex justify-start items-center gap-1 text-secondary">
              <FaRegUser className="w-4 h-4" /> <span className="text-lg">6</span>
            </div>
            <div>
              <h1 className="text-[#c75533] font-primary text-lg font-bold text-end">$49.99</h1>
            </div>
          </div>
        </div>
        <div className="bg-white relative group overflow-hidden rounded-md">
          <Link>
            <img src={image1} className="h-48 w-full" alt="" />
            <div className="absolute inset-0 group-hover:bg-blue-600 group-hover:bg-opacity-50 w-full h-48"></div>
            <div className="absolute inset-0 flex justify-center items-center w-full h-48">
              <div className="text-center text-white">
                <h1 className="hidden group-hover:block">Preview Course</h1>
                <div className="bg-[#c75533] text-white absolute top-5 left-5 px-3 py-1 rounded-lg hidden group-hover:block">
                  Top Seller
                </div>
              </div>
            </div>
          </Link>

          <div className="p-5">
            <p className="text-secondary mb-2">Updated 21/12/19</p>
            <Link className="text-lg font-bold font-primary">Fashion Photography From Professional</Link>
            <div className="flex justify-start items-center gap-1 mt-5">
              <IoIosStarOutline className="text-[#d0d23c] w-5 h-5" />
              <IoIosStarOutline className="text-[#d0d23c] w-5 h-5" />
              <IoIosStarOutline className="text-[#d0d23c] w-5 h-5" />
              <IoIosStarOutline className="text-[#d0d23c] w-5 h-5" />
              <IoIosStarOutline className="text-[#d0d23c] w-5 h-5" />
              <span>(0)</span>
            </div>
          </div>
          <div className="border-t p-5 grid grid-cols-2">
            <div className="flex justify-start items-center gap-1 text-secondary">
              <FaRegUser className="w-4 h-4" /> <span className="text-lg">6</span>
            </div>
            <div>
              <h1 className="text-[#c75533] font-primary text-lg font-bold text-end">$49.99</h1>
            </div>
          </div>
        </div>
        <div className="bg-white relative group overflow-hidden rounded-md">
          <Link>
            <img src={image1} className="h-48 w-full" alt="" />
            <div className="absolute inset-0 group-hover:bg-blue-600 group-hover:bg-opacity-50 w-full h-48"></div>
            <div className="absolute inset-0 flex justify-center items-center w-full h-48">
              <div className="text-center text-white">
                <h1 className="hidden group-hover:block">Preview Course</h1>
                <div className="bg-[#c75533] text-white absolute top-5 left-5 px-3 py-1 rounded-lg hidden group-hover:block">
                  Top Seller
                </div>
              </div>
            </div>
          </Link>

          <div className="p-5">
            <p className="text-secondary mb-2">Updated 21/12/19</p>
            <Link className="text-lg font-bold font-primary">Fashion Photography From Professional</Link>
            <div className="flex justify-start items-center gap-1 mt-5">
              <IoIosStarOutline className="text-[#d0d23c] w-5 h-5" />
              <IoIosStarOutline className="text-[#d0d23c] w-5 h-5" />
              <IoIosStarOutline className="text-[#d0d23c] w-5 h-5" />
              <IoIosStarOutline className="text-[#d0d23c] w-5 h-5" />
              <IoIosStarOutline className="text-[#d0d23c] w-5 h-5" />
              <span>(0)</span>
            </div>
          </div>
          <div className="border-t p-5 grid grid-cols-2">
            <div className="flex justify-start items-center gap-1 text-secondary">
              <FaRegUser className="w-4 h-4" /> <span className="text-lg">6</span>
            </div>
            <div>
              <h1 className="text-[#c75533] font-primary text-lg font-bold text-end">$49.99</h1>
            </div>
          </div>
        </div>
        <div className="bg-white relative group overflow-hidden rounded-md">
          <Link>
            <img src={image1} className="h-48 w-full" alt="" />
            <div className="absolute inset-0 group-hover:bg-blue-600 group-hover:bg-opacity-50 w-full h-48"></div>
            <div className="absolute inset-0 flex justify-center items-center w-full h-48">
              <div className="text-center text-white">
                <h1 className="hidden group-hover:block">Preview Course</h1>
                <div className="bg-[#c75533] text-white absolute top-5 left-5 px-3 py-1 rounded-lg hidden group-hover:block">
                  Top Seller
                </div>
              </div>
            </div>
          </Link>

          <div className="p-5">
            <p className="text-secondary mb-2">Updated 21/12/19</p>
            <Link className="text-lg font-bold font-primary">Fashion Photography From Professional</Link>
            <div className="flex justify-start items-center gap-1 mt-5">
              <IoIosStarOutline className="text-[#d0d23c] w-5 h-5" />
              <IoIosStarOutline className="text-[#d0d23c] w-5 h-5" />
              <IoIosStarOutline className="text-[#d0d23c] w-5 h-5" />
              <IoIosStarOutline className="text-[#d0d23c] w-5 h-5" />
              <IoIosStarOutline className="text-[#d0d23c] w-5 h-5" />
              <span>(0)</span>
            </div>
          </div>
          <div className="border-t p-5 grid grid-cols-2">
            <div className="flex justify-start items-center gap-1 text-secondary">
              <FaRegUser className="w-4 h-4" /> <span className="text-lg">6</span>
            </div>
            <div>
              <h1 className="text-[#c75533] font-primary text-lg font-bold text-end">$49.99</h1>
            </div>
          </div>
        </div>
        <div className="bg-white relative group overflow-hidden rounded-md">
          <Link>
            <img src={image1} className="h-48 w-full" alt="" />
            <div className="absolute inset-0 group-hover:bg-blue-600 group-hover:bg-opacity-50 w-full h-48"></div>
            <div className="absolute inset-0 flex justify-center items-center w-full h-48">
              <div className="text-center text-white">
                <h1 className="hidden group-hover:block">Preview Course</h1>
                <div className="bg-[#c75533] text-white absolute top-5 left-5 px-3 py-1 rounded-lg hidden group-hover:block">
                  Top Seller
                </div>
              </div>
            </div>
          </Link>

          <div className="p-5">
            <p className="text-secondary mb-2">Updated 21/12/19</p>
            <Link className="text-lg font-bold font-primary">Fashion Photography From Professional</Link>
            <div className="flex justify-start items-center gap-1 mt-5">
              <IoIosStarOutline className="text-[#d0d23c] w-5 h-5" />
              <IoIosStarOutline className="text-[#d0d23c] w-5 h-5" />
              <IoIosStarOutline className="text-[#d0d23c] w-5 h-5" />
              <IoIosStarOutline className="text-[#d0d23c] w-5 h-5" />
              <IoIosStarOutline className="text-[#d0d23c] w-5 h-5" />
              <span>(0)</span>
            </div>
          </div>
          <div className="border-t p-5 grid grid-cols-2">
            <div className="flex justify-start items-center gap-1 text-secondary">
              <FaRegUser className="w-4 h-4" /> <span className="text-lg">6</span>
            </div>
            <div>
              <h1 className="text-[#c75533] font-primary text-lg font-bold text-end">$49.99</h1>
            </div>
          </div>
        </div>
        <div className="bg-white relative group overflow-hidden rounded-md">
          <Link>
            <img src={image1} className="h-48 w-full" alt="" />
            <div className="absolute inset-0 group-hover:bg-blue-600 group-hover:bg-opacity-50 w-full h-48"></div>
            <div className="absolute inset-0 flex justify-center items-center w-full h-48">
              <div className="text-center text-white">
                <h1 className="hidden group-hover:block">Preview Course</h1>
                <div className="bg-[#c75533] text-white absolute top-5 left-5 px-3 py-1 rounded-lg hidden group-hover:block">
                  Top Seller
                </div>
              </div>
            </div>
          </Link>

          <div className="p-5">
            <p className="text-secondary mb-2">Updated 21/12/19</p>
            <Link className="text-lg font-bold font-primary">Fashion Photography From Professional</Link>
            <div className="flex justify-start items-center gap-1 mt-5">
              <IoIosStarOutline className="text-[#d0d23c] w-5 h-5" />
              <IoIosStarOutline className="text-[#d0d23c] w-5 h-5" />
              <IoIosStarOutline className="text-[#d0d23c] w-5 h-5" />
              <IoIosStarOutline className="text-[#d0d23c] w-5 h-5" />
              <IoIosStarOutline className="text-[#d0d23c] w-5 h-5" />
              <span>(0)</span>
            </div>
          </div>
          <div className="border-t p-5 grid grid-cols-2">
            <div className="flex justify-start items-center gap-1 text-secondary">
              <FaRegUser className="w-4 h-4" /> <span className="text-lg">6</span>
            </div>
            <div>
              <h1 className="text-[#c75533] font-primary text-lg font-bold text-end">$49.99</h1>
            </div>
          </div>
        </div>
        <div className="bg-white relative group overflow-hidden rounded-md">
          <Link>
            <img src={image1} className="h-48 w-full" alt="" />
            <div className="absolute inset-0 group-hover:bg-blue-600 group-hover:bg-opacity-50 w-full h-48"></div>
            <div className="absolute inset-0 flex justify-center items-center w-full h-48">
              <div className="text-center text-white">
                <h1 className="hidden group-hover:block">Preview Course</h1>
                <div className="bg-[#c75533] text-white absolute top-5 left-5 px-3 py-1 rounded-lg hidden group-hover:block">
                  Top Seller
                </div>
              </div>
            </div>
          </Link>

          <div className="p-5">
            <p className="text-secondary mb-2">Updated 21/12/19</p>
            <Link className="text-lg font-bold font-primary">Fashion Photography From Professional</Link>
            <div className="flex justify-start items-center gap-1 mt-5">
              <IoIosStarOutline className="text-[#d0d23c] w-5 h-5" />
              <IoIosStarOutline className="text-[#d0d23c] w-5 h-5" />
              <IoIosStarOutline className="text-[#d0d23c] w-5 h-5" />
              <IoIosStarOutline className="text-[#d0d23c] w-5 h-5" />
              <IoIosStarOutline className="text-[#d0d23c] w-5 h-5" />
              <span>(0)</span>
            </div>
          </div>
          <div className="border-t p-5 grid grid-cols-2">
            <div className="flex justify-start items-center gap-1 text-secondary">
              <FaRegUser className="w-4 h-4" /> <span className="text-lg">6</span>
            </div>
            <div>
              <h1 className="text-[#c75533] font-primary text-lg font-bold text-end">$49.99</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-20">
        <button className="px-20 py-3 rounded-full border-2 border-primary text-primary-button-text hover:bg-primary-button hover:text-white">
          View all courses
        </button>
      </div>
    </div>
  );
};

export default TopCourses;
