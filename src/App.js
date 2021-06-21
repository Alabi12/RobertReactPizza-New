import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Carousel from './Components/Carousel/Carousel';
import Pizzatypes from './Components/PizzaType/Pizzatype';
import AboutPizza from './Components/AboutPizza/AboutPizza';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
     <Navbar />
    <Carousel />
    <AboutPizza />
     <Pizzatypes />
     <Footer />

    </div>
  );
}

export default App;
