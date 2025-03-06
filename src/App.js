import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
import Login from './pages/Login';

function App() {
  const dispatch = useDispatch();
  const { items, isLoading, isError } = useSelector((state) => state.products);
  const isLoggedIn = useSelector((state) => state.user.email !== null) || localStorage.getItem("authToken") !== null;


  useEffect(() => {
    if (items.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, items.length]);

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error loading products.</h1>;

  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<MainLayout items={items} />} />

        {/* Protected Cart Page (Only Accessible When Logged In) */}
     
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

        {/* Login Page */}
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
