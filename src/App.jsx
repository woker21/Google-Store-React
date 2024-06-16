
import BodyGoogle from "../src/components/Body/BodyGoogle";
//import { useState } from "react";

import { SeeDetail } from "./components/SeeDetail";
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

      <footer className="footer">

      </footer>
    </Router>
  );
}

export default App;

