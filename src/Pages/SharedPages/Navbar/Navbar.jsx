import { Link } from "react-router-dom";

import { LuUser2 } from "react-icons/lu";

import sch_logo from "../../../assets/logo/sch-without-bg.png";

const Navbar = () => {
  const navItems = [
    { label: "Home", to: "/" },
    { label: "Courses", to: "/courses" },
    { label: "Events", to: "/events" },
    { label: "Blog", to: "/blog" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <div className="grid grid-cols-12 bg-primary fixed z-[100] w-full">
      <div className="col-span-6 lg:col-span-2 w-full h-full flex justify-center">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navItems.map((item, index) => (
                <li key={index} className="font-primary font-bold text-lg">
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <img src={sch_logo} className="w-20 h-12" alt="Logo of SCH" />
      </div>
      <div className="hidden lg:flex justify-center items-center lg:col-span-8 w-full h-full">
        <ul className="menu menu-horizontal px-1">
          {navItems.map((item, index) => (
            <li key={index} className="font-primary font-bold text-lg">
              <Link to={item.to}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-6 lg:col-span-2 w-full h-full flex justify-center items-center font-primary font-bold text-lg">
        <span className="me-2">
          <LuUser2 />
        </span>
        <button>Login/Register</button>
      </div>
    </div>
  );
};

export default Navbar;
