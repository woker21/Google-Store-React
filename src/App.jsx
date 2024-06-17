//import { useState } from "react";
import { FooterSM } from "./components/FooterSM";
import { FooterTerm } from "./components/FooterTerm";
import {ProdTitle} from "./components/ProdTitle";
//import { SeeDetails } from "./components/SeeDetails";

import "./App.css";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <>

    <header>
    
    </header>



    <main>
     <ProdTitle></ProdTitle>
    </main>


    <footer className="footer">
      <FooterTerm/>
      <FooterSM />
      </footer>
    </>
  );
}

export default App;
