import { IoIosStar } from "react-icons/io";
import image1 from "../../../../assets/instructors/1.png";
import image2 from "../../../../assets/instructors/2.png";
import image3 from "../../../../assets/instructors/3.png";
import image4 from "../../../../assets/instructors/4.png";

const TopInstructors = () => {
  return (
    <div className="my-20 relative box-border">
      <div className="">
        <div className="mb-20">
          <h1 className="text-center font-Nunito text-3xl font-bold mb-2">Top Rating Instructors</h1>
          <p className="text-center text-lg mb-8 text-secondary-text">
            Cum doctus civibus efficiantur in imperdiet deterruisset.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex justify-center items-center">
            <div>
              <img src={image1} className="w-36 h-36 rounded-full" alt="Instructor" />
              <div className="flex justify-center items-center">
                <div className="flex justify-start items-center gap-1 mt-2">
                  <IoIosStar className="text-[#d0d23c] w-5 h-5" />
                  <IoIosStar className="text-[#d0d23c] w-5 h-5" />
                  <IoIosStar className="text-[#d0d23c] w-5 h-5" />
                  <IoIosStar className="text-[#d0d23c] w-5 h-5" />
                  <IoIosStar className="text-[#d0d23c] w-5 h-5" />
                </div>
              </div>

              <div>
                <h1 className="text-center text-lg mt-2 font-semibold font-Nunito">John Smith</h1>
                <h3 className="text-center mt-2 text-secondary-text">484 profile views</h3>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div>
              <img src={image2} className="w-36 h-36 rounded-full" alt="Instructor" />
              <div className="flex justify-center items-center">
                <div className="flex justify-start items-center gap-1 mt-2">
                  <IoIosStar className="text-[#d0d23c] w-5 h-5" />
                  <IoIosStar className="text-[#d0d23c] w-5 h-5" />
                  <IoIosStar className="text-[#d0d23c] w-5 h-5" />
                  <IoIosStar className="text-[#d0d23c] w-5 h-5" />
                  <IoIosStar className="text-[#d0d23c] w-5 h-5" />
                </div>
              </div>

              <div>
                <h1 className="text-center text-lg mt-2 font-semibold font-Nunito">Nuhad Sayed Khan</h1>
                <h3 className="text-center mt-2 text-secondary-text">484 profile views</h3>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div>
              <img src={image3} className="w-36 h-36 rounded-full" alt="Instructor" />
              <div className="flex justify-center items-center">
                <div className="flex justify-start items-center gap-1 mt-2">
                  <IoIosStar className="text-[#d0d23c] w-5 h-5" />
                  <IoIosStar className="text-[#d0d23c] w-5 h-5" />
                  <IoIosStar className="text-[#d0d23c] w-5 h-5" />
                  <IoIosStar className="text-[#d0d23c] w-5 h-5" />
                  <IoIosStar className="text-[#d0d23c] w-5 h-5" />
                </div>
              </div>

              <div>
                <h1 className="text-center text-lg mt-2 font-semibold font-Nunito">Aminul Islam</h1>
                <h3 className="text-center mt-2 text-secondary-text">484 profile views</h3>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div>
              <img src={image4} className="w-36 h-36 rounded-full" alt="Instructor" />
              <div className="flex justify-center items-center">
                <div className="flex justify-start items-center gap-1 mt-2">
                  <IoIosStar className="text-[#d0d23c] w-5 h-5" />
                  <IoIosStar className="text-[#d0d23c] w-5 h-5" />
                  <IoIosStar className="text-[#d0d23c] w-5 h-5" />
                  <IoIosStar className="text-[#d0d23c] w-5 h-5" />
                  <IoIosStar className="text-[#d0d23c] w-5 h-5" />
                </div>
              </div>

              <div>
                <h1 className="text-center text-lg mt-2 font-semibold font-Nunito">Mr. Saikat</h1>
                <h3 className="text-center mt-2 text-secondary-text">484 profile views</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopInstructors;