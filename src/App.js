import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import LoginPage from "./Pages/Login/LoginPage";
import RegisterPage from "./Pages/Register/RegisterPage";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import axios from "axios";

import UserCart from "./Pages/UserCart/UserCart";
import ProductPage from "./Pages/ProductPage/ProductPage";
import SearchPage from "./Pages/SearchPage/SearchPage";

axios.defaults.baseURL = "http://localhost:5000/api";
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/register" element={<RegisterPage />} />
          <Route exact path="/admin/dashboard" element={<AdminDashboard />} />
          <Route exact path="/cart" element={<UserCart/>} />
          <Route exact path="/product/:id" element={<ProductPage/>}/>
          <Route exact path="/search/:search" element={<SearchPage/>}/>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
