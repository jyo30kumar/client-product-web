import { Routes, Route } from "react-router-dom";
// import components
import Header from "./components/Header/Header";
import TabBar from "./components/TabBar/TabBar";
// import pages 
import Home from "./pages/Home/Home";
import Cart from './pages/Cart/Cart';

// import the custom hook
import useViewportHeight from "./hooks/useViewportHeight";
// import css
import "./App.css";


function App() {

  useViewportHeight();

  return (
    <>
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      <TabBar />
    </>
  );
}

export default App;
