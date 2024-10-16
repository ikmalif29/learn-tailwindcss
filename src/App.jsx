import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Headers from './components/Headers';
import Product from './components/Product';
import Footer from './components/Footer';
import Cart from './components/Cart';
import ViewCart from './components/ViewCart';

function App() {
  return (
    <Router>
      <Headers />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/view" element={<ViewCart />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;