import { useDispatch } from "react-redux";
import {
  setFilterByLevel,
  setFilterByNation,
  setFilterByType,
} from "../model/shipSlice";

import style from "./ShipList.module.scss";
import { ShipsFilterOptions } from "./ShipsFilterOptions";
import { Button } from "@/shared/ui/Button/Button";

export const ShipsFilterOptionsGroup = () => {
  const dispatch = useDispatch();

  const handleLevelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(
      setFilterByLevel(
        event.target.value ? parseInt(event.target.value) : null,
      ),
    );
  };

  const handleNationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setFilterByNation(event.target.value || null));
  };

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setFilterByType(event.target.value || null));
  };

  const handleResetFilters = () => {
    dispatch(setFilterByLevel(null));
    dispatch(setFilterByNation(null));
    dispatch(setFilterByType(null));
    
    document.querySelectorAll(`.${style.ShipList__group}`).forEach((select) => {
      (select as HTMLSelectElement).value = "";
    });
  };

  const levelsArray = [
    { value: "", text: "Все уровни" },
    { value: 1, text: "Уровень 1" },
    { value: 2, text: "Уровень 2" },
    { value: 3, text: "Уровень 3" },
    { value: 4, text: "Уровень 4" },
    { value: 5, text: "Уровень 5" },
    { value: 6, text: "Уровень 6" },
    { value: 7, text: "Уровень 7" },
    { value: 8, text: "Уровень 8" },
    { value: 9, text: "Уровень 9" },
    { value: 10, text: "Уровень 10" },
    { value: 11, text: "Уровень 11" },
  ];

  const nationArray = [
    {
      value: "",
      text: "Все нации",
    },
    {
      value: "usa",
      text: "США",
    },
    {
      value: "japan",
      text: "Япония",
    },
    {
      value: "ussr",
      text: "СССР",
    },
    {
      value: "germany",
      text: "Германия",
    },
    {
      value: "uk",
      text: "Великобритания",
    },
    {
      value: "france",
      text: "Франция",
    },
    {
      value: "pan_asia",
      text: "Паназия",
    },
    {
      value: "italy",
      text: "Италия",
    },
    {
      value: "europe",
      text: "Европа",
    },
  ];

  const typeArray = [
    { value: "", text: "Все типы" },
    { value: "aircarrier", text: "Авианосец" },
    { value: "battleship", text: "Линкор" },
    { value: "cruiser", text: "Крейсер" },
    { value: "destroyer", text: "Эсминец" },
    { value: "submarine", text: "Подводная лодка" },
  ];

  return (
    <div className={style.ShipList__filter}>
      <select onChange={handleLevelChange} className={style.ShipList__group}>
        {levelsArray.map((item, index) => (
          <ShipsFilterOptions
            value={item.value}
            text={item.text}
            key={index}
          />
        ))}
      </select>

      <select onChange={handleNationChange} className={style.ShipList__group}>
        {nationArray.map((item, index) => (
          <ShipsFilterOptions
            value={item.value}
            text={item.text}
            key={index}
          />
        ))}
      </select>

      <select onChange={handleTypeChange} className={style.ShipList__group}>
        {typeArray.map((item, index) => (
          <ShipsFilterOptions
            value={item.value}
            text={item.text}
            key={index}
          />
        ))}
      </select>

      <Button onClick={handleResetFilters}>
        Сбросить фильтры
      </Button>
    </div>
  );
};
