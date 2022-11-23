import { Route, Routes } from "react-router-dom";

import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/pages/home";
import AboutUs from "./components/pages/AboutUs";
import Fallbackpage from "./components/pages/Fallbackpage";

function App() {
  return (
    <>
    <Navbar />
      <Routes>
         <Route path="/" element= {<Home />} />
         <Route path="/about" element= {<AboutUs />} />
         <Route path="/contactus" element= {<ContactUs />} />
         <Route path="/blog" element= {<Blog />} />
         <Route path="*" element= {<Fallbackpage/>} />
      </Routes>
    </>
  );
}

export default App;
