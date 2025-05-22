import Navbar from './components/Navbar';
import Header from './components/Header'; // 👈 Nuevo
import Services from './components/Services'; // 👈 importa el nuevo componente
import Contact from './components/Contact'; // 👈 importamos el nuevo componente
import Carrusel from './components/Carrusel';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />

      <Header/>
      
      <Carrusel/>
    
      <Services/>

      <Contact/>
      <Footer/>
      
    </>
  );
}

export default App;
