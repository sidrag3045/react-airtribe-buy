import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import ProductDetails from "./pages/ProductDetails";

import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";

const ProtectedRoute = ({ children }) => {
  // !! convert into boolean
  const isAuthenticated = !!localStorage.getItem("token");
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default function App() {
  return (
    <MantineProvider>
      <Notifications />
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/products" exact element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <CartPage />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </MantineProvider>
  );
}
