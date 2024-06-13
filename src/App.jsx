import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import Earbuds from './pages/Earbuds';
import Watches from './pages/Watches';
import Cart from './pages/Cart';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/earbuds" element={<Earbuds />} />
        <Route path="/watches" element={<Watches />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;

