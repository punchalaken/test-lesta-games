import { Loader } from "@shared/ui/Loader/Loader";
import { ShipCard } from "@entities/ships";
import { useEffect } from "react";
import { Pagination } from "@widgets/Pagination";
import { usePagination } from "../model/hooks/usePagination";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useFetchShips } from "../model/hooks/useFetchShips";

import style from "./ShipList.module.scss";

export const ShipList = () => {
  const { loading, error } = useFetchShips();

  const { pageValues, handleNextPage, handleBackPage } = usePagination();

  const ships = useSelector((state: RootState) => {
    let filteredShips = state.ships.ships;

    if (state.ships.filterByLevel !== null) {
      filteredShips = filteredShips.filter(
        (ship) => ship.level === state.ships.filterByLevel,
      );
    }
    if (state.ships.filterByNation) {
      filteredShips = filteredShips.filter(
        (ship) => ship.nation.name === state.ships.filterByNation,
      );
    }

    if (state.ships.filterByType) {
      filteredShips = filteredShips.filter(
        (ship) => ship.type.name === state.ships.filterByType,
      );
    }

    if (state.ships.filterByTitle) {
      filteredShips = filteredShips.filter((ship) =>
        ship.title.toLowerCase().includes(state.ships.filterByTitle!.toLowerCase()),
      );
    }
    return filteredShips;
  });

  useEffect(() => {}, [ships]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Ошибка загрузки данных {error.message}</div>;
  }

  return (
    <section className={style.ShipList}>
      {ships.slice(pageValues.start, pageValues.end)?.map((item, index) => {
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
