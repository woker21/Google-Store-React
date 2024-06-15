//import { useState } from "react";
import { FooterSM } from "./components/FooterSM";
import { FooterTerm } from "./components/FooterTerm";
import { SeeDetail } from "./components/SeeDetail";

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


    <footer className="footer">
      <FooterTerm/>
      <FooterSM />
      </footer>
    </>
  );
}

export default App;
