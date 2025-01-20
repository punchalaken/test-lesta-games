import { useQuery } from "@apollo/client";
import { GET_VEHICLES } from "@shared/api/graphql/vehicles";
import { Ship } from "@entities/ships/model/types";
import { Loader } from "@shared/ui/Loader/Loader";
import { ShipCard } from "@entities/ships";
import { useEffect, useState } from "react";
import { Pagination } from "@widgets/Pagination";
import { usePagination } from "@entities/ships/model/hooks/usePagination";

import style from "./ShipList.module.scss";

export const ShipList = () => {
	const { data, loading, error } = useQuery(GET_VEHICLES);
	const [sortedShips, setSortedShips] = useState<Ship[]>([]);
	const { pageValues, handleNextPage, handleBackPage } =
		usePagination(0, 10);

	useEffect(() => {
		if (data?.vehicles) {
			const vehicles = [...data.vehicles];

			const sorted = vehicles.sort(
				(item1, item2) => item1.level - item2.level
			);
			setSortedShips(sorted);
		}
	}, [data]);

	if (loading) {
		return <Loader />;
	}

	if (error) {
		return <div>Ошибка загрузки данных {error.message}</div>;
	}

	return (
		<section className={`${style.ShipList}`}>
			{sortedShips
				.slice(pageValues.start, pageValues.end)
				?.map((item, index) => {
					return <ShipCard item={item} key={index} />;
				})}
			<Pagination
				arrayLenght={sortedShips.length}
				pageValues={pageValues}
				handleBackPage={handleBackPage}
				handleNextPage={handleNextPage}
			></Pagination>
		</section>
	);
};
