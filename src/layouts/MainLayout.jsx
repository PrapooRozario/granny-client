import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useAuth } from "@/hooks/useAuth";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const { loading } = useAuth();
  return (
    <div className="font-ubuntu bg-white dark:bg-gray-800 text-black dark:text-white p-4">
      <Toaster />
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <div className="border-gray-300 h-16 w-16 animate-spin rounded-full border-8 border-t-blue-600" />
        </div>
      ) : (
        <div className="w-11/12 mx-auto h-full">
          <nav>
            <Navbar />
          </nav>
          <main className="min-h-[calc(100vh-231px)]">
            <Outlet />
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      )}
    </div>
  );
};

export default MainLayout;
