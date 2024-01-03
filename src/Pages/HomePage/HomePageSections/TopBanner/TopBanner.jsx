import "tailwindcss/tailwind.css";

import banner_image from "../../../../assets/banner/top-banner.png";

const TopBanner = () => {
  return (
    <div className="w-full px-4 mx-auto bg-primary-bg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="py-[230px]">
          <h1 className="text-5xl font-bold text-primary-text mb-2">Learn From Anywhere</h1>
          <p className="text-secondary-text text-lg mb-5">
            Technology is bringing a massive wave of evolution on learning things on different ways.
          </p>
          <div className="flex gap-3">
            <button className="bg-primary-button hover:bg-primary-bg text-white hover:text-primary-button-text text-lg px-9 py-3 border border-primary-border rounded-md">
              Get Stated
            </button>
            <button className="bg-secondary-button hover:bg-primary-bg text-white hover:text-secondary-button-text text-lg px-9 py-3 border border-secondary-border rounded-md">
              View Courses
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div>
            <img src={banner_image} alt="Banner Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
