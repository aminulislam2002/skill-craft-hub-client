import { FaFacebook, FaTwitter, FaInstagram, FaGoogle, FaLinkedin, FaApple, FaGooglePlay } from "react-icons/fa";

import sch_logo from "../../../assets/logo/sch-logo.png";

const Footer = () => {
  return (
    <div>
      <div className="px-8 bg-[#151515] text-white border-b border-b-gray-700">
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
              <p className="text-sm mb-3">About us</p>
              <p className="text-sm mb-3">Contact</p>
              <p className="text-sm mb-3">Blog</p>
              <p className="text-sm mb-3">Become a teacher</p>
            </div>
            <div>
              <h4 className="text-lg mb-8 uppercase">PROGRAMS</h4>
              <p className="text-sm mb-3">Nanodegree Plus</p>
              <p className="text-sm mb-3">Veterans</p>
              <p className="text-sm mb-3">Georgia</p>
              <p className="text-sm mb-3">Self-Driving Car</p>
            </div>
            <div>
              <h4 className="text-lg mb-8 uppercase">SUPPORT</h4>
              <p className="text-sm mb-3">Documentation</p>
              <p className="text-sm mb-3">Forums</p>
              <p className="text-sm mb-3">Language Packs</p>
              <p className="text-sm mb-3">Release Status</p>
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

      <div className="px-8 bg-[#151515] text-white">
        <div className="container mx-auto pt-4 pb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex justify-start items-center">
              <img src={sch_logo} alt="Logo of SCH" />
              <h1 className="text-2xl font-bold font-Nunito text-left ms-5">SCH</h1>
            </div>

            <div className="flex justify-center items-center">
              <ul className="flex justify-center items-center gap-8">
                <li>Home</li>
                <li>Privacy</li>
                <li>Terms</li>
                <li> Sitemap</li>
                <li>Purchase</li>
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

      <div className="bg-black text-white py-6">
        <p className="text-center">Copyright © 2023 SCH by Aminul Islam. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
