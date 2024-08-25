import { Link } from "react-router-dom";
import { useCart } from "../../../context";

export const CartCard = ({product}) => {
  const { removeFromCart } = useCart();

  return (
    <div className="flex justify-between items-center border-b dark:border-slate-700 max-w-4xl m-auto p-2 mb-5">
      <div className="flex items-center">
        <Link to={`/products/${product.id}`}>
          <img className="w-32 rounded" src={product.poster} alt={product.name} />
        </Link>
        <div className="ml-4 flex-1">
          <Link to={`/products/${product.id}`}>
            <p className="text-lg dark:text-slate-200">{product.name}</p>
          </Link>
          <button 
            onClick={() => removeFromCart(product)} 
            className="text-red-400 hover:text-red-600 flex items-center mt-2"
          >
            <i className="bi bi-trash3-fill text-xl mr-1"></i> Remove Ebook
          </button>
        </div>
      </div>
      <div className="text-lg dark:text-slate-200 text-right">
        <span>${product.price}</span>
      </div>
    </div>
  );  
}