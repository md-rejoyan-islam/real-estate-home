import About from "./components/About";
import Avaliable from "./components/Avaliable/Avaliable";
import Contact from "./components/Contact/Contact";
import CTA from "./components/CTA";
import Faq from "./components/Faq/Faq";
import Features from "./components/Features/Features";
import Hero from "./components/Hero";
import Footer from "./components/shared/Footer/Footer";
import Navbar from "./components/shared/Navbar";
import Team from "./components/Team/Team";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Avaliable />
      <About />
      <CTA />
      <Faq />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
