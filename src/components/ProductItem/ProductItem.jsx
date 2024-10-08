import { useContext, useState } from "react";
import "./productItem.css";
import StoreContext from "../../context/StoreContext";
//font - awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { placeholderSrc } from "../../assets/assests";

export const ProductItem = ({ id, image, name, unit, price, quantity }) => {
  const { cartItem, addToCart, removeToCart } = useContext(StoreContext);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="image-wrapper">
      {(!isLoaded)&&(
        <img src={placeholderSrc} alt={name} loading="lazy" />  
      )}
      <img src={image} alt={name} loading="lazy" style={{opacity:isLoaded?1:0, transition:"opacity 0.5s ease-in-out" }} onLoad={()=>setIsLoaded(true)} />
      <p>{name} asdfsd sd sa fs saf</p>
      <p className="quantity">{quantity + " " + unit}</p>
      <div className="price-box">
        <p className="price">{price}</p>
        <span className="product-item-counter">
          {!cartItem[id] ? (
            <FontAwesomeIcon
              icon={faPlus}
              className="fa-solid fa-plus"
              onClick={() => addToCart(id)}
            />
          ) : (
            <div className="count-box">
              <FontAwesomeIcon
                icon={faMinus}
                className="remove-item"
                onClick={() => removeToCart(id)}
              />
              <span className="count-text">{cartItem[id]}</span>
              <FontAwesomeIcon
                icon={faPlus}
                className="add-item"
                onClick={() => addToCart(id)}
              />
            </div>
          )}
        </span>
      </div>
    </div>
  );
};
