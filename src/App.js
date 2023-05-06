import './assets/styles/global.css'
import Header from './components/Header';
import Slide from './components/Slide';
import Movies from './components/Movies';
import Footer from './components/Footer';
function App() {
 
  return (
    <div className="App">
        <Header/>
        <Slide/>
        <Movies/>
        <Footer/>
    </div>
  );
}

export default App;
