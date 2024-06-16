
import BodyGoogle from "../src/components/Body/BodyGoogle"
//import { useState } from "react";
import { FooterSM } from "./components/FooterSM";
import { FooterTerm } from "./components/FooterTerm";
import { SeeDetail } from "./components/SeeDetail";








function App(){
  return(
  <>
    <BodyGoogle/>
    <main>
      <SeeDetail/>



    <footer className="footer">
      <FooterTerm/>
      <FooterSM />
      </footer>
    </>
  );
}

export default App 

