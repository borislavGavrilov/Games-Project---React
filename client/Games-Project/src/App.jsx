import Catalog from "./components/catalog/Catalog";
import { Routes, Route, Link } from "react-router";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";

function App() {
  return (
    <>
      <>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
        </Routes>

        <Footer />
      </>
    </>
  );
}

export default App;
