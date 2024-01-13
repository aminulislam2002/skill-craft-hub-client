import { Link } from "react-router-dom";

import { LuUser2 } from "react-icons/lu";

const Navbar = () => {
  const navItems = [
    <>
      <li className="font-primary font-bold text-lg">
        <Link to="/">Home</Link>
      </li>
      <li className="font-primary font-bold text-lg">
        <Link to="/courses">Courses</Link>
      </li>
      <li className="font-primary font-bold text-lg">
        <Link to="/events">Events</Link>
      </li>
      <li className="font-primary font-bold text-lg">
        <Link to="/blog">Blog</Link>
      </li>
      <li className="font-primary font-bold text-lg">
        <Link to="/contact">Contact</Link>
      </li>
    </>,
  ];

  return (
    <div className="grid grid-cols-12 bg-primary">
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
              {navItems}
            </ul>
          </div>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="hidden lg:flex justify-center items-center lg:col-span-8 w-full h-full">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
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
