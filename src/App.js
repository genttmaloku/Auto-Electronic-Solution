import './App.css';
import Header from './components/Header/Header';
import "./assets/js/script";
import Services from './components/Services/Services';
import About from './components/About/About';
import Qualities from './components/Qualities/Qualities';
import Features from './components/Features/Features';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollToTopButton from './components/ScrollButton/ScrollToTopButton';

function App() {
  return (
    <div className="App">
      <Header />
      <Services />
      <About />
      {/* <Qualities /> */}
      <Features />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTopButton/>
    </div>
  );
}

export default App;
