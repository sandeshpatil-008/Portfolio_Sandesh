import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Services from './component/Services';
import Experience from './component/Experience';
import Work from './component/Work';
import Portfolio from './component/Portfolio';
import Contact from './component/Contact';
import Footer from './component/Footer';
import { themeContext } from './component/Context'
import { useContext } from 'react';
function App() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;

  return (
    <>   
     < div className='App' style={{ background: darkMode ? 'black' : '', color: darkMode ? 'white' : '', }}>
      <Navbar />
      <Home />
      <Services />
      <Experience />
      <Work />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
    </>
  );
}

export default App;
