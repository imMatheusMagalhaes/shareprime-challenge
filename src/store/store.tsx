import { configureStore } from "@reduxjs/toolkit";
import ItemReducer from "./item.store";
export const store = configureStore({
  reducer: {
    item: ItemReducer,
  },
});
