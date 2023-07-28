import About from "./Components/Pages/About/About";
import Home from "./Components/Pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./Components/Pages/NotFound/NotFound";
import Contact from "./Components/Pages/Contact/Contact";
import Store from "./Components/Pages/Store/Store";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import '../src/App.css';


function App() {
  return (
    <div className="bg bg-dbg-100 min-h-screen">
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/Store" element={<Store />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
