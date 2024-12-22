import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { Provider } from "./components/ui/provider";
import AuthProvider from "./contexts/AuthProvider";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </AuthProvider>
);
