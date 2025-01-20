import { useQuery } from "@apollo/client";
import { GET_VEHICLES } from "@shared/api/graphql/vehicles";
import { useDispatch } from "react-redux";
import { setShip } from "@widgets/ShipList/model/slice";
import { useEffect } from "react";

export const useFetchAndUpdateShips = () => {
	const dispatch = useDispatch();
	const { data, loading, error } = useQuery(GET_VEHICLES);

	useEffect(() => {
		if (data?.vehicles) {
			const vehicles = [...data.vehicles];
			dispatch(setShip(vehicles));
		}
	}, [data, dispatch]);

	return { data, loading, error };
};
