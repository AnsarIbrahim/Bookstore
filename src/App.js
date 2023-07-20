import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import HomePage from './components/Home/HomePage';
import CategoriesPage from './components/Categories/CategoriesPage';
import store from './redux/Store';

function App() {
  return (
    <div className="bg-[#f5f5f4]">
      <Provider store={store}>
        <Router>
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
