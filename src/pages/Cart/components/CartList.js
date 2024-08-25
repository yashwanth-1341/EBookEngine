import { useState } from "react";
import { CartCard } from "./CartCard";
import { Checkout } from "./Checkout";
import { useCart } from "../../../context";

export const CartList = () => {
  const [checkout, setCheckout] = useState(false);
  const { cartList, total, clearCart } = useCart();

  return (
    <>
      <div className="max-w-4xl m-auto p-2 mb-5">
        <div className="flex justify-between items-center border-b dark:border-slate-700 pb-4 mb-5">
          <h2 className="text-2xl dark:text-slate-200">Your Cart</h2>
          <button
            onClick={clearCart}
            className="text-red-400 hover:text-red-600 text-lg"
          >
            <i className="bi bi-trash3-fill text-xl mr-2"></i>Clear Cart
          </button>
        </div>

        <section>
          {cartList.map((product) => (
            <CartCard key={product.id} product={product} />
          ))}
        </section>

        <section className="max-w-4xl m-auto">
          <div className="flex flex-col p-2 border-b dark:border-slate-700 text-lg dark:text-slate-100">
            <p className="flex justify-between my-2">
              <span className="font-semibold">Total Amount:</span>
              <span>${total}</span>
            </p>
          </div>
          <div className="text-right my-5">
            <button
              onClick={() => setCheckout(true)}
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-base px-7 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              PLACE ORDER <i className="ml-2 bi bi-arrow-right"></i>
            </button>
          </div>
        </section>
      </div>

      {checkout && <Checkout setCheckout={setCheckout} />}
    </>
  );
};
