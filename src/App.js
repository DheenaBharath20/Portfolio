import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Header from './components/Header';
import Particles from 'react-particles-js';
import Footer from './components/Footer';


function App() {
  return (
      <>
      < Particles
          params={{
            particles: {
              number: {
                value: 30,
                density: {
                  enable: true, 
                  value_area : 900
                }
              },
              shape:{
                type: "circle",
                stroke: {
                  width: 6,
                  color: "#fb9ab00"
                }
              }
            }
          }}
      />
      <Navbar/>
      <Header/>
      <Footer/>
      </>
  );
}

export default App;
