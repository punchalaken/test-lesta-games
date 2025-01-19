import { useQuery } from "@apollo/client";
import { GET_VEHICLES } from "@shared/api/graphql/vehicles";

import style from "./Ships.module.scss";
import { Ship } from "../model/types";
import { Loader } from "@/shared/ui/Loader/Loader";
import { ShipCard } from "./ShipCard";
import { useEffect, useState } from "react";
import { Button } from "@/shared/ui/Button/Button";

export const ShipList = () => {
	const { data, loading, error } = useQuery(GET_VEHICLES);
	const [sortedShips, setSortedShips] = useState<Ship[]>([]);
	const [pageValues, setPageValues] = useState({
		start: 0,
		end: 10,
	});

	const currentPage = Math.ceil(pageValues.start / 20) + 1;

	const hanleNextPage = () => {
		setPageValues({
			start: pageValues.start + 20,
			end: pageValues.end + 20,
		});
	};

	const hanleBackPage = () => {
		setPageValues({
			start: pageValues.start - 20,
			end: pageValues.end - 20,
		});
	};

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
		return <div>Попробуйте позже</div>;
	}

	return (
		<section className={`${style.ShipList}`}>
			{sortedShips
				.slice(pageValues.start, pageValues.end)
				?.map((item, index) => {
					return <ShipCard item={item} key={index} />;
				})}
			<div className={`${style.ShipList__pagination}`}>
				<Button
					onClick={hanleBackPage}
					disabled={pageValues.start === 0}
				>
					Назад
				</Button>
				<div className="">Страница {currentPage}</div>
				<Button
					onClick={hanleNextPage}
					disabled={pageValues.end >= sortedShips.length}
				>
					Вперед
				</Button>
			</div>
		</section>
	);
};
