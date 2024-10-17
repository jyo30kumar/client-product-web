import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// import components
import TabBar from "./components/TabBar/TabBar";
// import pages
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Login from "./pages/Login/Login";

// import the custom hook
import useViewportHeight from "./hooks/useViewportHeight";
// import css
import "./App.css";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  useViewportHeight();

  return (
    <>
      <main>
        <Routes>
          {!isLoggedIn ? (
            <Route path="*" element={<Navigate to="/login" />} />
          ) : (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/place-order" element={<PlaceOrder />} />
            </>
          )}
          <Route path="/login" element={<Login />} />
        </Routes>
        {isLoggedIn && <TabBar />}
      </main>
    </>
  );
}

export default App;
