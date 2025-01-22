import { FC } from "react";
import style from "./ShipList.module.scss";

interface ShipsFilterOptionsProps {
  value: string | number;
  text: string;
}

export const ShipsFilterOptions: FC<ShipsFilterOptionsProps> = ({
  value,
  text,
}) => {
  return (
    <option value={value} className={style.ShipsFilterOptions}>
      {text}
    </option>
  );
};
