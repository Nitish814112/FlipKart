import './App.css';
import MainLayout from './component/MainLayout/MainLayout';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './Redux/productSlice';

function App() {
  const dispatch = useDispatch();
  const { items, isLoading, isError } = useSelector((state) => state.products); // ✅ Access only `products` state

  useEffect(() => {
    dispatch(fetchProducts()); // ✅ Fetch products on mount
  }, [dispatch]);

  console.log("Products:", items); // ✅ Logs fetched products

if(isLoading) return <h1>Loading...</h1>

  return (
    <MainLayout items={items} />
  );
}

export default App;
