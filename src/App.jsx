import {ProdTitle} from "./components/ProdTitle";
import BodyGoogle from "../src/components/Body/BodyGoogle";
//import { useState } from "react";
import { SeeDetail } from "./components/SeeDetail";
import { CartTitle } from "./components/Cart";
import { CartItem } from "./components/CartItem";
import { CartSummary } from "./components/CartSummary";
import NavBar from "./components/navbar/Navbar";
import { FooterTerm } from "./components/FooterTerm";
import { FooterSM } from "./components/FooterSM";
import ProdDetail  from "./components/Prod-Detail/ProdDetail";

import "./App.css";


const App = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <SeeDetail />
      <main>
        <aside>
          <BodyGoogle />
        </aside>
        <section className="product">
          <ProdTitle/>
          <ProdDetail/>
        </section>
      </main>
      <section className="cart">
        <CartTitle/>
        <CartItem/>
        <CartSummary/>
      </section>
      <footer className="footer">
        <FooterSM />
        <FooterTerm/>
      </footer>
    </>
  );
}

export default App;

