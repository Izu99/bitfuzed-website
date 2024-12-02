import About from "./components/About";
import Blog from "./components/Blog";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Vacancies from "./components/Vacancies";
import Work from "./components/Work";

export default function App() {
  return (
    <div className="">
      <Navbar /> 
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Blog />
      <Vacancies />
      <Work />
      <Form />
      <ContactUs />
      <Footer />
    </div>
  )
}