import { ProductItem } from "../ProductItem/ProductItem";
import "./productDisplay.css";
import { productItems } from "../../assets/assests.js";

const ProductDisplay = ({ category }) => {
  return (
    <>
      <div className="image-container">
        {productItems.map(
          (item) =>
            category == item.categId && (
              <ProductItem
                key={item.id}
                id={item.id}
                image={item.image}
                name={item.name}
                unit={item.unit}
                price={item.price}
                quantity={item.quantity}
              />
            )
        )}
      </div>
    </>
  );
};

export default ProductDisplay;
