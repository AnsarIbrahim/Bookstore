import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import HomePage from './components/HomePage';
import CategoriesPage from './components/CatogriesPage';
import Navigation from './components/Navigation';
import store from './redux/Store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/categories" element={<CategoriesPage />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
