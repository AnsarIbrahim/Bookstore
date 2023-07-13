import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import CategoriesPage from './components/CatogriesPage';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categories" element={<CategoriesPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
