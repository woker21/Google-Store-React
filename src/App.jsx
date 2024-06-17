//import { useState } from "react";
import { FooterSM } from "./components/FooterSM";
import { FooterTerm } from "./components/FooterTerm";
import { SeeDetail } from "./components/SeeDetail";
import { CartTitle } from "./components/Cart";
import { CartItem } from "./components/CartItem";
import { CartSummary } from "./components/CartSummary";

import "./App.css";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <>

    <header>
    
    </header>


    <main>
      <SeeDetail/>
      
    </main>

    <section>
      <CartTitle/>
      <CartItem/>
      <CartSummary/>
    </section>


    <footer className="footer">
      <FooterTerm/>
      <FooterSM />
      </footer>

    </>
  );
}

export default App;
