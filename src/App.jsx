import { Routes, Route } from "react-router-dom";
// import components
import TabBar from "./components/TabBar/TabBar";
// import pages 
import Home from "./pages/Home/Home";
import Cart from './pages/Cart/Cart';
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";

// import the custom hook
import useViewportHeight from "./hooks/useViewportHeight";
// import css
import "./App.css";


function App() {

  useViewportHeight();

  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/place-order" element={<PlaceOrder />} />
        </Routes>
        <TabBar />
      </main>
    </>
  );
}

export default App;
