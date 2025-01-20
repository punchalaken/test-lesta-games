import style from "./ShipList.module.scss";
import { setSortBy, setOrderList } from "../model/slice";
import { Button } from "@/shared/ui/Button/Button";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export const ShipSort = () => {
	const dispatch = useDispatch();

	const [sortValue, setSortValue] = useState<string>("level");
	const [order, setOrder] = useState<"ascending" | "descending">(
		"ascending"
	);

	useEffect(() => {
		if (sortValue) {
			dispatch(setSortBy(sortValue));
			dispatch(setOrderList(order));
		}
	}, [sortValue, dispatch, order]);

	return (
		<div className={style.ShipList__sort}>
			<span>Отсотрировать по: </span>
			<Button
				onClick={() => {
					setSortValue("level");
				}}
			>
				уровню
			</Button>
			<Button
				onClick={() => {
					setSortValue("nation");
				}}
			>
				нации
			</Button>
			<Button
				onClick={() => {
					setSortValue("type");
				}}
			>
				типу
			</Button>
			<Button
				onClick={() => {
					setOrder((prevOrder) =>
						prevOrder === "ascending"
							? "descending"
							: "ascending"
					);
				}}
			>
				порядок
			</Button>
		</div>
	);
};
