import { useDispatch } from "react-redux";
import { setFilterByTitle } from "../model/shipSlice";
import { ChangeEvent } from "react";
import style from './ShipList.module.scss'

export const ShipFilterInput = () => {
    const dispatch = useDispatch();

    const handleTitleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(setFilterByTitle(event.target.value || null));
      };

  return (
    <input 
        type="text"
        placeholder="Введите название корабля"
        onChange={handleTitleFilterChange}
        className={style.ShipList__filter__input}
    />
  );
};