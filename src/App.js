import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
              <Header />
              <Routes>
                  <Route path="/" element={<Home />} />
              </Routes>
          </Router>
      </header>
    </div>
  );
}

export default App;
