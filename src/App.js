import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home";
import Contact from "./Component/Contact";
import Login from "./Component/Login";
import Matrimonial from "./BookingCategory/Matrimonial";
import heading from "./assets/logo.jpg";
import Chennai from "./BookingCategory/Chennai";
import Header from "./Component/Header";
import Property from "./BookingCategory/Property";
import PropertyRent from "./BookingCategory/Rent";
import Rent from "./BookingCategory/Rent";
function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <nav className="flex justify-between p-4 bg-gray-200 ">
        <ul className="flex">
        <li
            className="px-1 cursor-pointer hover:bg-gray-300 rounded mr-5 -ml-3"
            onClick={() => navigate("/")}
          >
            Back
          </li>
          <img src={heading} alt="img" />
        </ul>
        <ul className="flex space-x-4">
          <li
            className="px-1 cursor-pointer hover:bg-gray-300 rounded"
            onClick={() => navigate("/Contact")}
          >
            Contact
          </li>
          <li
            className="px-1 cursor-pointer hover:bg-gray-300 rounded"
            onClick={() => navigate("/home")}
          >
            Home
          </li>
          <li
            className="px-1 cursor-pointer hover:bg-gray-300 rounded"
            onClick={() => navigate("/login")}
          >
            Login
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
        <Route path="/property" element={<Property/>}/>
        <Route path="rent" element={<Rent/>}/>

      </Routes>
    </div>
  );
}

export default App;
