import { Provider } from 'react-redux';
import store from './redux/store';
import Routes from './routes';
import NavBar from './components/common/Navbar';
import Footer from './components/common/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <NavBar />
      <Routes />
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
