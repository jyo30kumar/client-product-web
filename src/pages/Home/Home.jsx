import React, { useState } from "react";
import "./home.css";
//components
import Slider from "../../components/Sliders/Slider";
import Collection from "../../components/Collection/Collection";
import ProductDisplay from "../../components/ProductDisplay/ProductDisplay";

const Home = () => {
  const [category, setCategory] = useState(1);
  return (
    <>
      <div className="home">
        <Slider />
        <div className="collection-container">
          <Collection category={category} setCategory={setCategory} />
          <ProductDisplay category={category} />
        </div>
      </div>
    </>
  );
};

export default Home;
