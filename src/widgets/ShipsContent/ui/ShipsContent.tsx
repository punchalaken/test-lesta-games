import { useQuery } from "@apollo/client";
import style from "./ShipsContent.module.scss";
import { GET_VEHICLES } from "@/shared/api/graphql/vehicles";

export const ShipsContent = () => {
	const { data, loading, error } = useQuery(GET_VEHICLES);
    console.log(data);

	return <div className={`${style.ShipsContent}`}></div>;
};
