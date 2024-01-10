import "tailwindcss/tailwind.css";

import banner_image from "../../../../assets/banner/top-banner.png";

const TopBanner = () => {
  return (
    <div className="w-full px-4 mx-auto bg-primary">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="py-[120px] lg:py-[200px]">
          <h1 className="text-5xl font-bold text-primary mb-5 font-primary">Learn From Anywhere</h1>
          <p className="text-secondary text-lg mb-5">
            Technology is bringing a massive wave of evolution on learning things on different ways.
          </p>
          <div className="flex gap-3">
            <button className="bg-primary-button hover:bg-primary text-white hover:text-primary-button-text text-lg px-9 py-3 border border-primary rounded-md">
              Get Stated
            </button>
            <button className="bg-secondary-button hover:bg-primary text-white hover:text-secondary-button-text text-lg px-9 py-3 border border-secondary rounded-md">
              View Courses
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="mb-[80px]">
            <img src={banner_image} alt="Banner Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
