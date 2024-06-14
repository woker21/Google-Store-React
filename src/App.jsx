
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Earbuds from './pages/Earbuds';
import Watches from './pages/Watches';
import Cart from './pages/Cart';

const App = () => {
  return (
    <Router>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Earbuds />} />
          <Route path="/earbuds" element={<Earbuds />} />
          <Route path="/watches" element={<Watches />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;



