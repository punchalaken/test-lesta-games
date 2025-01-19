import { createSlice } from "@reduxjs/toolkit";
import { Ship } from "./types";

interface ShipsState {
	ships: Ship[];
	filters: {
		level: number | null;
		nation: string | null;
		type: string | null;
	};
}

const shipsSlice = createSlice({
	name: "ships",
	initialState: {
        ships: [], 
        filters: {
            level: null,
            nation: null,
            type: null,
        }
    } as ShipsState,
    reducers: {
        setShip(state, action) {
            state.ships = action.payload;
        }
    }
});


export const { setShip } = shipsSlice.actions;
export default shipsSlice.reducer;