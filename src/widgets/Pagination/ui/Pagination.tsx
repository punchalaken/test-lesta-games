import { Button } from "@shared/ui/Button/Button";
import { FC } from "react";

import style from "./Pagination.module.scss";

interface PaginationProps {
  pageValues: {
    start: number;
    end: number;
  };
  arrayLenght: number;
  handleNextPage: () => void;
  handleBackPage: () => void;
}

export const Pagination: FC<PaginationProps> = ({
  arrayLenght,
  pageValues,
  handleNextPage,
  handleBackPage,
}) => {
  const currentPage = Math.ceil(pageValues.start / 10) + 1;
  const lastPage = Math.ceil(arrayLenght / 10);
  const disabledBack = pageValues.start === 0;
  const disabledNext = pageValues.end >= arrayLenght;

  return (
    <div className={style.Pagination}>
      <Button onClick={handleBackPage} disabled={disabledBack}>
        Назад
      </Button>
      <div className={style.Pagination__page}>
        Страница {currentPage} / {lastPage}
      </div>
      <Button onClick={handleNextPage} disabled={disabledNext}>
        Вперед
      </Button>
    </div>
  );
};
