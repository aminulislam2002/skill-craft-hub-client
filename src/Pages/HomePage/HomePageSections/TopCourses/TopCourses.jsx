import { useForm } from "react-hook-form";
import { IoIosStarOutline } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineMessage } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";

import image1 from "../../../../assets/courses/1.jpg";
import image2 from "../../../../assets/courses/2.jpg";
import image3 from "../../../../assets/courses/3.jpg";
import image4 from "../../../../assets/courses/4.jpg";
import image5 from "../../../../assets/courses/5.jpg";
import image6 from "../../../../assets/courses/6.jpg";
import image7 from "../../../../assets/courses/7.jpg";
import image8 from "../../../../assets/courses/8.jpg";
import image9 from "../../../../assets/courses/9.jpg";
import image10 from "../../../../assets/courses/10.jpg";
import image11 from "../../../../assets/courses/11.jpg";
import image12 from "../../../../assets/courses/12.jpg";
import image13 from "../../../../assets/courses/13.jpg";
import image14 from "../../../../assets/courses/14.jpg";
import image15 from "../../../../assets/courses/15.jpg";
import image16 from "../../../../assets/courses/16.jpg";
import image17 from "../../../../assets/courses/17.jpg";
import image18 from "../../../../assets/courses/18.jpg";
import image19 from "../../../../assets/courses/19.jpg";
import image20 from "../../../../assets/courses/20.jpg";

