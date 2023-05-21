import "./App.css";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import GetStarted from "./components/GetStarted";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Residencies from "./components/Residencies";
import Sponsors from "./components/Sponsors";
import Value from "./components/Value";

function App() {
  return (
    <div className="App">
      <div className="hero-header_container">
        <Header />
        <Hero />
      </div>
      <Sponsors />
      <Residencies />
      <Value />
      <Contacts />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
