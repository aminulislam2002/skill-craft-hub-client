import { FaFacebook, FaTwitter, FaInstagram, FaGoogle, FaLinkedin, FaApple, FaGooglePlay } from "react-icons/fa";

import sch_logo from "../../../assets/logo/sch-logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="px-4 md:px-6 lg:px-8 bg-[#151515] text-white border-b border-b-gray-700">
        <div className="container mx-auto pt-20 pb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div>
              <h4 className="text-lg mb-8 uppercase">CONTACT</h4>
              <p className="text-sm mb-3">329 Queensberry Street, North Melbourne</p>
              <p className="text-sm mb-3">VIC 3051, Australia.</p>
              <p className="text-sm mb-3">123 456 7890</p>
              <p className="text-sm mb-3">support@edumy.com</p>
            </div>
            <div>
              <h4 className="text-lg mb-8 uppercase">COMPANY</h4>
              <p className="text-sm mb-3">
                <Link>About us</Link>
              </p>
              <p className="text-sm mb-3">
                <Link>Contact</Link>
              </p>
              <p className="text-sm mb-3">
                <Link>Blog</Link>
              </p>
              <p className="text-sm mb-3">
                <Link>Become a teacher</Link>
              </p>
            </div>
            <div>
              <h4 className="text-lg mb-8 uppercase">PROGRAMS</h4>
              <p className="text-sm mb-3">
                <Link>Nanodegree Plus</Link>
              </p>
              <p className="text-sm mb-3">
                <Link>Veterans</Link>
              </p>
              <p className="text-sm mb-3">
                <Link>Georgia</Link>
              </p>
              <p className="text-sm mb-3">
                <Link>Self-Driving Car</Link>
              </p>
            </div>
            <div>
              <h4 className="text-lg mb-8 uppercase">SUPPORT</h4>
              <p className="text-sm mb-3">
                <Link>Documentation</Link>
              </p>
              <p className="text-sm mb-3">
                <Link>Forums</Link>
              </p>
              <p className="text-sm mb-3">
                <Link>Language Packs</Link>
              </p>
              <p className="text-sm mb-3">
                <Link>Release Status</Link>
              </p>
            </div>
            <div>
              <h4 className="text-lg mb-8 uppercase">MOBILE</h4>

              <div>
                <button className="bg-[#0a0a0a] hover:bg-[#151515] text-white border-none rounded w-full mb-4 py-5 text-left">
                  <div className="flex justify-start items-center">
                    <span>
                      <FaApple className="text-[#969696] ms-4 me-1 w-9 h-9"></FaApple>
                    </span>
                    <div>
                      <h1 className="text-white text-lg font-Nunito">App Store</h1>
                      <p className="text-[#969696] text-sm font-Nunito">Available now on the</p>
                    </div>
                  </div>
                </button>
                <button className="bg-[#0a0a0a] hover:bg-[#151515] text-white border-none rounded w-full mb-4 py-5 text-left">
                  <div className="flex justify-start items-center">
                    <span>
                      <FaGooglePlay className="text-[#969696] ms-4 me-1 w-9 h-9"></FaGooglePlay>
                    </span>
                    <div>
                      <h1 className="text-white text-lg font-Nunito">Google play</h1>
                      <p className="text-[#969696] text-sm font-Nunito">Get in on</p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-6 lg:px-8 bg-[#151515] text-white">
        <div className="container mx-auto pt-4 pb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-4">
            <div className="flex justify-center lg:justify-start items-center">
              <img src={sch_logo} alt="Logo of SCH" />
              <h1 className="text-2xl font-bold font-Nunito text-left ms-5">SCH</h1>
            </div>

            <div className="flex justify-center items-center">
              <ul className="flex justify-center items-center gap-4 md:gap-6 lg:gap-8">
                <li>
                  <Link to="">Home</Link>
                </li>
                <li>
                  <Link to="">Privacy</Link>
                </li>
                <li>
                  <Link to="">Terms</Link>
                </li>
                <li>
                  <Link to="">Sitemap</Link>
                </li>
                <li>
                  <Link to="">Purchase</Link>
                </li>
              </ul>
            </div>

            <div className="flex justify-center items-center">
              <ul className="flex justify-center items-center gap-8">
                <li>
                  <FaFacebook></FaFacebook>
                </li>
                <li>
                  <FaInstagram></FaInstagram>
                </li>
                <li>
                  <FaTwitter></FaTwitter>
                </li>
                <li>
                  <FaLinkedin></FaLinkedin>
                </li>
                <li>
                  <FaGoogle></FaGoogle>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black text-white py-6 px-8">
        <p className="text-center">Copyright © 2023 SCH by Aminul Islam. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
