import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login/login";
import { RegisterForm } from "../pages/RegisterPage/RegisterForm";
import { ContactPage } from "../pages/ContactPage/ContactPage";


const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<RegisterForm />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
};

export default RoutesMain;