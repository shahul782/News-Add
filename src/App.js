import { Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import "./App.css";
import Home from "./Component/Home";
import Contact from "./Component/Contact";
import Login from "./Component/Login";
import Matrimonial from "./BookingCategory/Matrimonial";
import heading from "./assets/logo.jpg";
import Chennai from "./BookingCategory/Chennai";
import Header from "./Component/Header";
import Property from "./BookingCategory/Property";
import Rent from "./BookingCategory/Rent";
import Hyderabad from "./BookingCategory/Hyderabad";
import Karnataka from "./BookingCategory/Karnataka";

function App() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
      <nav className="flex justify-between items-center  p-4 bg-gray-200">
        <div className="flex items-center">
          <img src={heading} alt="logo" className="w-50 h-50" />
        </div>
        <div className={`sm:hidden ${isMenuOpen ? "hidden" : "block"}`}>
          <button onClick={handleMenuToggle} className="text-2xl">
            <FaBars />
          </button>
        </div>
        <ul className={`flex-col sm:flex-row sm:flex space-x-4 ${isMenuOpen ? "flex" : "hidden"} sm:flex`}>
          <li
            className="px-1 cursor-pointer hover:bg-gray-300 rounded"
            onClick={() => {
              navigate("/Contact");
              setIsMenuOpen(false);
            }}
          >
            Contact
          </li>
          <li
            className="px-1 cursor-pointer hover:bg-gray-300 rounded"
            onClick={() => {
              navigate("/home");
              setIsMenuOpen(false);
            }}
          >
            Home
          </li>
          <li
            className="px-1 cursor-pointer hover:bg-gray-300 rounded"
            onClick={() => {
              navigate("/login");
              setIsMenuOpen(false);
            }}
          >
            Login
          </li>
          <li
            className="px-1 cursor-pointer hover:bg-gray-300 rounded"
            onClick={() => {
              navigate("/");
              setIsMenuOpen(false);
            }}
          >
            Back
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/matrimonial" element={<Matrimonial />} />
        <Route path="/chennai" element={<Chennai />} />
        <Route path="/property" element={<Property />} />
        <Route path="/rent" element={<Rent />} />
        <Route  path="/hyderabad" element={<Hyderabad/>}/>
        <Route  path="/karnataka" element={<Karnataka/>}/>
      </Routes>
    </div>
  );
}

export default App;
