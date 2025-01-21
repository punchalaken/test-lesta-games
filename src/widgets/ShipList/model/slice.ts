import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Ship } from "@entities/ships/model/types";

interface ShipsState {
  ships: Ship[];
  sortOrder: "ascending" | "descending";
}

const initialState: ShipsState = {
  ships: [],
  sortOrder: "ascending",
};

const shipsSlice = createSlice({
  name: "ships",
  initialState,
  reducers: {
    setShip(state, action) {
      state.ships = action.payload;
    },
    setSortBy(state, action: PayloadAction<string>) {
      const field = action.payload;

      if (field === "level") {
        if (state.sortOrder === "ascending") {
          state.ships.sort((a, b) => {
            if (a.level !== b.level) {
              return a.level - b.level;
            }
            return a.title.localeCompare(b.title);
          });
        } else {
          state.ships.sort((a, b) => {
            if (a.level !== b.level) {
              return b.level - a.level;
            }
            return a.title.localeCompare(b.title);
          });
        }
      }
      if (field === "type" || field === "nation") {
        if (state.sortOrder === "ascending") {
          state.ships.sort((a, b) => {
            const aValue = a[field].name;
            const bValue = b[field].name;
            if (aValue !== bValue) {
              return aValue.localeCompare(bValue);
            }
            return a.title.localeCompare(b.title);
          });
        } else {
          state.ships.sort((a, b) => {
            const aValue = a[field].name;
            const bValue = b[field].name;
            if (aValue !== bValue) {
              return bValue.localeCompare(aValue);
            }
            return a.title.localeCompare(b.title);
          });
        }
      }
    },
    setOrderList(state, action: PayloadAction<"ascending" | "descending">) {
      state.sortOrder =
        state.sortOrder === "ascending" ? "descending" : "ascending";
      if (action.payload === "ascending") {
        state.sortOrder = "ascending";
      } else {
        state.sortOrder = "descending";
      }
    },
  },
});

export const { setShip, setSortBy, setOrderList } = shipsSlice.actions;
export default shipsSlice.reducer;
