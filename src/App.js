import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './Redux/productSlice';

// Import Components
import MainLayout from './component/MainLayout/MainLayout';
import CartPage from './pages/CartPage';
import ProductPage from './pages/ProductPage';
import ProductDetail from './pages/ProductDetail';
import Navbar from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';

function App() {
  const dispatch = useDispatch();
  const { items, isLoading, isError } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<MainLayout items={items} />} />

        {/* Cart Page with Navbar and Footer */}
        <Route path="/cart" element={
          <>
            <Navbar />
            <CartPage />
            <Footer />
          </>
        } />

        {/* Product Page with Navbar and Footer */}
        <Route path="/product" element={
          <>
            <Navbar />
            <ProductPage items={items} />
            <Footer />
          </>
        } />

        {/* Product Detail Page with Navbar and Footer */}
        <Route path="/product/product/:id" element={
          <>
            <Navbar />
            <ProductDetail />
            <Footer />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
