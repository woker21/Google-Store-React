
import BodyGoogle from "../src/components/Body/BodyGoogle";
//import { useState } from "react";
import { SeeDetail } from "./components/SeeDetail";
import { CartTitle } from "./components/Cart";
import { CartItem } from "./components/CartItem";
import { CartSummary } from "./components/CartSummary";
import NavBar from "./components/navbar/Navbar";
import { BrowserRouter as Router } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <header>
        <NavBar />
      </header>
      <main>
      <SeeDetail />
      <BodyGoogle />
      </main>

    <section>
      <CartTitle/>
      <CartItem/>
      <CartSummary/>
    </section>

    <footer className="footer">
    </footer>
    
    </Router>
  );
}

export default App;

