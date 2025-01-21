import { setSortBy, setOrderList } from "../model/shipSlice";
import { Button } from "@/shared/ui/Button/Button";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import style from "./ShipList.module.scss";

export const ShipSort = () => {
  const dispatch = useDispatch();

  const [sortValue, setSortValue] = useState<string>("");
  const [order, setOrder] = useState<"ascending" | "descending">("ascending");

  const sortArray = {
    ascending: "↑",
    descending: "↓",
  };

  useEffect(() => {
    dispatch(setOrderList(order));
    dispatch(setSortBy(sortValue));
  }, [sortValue, dispatch, order]);

  return (
    <div className={style.ShipList__sort}>
      <span>Отсотрировать по: </span>
      <div className={style.ShipList__sort__types}>
        <Button
          onClick={() => {
            setSortValue("level");
          }}
          style={
            sortValue === "level"
              ? {
                  backgroundColor: "var(--color-button-active)",
                }
              : {}
          }
        >
          уровню
        </Button>
        <Button
          onClick={() => {
            setSortValue("nation");
          }}
          style={
            sortValue === "nation"
              ? {
                  backgroundColor: "var(--color-button-active)",
                }
              : {}
          }
        >
          нации
        </Button>
        <Button
          onClick={() => {
            setSortValue("type");
          }}
          style={
            sortValue === "type"
              ? {
                  backgroundColor: "var(--color-button-active)",
                }
              : {}
          }
        >
          типу
        </Button>
      </div>

      <Button
        onClick={() => {
          setOrder((prevOrder) =>
            prevOrder === "ascending" ? "descending" : "ascending",
          );
        }}
      >
        {`порядок ${sortArray[order]}`}
      </Button>
    </div>
  );
};
