import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import LoginPage from "./Pages/Login/LoginPage";
import RegisterPage from "./Pages/Register/RegisterPage";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import axios from 'axios'
import { useSelector } from "react-redux";

axios.defaults.baseURL = "http://localhost:5000/api"
axios.defaults.withCredentials = true

function App() {
  const user=useSelector((state)=>state.user)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/register" element={<RegisterPage />} />
         <Route exact path="/admin/dashboard" element={<AdminDashboard/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
