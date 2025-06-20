
import Navbar from "./features/dashboard/components/navbar/Navbar";
import Carousel from "./features/dashboard/components/carousel/Carousel";
import Footer from "./features/dashboard/components/footer/footer";
import Contact from "./features/dashboard/components/contact/Contact";
import RelojesGrid from "./features/dashboard/components/card/RelojesGrid";
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
