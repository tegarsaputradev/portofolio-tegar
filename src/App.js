import { BrowserRouter } from "react-router-dom";
import "../src/css/App.scss";
import Footer from "./Component/Footer";
import Hero from "./Component/Hero";
import MyProject from "./Component/MyProject";
import Navbar from "./Component/Navbar";
import Riwayat from "./Component/Riwayat";
import Basic from "./Component/Basic";

function App() {
  return (
    <div className="container-main">
      <BrowserRouter>
        <Navbar />
        <section id="hero">
          <Hero />
        </section>
        <div className="container-content">
          <section id="basic">
            <Basic />
          </section>
          <section id="riwayat">
            <Riwayat />
          </section>
          <section id="myproject">
            <MyProject />
          </section>
        </div>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
