import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducers";

const filterInitialState = {
  products: [],
  onlyInStock: false,
  bestSellerOnly: false,
  sortBy: null,
  ratings: null,
};

const FilterContext = createContext(filterInitialState);

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, filterInitialState);

  function initialProductList(products) {
    dispatch({
      type: "PRODUCT_LIST",
      payload: {
        products: products,
      },
    });
  }

  const filteredProductList = rating(
    sort(in_stock(bestSeller(state.products)))
  );

  function sort(products) {
    if (state.sortBy === "lowtohigh") {
      return products.sort((a, b) => Number(a.price) - Number(b.price));
    }
    if (state.sortBy === "hightolow") {
      return products.sort((a, b) => Number(b.price) - Number(a.price));
    }
    return products;
  }

  function rating(products) {
    if (state.ratings === "4STARTSABOVE") {
      return products.filter((products) => products.rating >= 4);
    }
    if (state.ratings === "3STARTSABOVE") {
      return products.filter((products) => products.rating >= 3);
    }
    if (state.ratings === "2STARTSABOVE") {
      return products.filter((products) => products.rating >= 2);
    }
    if (state.ratings === "1STARTSABOVE") {
      return products.filter((products) => products.rating >= 1);
    }
    return products;
  }

  function bestSeller(products) {
    return state.bestSellerOnly
      ? products.filter((product) => product.best_seller === true)
      : products;
  }
  function in_stock(products) {
    return state.onlyInStock
      ? products.filter((product) => product.in_stock === true)
      : products;
  }

  const value = {
    products: filteredProductList,
    initialProductList,
    state,
    dispatch,
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};

export const useFilter = () => {
  return useContext(FilterContext);
};
