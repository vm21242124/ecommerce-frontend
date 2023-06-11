import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import LoginPage from "./Pages/Login/LoginPage";
import RegisterPage from "./Pages/Register/RegisterPage";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import axios from "axios";

import UserCart from "./Pages/UserCart/UserCart";
import ProductPage from "./Pages/ProductPage/ProductPage";
import SearchPage from "./Pages/SearchPage/SearchPage";
import SearchBycategory from "./Pages/SearchByCat/SearchBycategory";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import OrderAddress from "./Pages/OrderAddress/OrderAddress";
import PaymentSucess from "./Components/success/PaymentSucess";
import Forgotpass from "./Pages/ForgotPasspage/Forgotpass";
import Footer from "./Components/Footer/Footer";

axios.defaults.baseURL = "http://localhost:5000/api";

// axios.defaults.baseURL = "https://shoppe-ecome-app.onrender.com/api";
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/admin/dashboard" element={<AdminDashboard />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/login" element={<LoginPage />} />

          <Route exact path="/register" element={<RegisterPage />} />

          <Route exact path="/cart" element={<UserCart />} />
          <Route exact path="/product/:id" element={<ProductPage />} />
          <Route exact path="/search/:search" element={<SearchPage />} />
          <Route
            exact
            path="/categoryproducts/:id"
            element={<SearchBycategory />}
          />
          <Route exact path="/profile" element={<ProfilePage />} />
          <Route exact path="/forgotpass" element={<Forgotpass/>}/>
          <Route exact path="/address" element={<OrderAddress />} />
          <Route exact path="/paymentSuccess" element={<PaymentSucess />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