const TopCourses = () => {
  const [selectedCourse, setSelectedCourse] = useState("All");

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  const coursesData = [
    {
      id: 15,
      category: "Software Development",
      image: image15,
      title: "Software Development Masterclass 1",
      updatedDate: "Updated 21/12/19",
      stars: 5,
      reviews: 0,
      users: 6,
      message: 10,
      price: 49.99,
      status: "Top Seller",
    },
    {
      id: 16,
      category: "Software Development",
      image: image16,
      title: "Software Development Masterclass 2",
      updatedDate: "Updated 21/12/19",
      stars: 5,
      reviews: 0,
      users: 6,
      message: 10,
      price: 49.99,
      status: "Top Seller",
    },
    {
      id: 1,
      category: "Web Development",
      image: image1,
      title: "Web Development Masterclass 1",
      updatedDate: "Updated 21/12/19",
      stars: 5,
      reviews: 0,
      users: 6,
      message: 10,
      price: 49.99,
      status: "Top Seller",
    },
    {
      id: 2,
      category: "Web Development",
      image: image2,
      title: "Web Development Masterclass 2",
      updatedDate: "Updated 21/12/19",
      stars: 5,
      reviews: 0,
      users: 6,
      message: 10,
      price: 49.99,
      status: "Top Seller",
    },
    {
      id: 18,
      category: "3D Animation",
      image: image18,
      title: "3D Animation Masterclass 1",
      updatedDate: "Updated 21/12/19",
      stars: 5,
      reviews: 0,
      users: 6,
      message: 10,
      price: 49.99,
      status: "Top Seller",
    },
    {
      id: 10,
      category: "Graphics Design",
      image: image10,
      title: "Adobe Illustrator Essentials 1",
      updatedDate: "Updated 21/12/19",
      stars: 4.7,
      reviews: 5,
      users: 12,
      message: 20,
      price: 59.99,
      status: "Top Seller",
    },
    {
      id: 6,
      category: "Web Design",
      image: image6,
      title: "Responsive Web Design Fundamentals 1",
      updatedDate: "Updated 21/12/19",
      stars: 4.5,
      reviews: 2,
      users: 8,
      message: 15,
      price: 39.99,
      status: "Top Seller",
    },
    {
      id: 7,
      category: "Web Design",
      image: image7,
      title: "Responsive Web Design Fundamentals 2",
      updatedDate: "Updated 21/12/19",
      stars: 4.5,
      reviews: 2,
      users: 8,
      message: 15,
      price: 39.99,
      status: "Top Seller",
    },
    {
      id: 3,
      category: "Web Development",
      image: image3,
      title: "Web Development Masterclass 3",
      updatedDate: "Updated 21/12/19",
      stars: 5,
      reviews: 0,
      users: 6,
      message: 10,
      price: 49.99,
      status: "Top Seller",
    },
    {
      id: 4,
      category: "Web Development",
      image: image4,
      title: "Web Development Masterclass 4",
      updatedDate: "Updated 21/12/19",
      stars: 5,
      reviews: 0,
      users: 6,
      message: 10,
      price: 49.99,
      status: "Top Seller",
    },
    {
      id: 5,
      category: "Web Development",
      image: image5,
      title: "Web Development Masterclass 5",
      updatedDate: "Updated 21/12/19",
      stars: 5,
      reviews: 0,
      users: 6,
      message: 10,
      price: 49.99,
      status: "Top Seller",
    },
    {
      id: 8,
      category: "Web Design",
      image: image8,
      title: "Responsive Web Design Fundamentals 3",
      updatedDate: "Updated 21/12/19",
      stars: 4.5,
      reviews: 2,
      users: 8,
      message: 15,
      price: 39.99,
      status: "Top Seller",
    },
    {
      id: 9,
      category: "Web Design",
      image: image9,
      title: "Responsive Web Design Fundamentals 4",
      updatedDate: "Updated 21/12/19",
      stars: 4.5,
      reviews: 2,
      users: 8,
      message: 15,
      price: 39.99,
      status: "Top Seller",
    },

    {
      id: 11,
      category: "Graphics Design",
      image: image11,
      title: "Adobe Illustrator Essentials 2",
      updatedDate: "Updated 21/12/19",
      stars: 4.7,
      reviews: 5,
      users: 12,
      message: 20,
      price: 59.99,
      status: "Top Seller",
    },
    {
      id: 12,
      category: "Graphics Design",
      image: image12,
      title: "Adobe Illustrator Essentials 3",
      updatedDate: "Updated 21/12/19",
      stars: 4.7,
      reviews: 5,
      users: 12,
      message: 20,
      price: 59.99,
      status: "Top Seller",
    },
    {
      id: 13,
      category: "Graphics Design",
      image: image13,
      title: "Adobe Illustrator Essentials 4",
      updatedDate: "Updated 21/12/19",
      stars: 4.7,
      reviews: 5,
      users: 12,
      message: 20,
      price: 59.99,
      status: "Top Seller",
    },
    {
      id: 14,
      category: "Graphics Design",
      image: image14,
      title: "Adobe Illustrator Essentials 5",
      updatedDate: "Updated 21/12/19",
      stars: 4.7,
      reviews: 5,
      users: 12,
      message: 20,
      price: 59.99,
      status: "Top Seller",
    },

    {
      id: 17,
      category: "Software Development",
      image: image17,
      title: "Software Development Masterclass 3",
      updatedDate: "Updated 21/12/19",
      stars: 5,
      reviews: 0,
      users: 6,
      message: 10,
      price: 49.99,
      status: "Top Seller",
    },

    {
      id: 19,
      category: "3D Animation",
      image: image19,
      title: "3D Animation Masterclass 2",
      updatedDate: "Updated 21/12/19",
      stars: 5,
      reviews: 0,
      users: 6,
      message: 10,
      price: 49.99,
      status: "Top Seller",
    },
    {
      id: 20,
      category: "3D Animation",
      image: image20,
      title: "3D Animation Masterclass 3",
      updatedDate: "Updated 21/12/19",
      stars: 5,
      reviews: 0,
      users: 6,
      message: 10,
      price: 49.99,
      status: "Top Seller",
    },
  ];

  const filterSelectedCourses =
    selectedCourse === "All" ? coursesData.slice(0, 8) : coursesData.filter((course) => course.category === selectedCourse);

  return (
    <div className="py-16 px-4 relative bg-primary">
      {/* Part one */}
      <div className="grid grid-cols-1 lg:grid-cols-2 mb-12">
        <div>
          <h1 className="text-primary text-2xl font-primary font-bold mb-2 text-center lg:text-left">
            Browse Our Top Courses
          </h1>
          <p className="text-secondary text-lg text-center lg:text-left">
            Cum doctus civibus efficiantur in imperdiet deterruisCum doctus civibus efficiantur in imperdiet deterruisset.
          </p>
        </div>
        <div className="flex justify-center lg:justify-end items-center lg:items-start mt-8 lg:mt-0">
          <form onSubmit={handleSubmit(onSubmit)}>
            <select
              {...register("course")}
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              className="w-60 h-14 px-5 rounded-md border"
            >
              <option value="All">All</option>
              <option value="Software Development">Software Development</option>
              <option value="Web Development">Web Development</option>
              <option value="Web Design">Web Design</option>
              <option value="Graphics Design">Graphics Design</option>
              <option value="3D Animation">3D Animation</option>
            </select>
          </form>
        </div>
      </div>

      {/* Part two */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filterSelectedCourses.map((course) => (
          <div key={course.id} className="bg-white relative group overflow-hidden rounded-md">
            <Link>
              <img src={course.image} className="h-48 w-full" alt="" />
              <div className="absolute inset-0 group-hover:bg-blue-600 group-hover:bg-opacity-50 w-full h-48"></div>
              <div className="absolute inset-0 flex justify-center items-center w-full h-48">
                <div className="text-center text-white">
                  <h1 className="hidden group-hover:block">Preview Course</h1>
                  {course.status && (
                    <div className="bg-[#c75533] text-white absolute top-5 left-5 px-3 py-1 rounded-lg hidden group-hover:block">
                      {course?.status}
                    </div>
                  )}
                </div>
              </div>
            </Link>

            <div className="p-5">
              <p className="text-secondary mb-2">{course.updatedDate}</p>
              <Link className="text-lg font-bold font-primary">{course.title}</Link>
              <div className="flex justify-start items-center gap-1 mt-5">
                {Array.from({ length: course.stars }, (_, index) => (
                  <IoIosStarOutline key={index} className="text-[#d0d23c] w-5 h-5" />
                ))}
                <span>({course.reviews})</span>
              </div>
            </div>
            <div className="border-t p-5 grid grid-cols-2">
              <div className="flex justify-start items-center gap-3">
                <div className="flex justify-start items-center gap-1 text-secondary">
                  <FaRegUser className="w-4 h-4" /> <span>{course.users}</span>
                </div>
                <div className="flex justify-start items-center gap-1 text-secondary">
                  <MdOutlineMessage className="w-4 h-4" /> <span>{course.message}</span>
                </div>
              </div>
              <div>
                <h1 className="text-[#c75533] font-primary text-lg font-bold text-end">${course.price}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-16">
        <button className="px-20 py-3 rounded-full border-2 border-primary text-red hover:bg-primary-button hover:text-white">
          View all courses
        </button>
      </div>
    </div>
  );
};

export default TopCourses;
