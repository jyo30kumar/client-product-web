import "./collection.css";
import { collection, placeholderSrc } from "../../assets/assests";
import { useHorizontalHook } from "../../hooks/useHorizontalHook.js";
import { useState } from "react";

const Collection = ({ category, setCategory }) => {
  const scrollContainerRef = useHorizontalHook();
  const [isLoaded, setIsLoaded] = useState({});

  return (
    <>  
      <div className="category">
        <h1>Collections</h1>
        <div className="display-category" ref={scrollContainerRef}>
          {collection.map((cl) => (
            <span 
            key={cl.id}
            className={category==cl.id?"active":""}
             onClick={() =>{
              return (
                setCategory(cl.id)
              )
             }}>
              {(!isLoaded[cl.id])&&
              (<img
                className="imgae-wrapper"
                src={placeholderSrc}
                alt="placeholder"
              />)}
              <img
                className="imgae-wrapper"
                src={cl.image}
                alt={cl.name}
                loading="lazy"
                style={{
                  opacity:isLoaded[cl.id]?1:0,
                  transition:"opacity 0.5s ease-in-out"
                }}
                onLoad={()=>setIsLoaded(prev=> ({...prev,[cl.id]:true}))}
              />
              <p>{cl.name}</p>
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Collection;
