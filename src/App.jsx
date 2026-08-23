import { Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./views/Home/Home";
import About from "./views/About/About";
import Login from "./views/Login/Login";
import Signup from "./views/Signup/Signup";
import Contact from "./views/Contact/Contact";
import Doners from "./views/Donors/Donors";
import Findblood from "./views/FindBlood/FindBlood";
import Bloodbanks from "./views/BloodBanks/BloodBanks";
import Hospitals from "./views/Hospitals/Hospitals";
import Campaigns from "./views/Campaigns/Campaigns";
import Bloodrequest from "./views/BloodRequest/BloodRequest";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/doners" element={<Doners />} />
        <Route path="/find-blood" element={<Findblood />} />
        <Route path="/blood-banks" element={<Bloodbanks />} />
        <Route path="/hospitals" element={<Hospitals />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/blood-request" element={<Bloodrequest />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
