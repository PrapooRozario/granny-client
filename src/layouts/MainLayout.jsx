import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useAuth } from "@/hooks/useAuth";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const { user } = useAuth();
  return (
    <div className="w-11/12 mx-auto font-ubuntu">
      <Toaster />
      {user && user?.email ? (
        <div>
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
      ) : (
        <div className="flex items-center justify-center h-screen">
          <div className="border-gray-300 h-16 w-16 animate-spin rounded-full border-8 border-t-blue-600" />
        </div>
      )}
    </div>
  );
};

export default MainLayout;
