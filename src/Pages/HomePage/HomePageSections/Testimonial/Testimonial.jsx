import image1 from "../../../../assets/instructors/1.png";
import { FaQuoteLeft } from "react-icons/fa";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

import "./KeenSlider.css";

const Testimonial = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    rtl: true,
    slides: {
      perView: 3,
      spacing: 10,
    },
  });

  return (
    <div className="py-20 relative box-border bg-primary-bg">
      <div className="mb-20">
        <h1 className="text-center font-Nunito text-3xl font-bold mb-2">What People Say</h1>
        <p className="text-center text-lg mb-8 text-secondary-text">
          Cum doctus civibus efficiantur in imperdiet deterruisset.
        </p>
      </div>

      <div>
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1">
            <div className="relative overflow-hidden w-full h-full text-center">
              <div className="mb-2 p-5 md:pl-10 text-left">
                <div className="text-4xl md:text-5xl absolute left-6 top-4">
                  <span>
                    <FaQuoteLeft className="text-primary-button-text" />
                  </span>
                </div>
                <p className="ml-10">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos ratione nesciunt cupiditate culpa
                  fugit, alias doloribus odit rem, magni veritatis voluptates? Illum debitis ullam tempora!
                </p>
              </div>
              <div className="mb-6 text-center box-border">
                <div className="flex justify-center items-center">
                  <img src={image1} className="mb-3 w-16 h-16 rounded-full max-w-full" alt="Client" />
                </div>
                <div className="text-lg font-bold text-gray-800">John Smith</div>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide number-slide2">
            <div className="relative overflow-hidden w-full h-full text-center">
              <div className="mb-2 p-5 md:pl-10 text-left">
                <div className="text-4xl md:text-5xl absolute left-6 top-4">
                  <span>
                    <FaQuoteLeft className="text-primary-button-text" />
                  </span>
                </div>
                <p className="ml-10">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos ratione nesciunt cupiditate culpa
                  fugit, alias doloribus odit rem, magni veritatis voluptates? Illum debitis ullam tempora!
                </p>
              </div>
              <div className="mb-6 text-center box-border">
                <div className="flex justify-center items-center">
                  <img src={image1} className="mb-3 w-16 h-16 rounded-full max-w-full" alt="Client" />
                </div>
                <div className="text-lg font-bold text-gray-800">John Smith</div>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide number-slide3">
            <div className="relative overflow-hidden w-full h-full text-center">
              <div className="mb-2 p-5 md:pl-10 text-left">
                <div className="text-4xl md:text-5xl absolute left-6 top-4">
                  <span>
                    <FaQuoteLeft className="text-primary-button-text" />
                  </span>
                </div>
                <p className="ml-10">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos ratione nesciunt cupiditate culpa
                  fugit, alias doloribus odit rem, magni veritatis voluptates? Illum debitis ullam tempora!
                </p>
              </div>
              <div className="mb-6 text-center box-border">
                <div className="flex justify-center items-center">
                  <img src={image1} className="mb-3 w-16 h-16 rounded-full max-w-full" alt="Client" />
                </div>
                <div className="text-lg font-bold text-gray-800">John Smith</div>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide number-slide4">
            <div className="relative overflow-hidden w-full h-full text-center">
              <div className="mb-2 p-5 md:pl-10 text-left">
                <div className="text-4xl md:text-5xl absolute left-6 top-4">
                  <span>
                    <FaQuoteLeft className="text-primary-button-text" />
                  </span>
                </div>
                <p className="ml-10">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos ratione nesciunt cupiditate culpa
                  fugit, alias doloribus odit rem, magni veritatis voluptates? Illum debitis ullam tempora!
                </p>
              </div>
              <div className="mb-6 text-center box-border">
                <div className="flex justify-center items-center">
                  <img src={image1} className="mb-3 w-16 h-16 rounded-full max-w-full" alt="Client" />
                </div>
                <div className="text-lg font-bold text-gray-800">John Smith</div>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide number-slide5">
            <div className="relative overflow-hidden w-full h-full text-center">
              <div className="mb-2 p-5 md:pl-10 text-left">
                <div className="text-4xl md:text-5xl absolute left-6 top-4">
                  <span>
                    <FaQuoteLeft className="text-primary-button-text" />
                  </span>
                </div>
                <p className="ml-10">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos ratione nesciunt cupiditate culpa
                  fugit, alias doloribus odit rem, magni veritatis voluptates? Illum debitis ullam tempora!
                </p>
              </div>
              <div className="mb-6 text-center box-border">
                <div className="flex justify-center items-center">
                  <img src={image1} className="mb-3 w-16 h-16 rounded-full max-w-full" alt="Client" />
                </div>
                <div className="text-lg font-bold text-gray-800">John Smith</div>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide number-slide6">
            <div className="relative overflow-hidden w-full h-full text-center">
              <div className="mb-2 p-5 md:pl-10 text-left">
                <div className="text-4xl md:text-5xl absolute left-6 top-4">
                  <span>
                    <FaQuoteLeft className="text-primary-button-text" />
                  </span>
                </div>
                <p className="ml-10">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos ratione nesciunt cupiditate culpa
                  fugit, alias doloribus odit rem, magni veritatis voluptates? Illum debitis ullam tempora!
                </p>
              </div>
              <div className="mb-6 text-center box-border">
                <div className="flex justify-center items-center">
                  <img src={image1} className="mb-3 w-16 h-16 rounded-full max-w-full" alt="Client" />
                </div>
                <div className="text-lg font-bold text-gray-800">John Smith</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
