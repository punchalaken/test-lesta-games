import { Loader } from "@shared/ui/Loader/Loader";
import { ShipCard } from "@entities/ships";
import { useEffect } from "react";
import { Pagination } from "@widgets/Pagination";
import { usePagination } from "../model/hooks/usePagination";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useFetchAndUpdateShips } from "../model/hooks/useFetchShips";
import { ShipSort } from "./ShipSort";

import style from "./ShipList.module.scss";

export const ShipList = () => {
	const { loading, error } = useFetchAndUpdateShips();

	const { pageValues, handleNextPage, handleBackPage } =
		usePagination(0, 10);

	const ships = useSelector(
		(state: RootState) => state.ships.ships
	);

	useEffect(() => {}, [ships]);

	if (loading) {
		return <Loader />;
	}

	if (error) {
		return <div>Ошибка загрузки данных {error.message}</div>;
	}

	return (
		<section className={style.ShipList}>
			<ShipSort />
			{ships
				.slice(pageValues.start, pageValues.end)
				?.map((item, index) => {
					return <ShipCard item={item} key={index} />;
				})}
			<Pagination
				arrayLenght={ships.length}
				pageValues={pageValues}
				handleBackPage={handleBackPage}
				handleNextPage={handleNextPage}
			></Pagination>
		</section>
	);
};
