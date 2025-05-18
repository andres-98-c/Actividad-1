import Navbar from './components/Navbar';
import Header from './components/Header'; // 👈 Nuevo
import Services from './components/Services'; // 👈 importa el nuevo componente
import Contact from './components/Contact'; // 👈 importamos el nuevo componente


function App() {
  return (
    <>
      <Navbar />

      <Header/>
    
      <Services/>

      <Contact/>
      
    </>
  );
}

export default App;
