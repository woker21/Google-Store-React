import {ProdTitle} from "./components/ProdTitle";
import BodyGoogle from "../src/components/Body/BodyGoogle";
//import { useState } from "react";
<<<<<<< HEAD
//import  FooterSM  from "./components/FooterSM";
//import  FooterTerm  from "./components/FooterTerm";
import  {SeeDetail}  from "./components/SeeDetail";



function App(){
  return(
  <>
    <BodyGoogle/>
      <SeeDetail/>
      {/* <FooterTerm/>
      <FooterSM /> */}
=======
import { SeeDetail } from "./components/SeeDetail";
import { CartTitle } from "./components/Cart";
import { CartItem } from "./components/CartItem";
import { CartSummary } from "./components/CartSummary";
import NavBar from "./components/navbar/Navbar";
import { FooterTerm } from "./components/FooterTerm";
import { FooterSM } from "./components/FooterSM";


const App = () => {
  return (
     <>
      <header>
        <NavBar />
      </header>
      <main>
      <SeeDetail />
      <BodyGoogle />
      <ProdTitle/>
      </main>

    <section>
      <CartTitle/>
      <CartItem/>
      <CartSummary/>
    </section>
    <footer className="footer">
      <FooterSM />
      <FooterTerm/>
    </footer>
>>>>>>> 2e4e53986c6e37329da672e00ccca66c2f3f37b2
    </>
  );
}

export default App;

