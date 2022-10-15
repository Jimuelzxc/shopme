import Home from './pages/Home';
import Product from './pages/Product';
import Category from './pages/Category';
import Search from './pages/Search';    
import { useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route index path="/home" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/category/:product" element={<Category />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;
