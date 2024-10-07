import "./collection.css";
import { collection } from "../../assets/assests";
import { useHorizontalHook } from "../../hooks/useHorizontalHook.js";

const Collection = ({ category, setCategory }) => {
  const scrollContainerRef = useHorizontalHook();
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
              <img
                className="imgae-wrapper"
                src={cl.image}
                alt={cl.name}
                loading="lazy"
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
