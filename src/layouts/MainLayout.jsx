import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="w-11/12 mx-auto font-ubuntu">
      <Toaster />
      <nav>
        <Navbar></Navbar>
      </nav>
      <main className="min-h-[calc(100vh-231px)]">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
