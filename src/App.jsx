import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import TabBar from "./components/TabBar/TabBar";

import "./App.css";

function App() {
  // set height dynamically to window according to different screen 
  useEffect(()=>{
    const setVh = () =>{
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh',`${vh}px`)
    }
    setVh();
    window.addEventListener('resize',setVh);
    return()=>{
      window.removeEventListener('resize',setVh);
    }
  },[]);

  return (
    <>
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <TabBar />
    </>
  );
}

export default App;
