// src/App.jsx
import React, { useState } from "react";

import Loader from "./components/Loader";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  const [loadingDone, setLoadingDone] = useState(false);

  return (
    <>
      {!loadingDone && <Loader onComplete={() => setLoadingDone(true)} />}
      {loadingDone && (
        <BrowserRouter>
          <main className="">
             <Navbar/>
             <Hero/>
             <About/>
             <Experience/>
             <Contact/>
          </main> 
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
