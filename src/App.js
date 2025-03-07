import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './Redux/productSlice';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import MainLayout from './component/MainLayout/MainLayout';
import CartPage from './pages/CartPage';
import ProductPage from './pages/ProductPage';
import ProductDetail from './pages/ProductDetail';
import OrderPage from './pages/OrderPage';
import Navbar from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';
import OrderSuccess from './pages/orderSuccess';
import LoadingPage from './LoadingPage';

function App() {
  const dispatch = useDispatch();
  const { items, isLoading, isError } = useSelector((state) => state.products);
  const isLoggedIn = useSelector((state) => state.user.email !== null) || localStorage.getItem("authToken") !== null;
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    if (items.length === 0 && retryCount < 3) {  // ✅ Retry up to 3 times
      dispatch(fetchProducts());
    }
  }, [dispatch, items.length, retryCount]);

  const handleRetry = () => {
    setRetryCount((prev) => prev + 1);
  };

  if (isLoading) return <LoadingPage />;
  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-red-500 text-xl font-bold">Error loading products. Please try again.</h1>
        <button 
          className="bg-blue-600 text-white px-4 py-2 mt-4 rounded"
          onClick={handleRetry}
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <Router>
      <ToastContainer position="top-right" autoClose={3000} />

      <Routes>
        <Route path="/" element={<MainLayout items={items} />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        
        {/* Protected Cart Page */}
        <Route 
          path="/cart" 
          element={
            <>
              <Navbar />
              {isLoggedIn ? <CartPage /> : <h2 className="text-center text-red-500 text-xl">Please log in to view your cart.</h2>}
              <Footer />
            </>
          } 
        />

        {/* Protected Order Page */}
        <Route 
          path="/order" 
          element={
            <>
              <Navbar />
              {isLoggedIn ? <OrderPage /> : <h2 className="text-center text-red-500 text-xl">Please log in to proceed with your order.</h2>}
              <Footer />
            </>
          } 
        />

        {/* Product Page */}
        <Route 
          path="/product" 
          element={
            <>
              <Navbar />
              <ProductPage items={items} />
              <Footer />
            </>
          } 
        />

        {/* Product Detail Page */}
        <Route 
          path="/product/product/:id" 
          element={
            <>
              <Navbar />
              <ProductDetail />
              <Footer />
            </>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;