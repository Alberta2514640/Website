import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Work from './pages/Work';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
              <Header />
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/work" element={<Work />} />
              </Routes>
          </Router>
          <ToastContainer />
      </header>
    </div>
  );
}

export default App;
