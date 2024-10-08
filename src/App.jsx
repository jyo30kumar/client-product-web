import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import TabBar from "./components/TabBar/TabBar";

import "./App.css";

function App() {
  
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
