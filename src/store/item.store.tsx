import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import initialItems from "../mocks/items.json"
export interface IItems {
  title: string;
  order: number;
  image: string;
  link: string;
}

const initialState: IItems[] = initialItems

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<IItems>) => {
      state.push(action.payload);
    },
  },
});

export const { addItem } = itemsSlice.actions;
export default itemsSlice.reducer;
