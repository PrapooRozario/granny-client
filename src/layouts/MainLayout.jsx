import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="w-11/12 mx-auto font-ubuntu">
      <nav>
        <Navbar></Navbar>
      </nav>
      <main>
        <Outlet></Outlet>
      </main>
      <footer></footer>
    </div>
  );
};

export default MainLayout;
