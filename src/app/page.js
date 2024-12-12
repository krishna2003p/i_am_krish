import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Technology from "./components/Technology";
import Pricing from "./components/Pricing";
import Hireme from "./components/Hereme";
import Footer from "./components/Footer";

export default function Home() {
  return (
   <>
    <Header />
    <Main/>
    <About/>
    <Projects/>
    <Technology/>
    <Pricing/>
    <Hireme/>
    <Contact/>
    <Footer/>
   </>
  );
}
