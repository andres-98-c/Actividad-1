
import Navbar from "./components/navbar/Navbar";
import Carousel from "./components/carousel/Carousel";
import Footer from "./components/footer/footer";
import Contact from "./components/contact/Contact";
import RelojesGrid from "./components/card/RelojesGrid";
function App() {
  return (
    <>      
      <Navbar />
      <Carousel/>
      <RelojesGrid/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
