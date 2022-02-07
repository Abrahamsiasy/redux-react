import './App.css';
import Header from './containers/Header';
import { BrowserRouter as Router, swich, Route, Routes } from 'react-router-dom';
import ProductListing from './containers/ProductListing';
import ProductDetails from './containers/ProductDetails';

export default function App() {
  return (


    <Router>
      <Header />
      <div className='container lg:mx-10'>
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/products/:programID" element={<ProductDetails />} />
        <Route> 404 NOT FOUND</Route>
      </Routes>
      </div>
    </Router>
  )
}
