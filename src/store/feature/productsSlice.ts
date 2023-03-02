import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductStructure } from "../../data/types";

const initialProductsState: ProductStructure[] = [
  {
    type: "Socks",
    price: 10,
    size: ["XS", "S", "L"],
    brand: "Cat Lovers",
    color: ["Orange"],
    isAvailable: true,
    isOnCart: false,
  },
  {
    type: "T-shirts",
    price: 35,
    size: ["M", "L", "XL"],
    brand: "Agatad@s",
    color: ["Orange", "White", "Black"],
    isAvailable: true,
    isOnCart: false,
  },
];

const productsSlice = createSlice({
  name: "products",
  initialState: initialProductsState,
  reducers: {
    loadProducts: (
      currentState,
      action: PayloadAction<ProductStructure>
    ): ProductStructure[] => [...currentState, action.payload],
  },
});

export const productsReducer = productsSlice.reducer;
export const { loadProducts: loadProductsActionCreator } =
  productsSlice.actions;
