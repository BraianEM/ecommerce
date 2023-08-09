import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./Pages/NotFound/NotFound";
import Contact from "./Pages/Contact/Contact";
import Store from "./Pages/Store/Store";
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
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/store" element={<Store />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
