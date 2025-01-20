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
			if (action.payload === "level") {
				if (state.sortOrder === "ascending") {
					state.ships.sort((a, b) => {
						return a.level - b.level;
					});
				} else {
					state.ships.sort((a, b) => {
						return b.level - a.level;
					});
				}
			}
			if (action.payload === "nation") {
				if (state.sortOrder === "ascending") {
					state.ships.sort((a, b) => {
						return a.nation.name.localeCompare(
							b.nation.name
						);
					});
				} else {
					state.ships.sort((a, b) => {
						return b.nation.name.localeCompare(
							a.nation.name
						);
					});
				}
			}
			if (action.payload === "type") {
				if (state.sortOrder === "ascending") {
					state.ships.sort((a, b) => {
						return a.type.name.localeCompare(b.type.name);
					});
				} else {
					state.ships.sort((a, b) => {
						return b.type.name.localeCompare(a.type.name);
					});
				}
			}
		},
		setOrderList(
			state,
			action: PayloadAction<"ascending" | "descending">
		) {
			state.sortOrder =
				state.sortOrder === "ascending"
					? "descending"
					: "ascending";
			if (action.payload === "ascending") {
				state.sortOrder = "ascending";
			} else {
				state.sortOrder = "descending";
			}
		},
	},
});

export const { setShip, setSortBy, setOrderList } =
	shipsSlice.actions;
export default shipsSlice.reducer;
