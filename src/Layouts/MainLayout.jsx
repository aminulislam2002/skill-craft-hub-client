import { Outlet } from "react-router-dom";
import Navbar from "../Pages/SharedPages/Navbar/Navbar";
import Footer from "../Pages/SharedPages/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
