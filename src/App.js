import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./pages/Home/Index";
import Event from "./pages/Event/Index";
import About from "./pages/About/Index";
import Museum from "./pages/Museum/Index";
import Article from "./pages/Article/Index";
import DetailMuseum from "./pages/Detailmuseum/Index";
import DetailArtikel from "./pages/DetailArtikel/Index";
import Wayang from "./pages/Wayang/Index";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<Event />} />
        <Route path="/about" element={<About />} />
        <Route path="/museum" element={<Museum />} />
        <Route path="/article" element={<Article />} />
        <Route path="/wayang" element={<Wayang />} />
        <Route path="/detailmuseum" element={<DetailMuseum />} />
        <Route path="/detailartikel" element={<DetailArtikel />} />
      </Routes>
    </Router>
  );
};

export default App;
