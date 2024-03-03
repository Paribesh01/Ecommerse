import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";
import axios from "axios";
import Nav from "./components/Nav";
import Cart from "./components/Cart";
import Fotter from "./components/Fotter";
import Home from "./pages/home/home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Shop from "./pages/shop/shop";
import Product from "./pages/product/product";

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const navigate = useNavigate();
  const [isUser, setUser] = useState(false);

  const verifyToken = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/verify",
        {},
        { withCredentials: true }
      );

      if (response.data.user && response.data.user.email) {
        setUser(true);
        return true; // Set user to true if authenticated
      } else {
        setUser(false);
        return false; // Set user to false if not authenticated
      }
    } catch (error) {
      console.error("Error verifying token:", error);
      setUser(false);
      return false; // Set user to false in case of error
    }
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      const isAuthenticated = await verifyToken();
      const currentPath = window.location.pathname;

      // If the user is not authenticated and the current route is not login, signup, or the root,
      // redirect to the login page
      if (
        !isAuthenticated &&
        currentPath !== "/login" &&
        currentPath !== "/signup" &&
        currentPath !== "/"
      ) {
        navigate("/login");
      }

      // If the user is not authenticated and the current route is signup,
      // redirect to the signup page
      if (!isAuthenticated && currentPath === "/signup") {
        navigate("/signup");
      }
    };

    checkAuthentication();
  }, [navigate]);

  return (
    <>
      <Nav isUser={isUser} />
      <Cart />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product" element={<Product />} />
        {/* Redirect to login page if the user is not authenticated */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
      <Fotter />
    </>
  );
}

export default App;
