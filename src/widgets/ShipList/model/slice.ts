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
			if (action.payload === "nation") {
				if (state.sortOrder === "ascending") {
					state.ships.sort((a, b) => {
						if (a.nation.name !== b.nation.name) {
							return a.nation.name.localeCompare(
								b.nation.name
							);
						}
						return a.title.localeCompare(b.title);
					});
				} else {
					state.ships.sort((a, b) => {
						if (a.nation.name !== b.nation.name) {
							return b.nation.name.localeCompare(
								a.nation.name
							);
						}
						return a.title.localeCompare(b.title);
					});
				}
			}
			if (action.payload === "type") {
				if (state.sortOrder === "ascending") {
					state.ships.sort((a, b) => {
						if (a.type.name !== b.type.name) {
							return a.type.name.localeCompare(
								b.type.name
							);
						}
						return a.title.localeCompare(b.title);
					});
				} else {
					state.ships.sort((a, b) => {
						if (a.type.name !== b.type.name) {
							return b.type.name.localeCompare(
								a.type.name
							);
						}
						return a.title.localeCompare(b.title);
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
