import { useEffect, useState } from "react";
import { PageValues } from "../types";
import { useSelector } from "react-redux";
import { RootState } from "@/store";


export const usePagination = (initialStart = 0, pageSize = 10) => {
  const [pageValues, setPageValues] = useState<PageValues>({
    start: initialStart,
    end: pageSize,
  });

  const ship = useSelector((state: RootState) => state.ships);

  useEffect(() => {
    setPageValues({
      start: 0,
      end: pageSize,
    });
  }, [ship])

  const handleNextPage = () => {
    setPageValues((prev: PageValues) => ({
      start: prev.start + pageSize,
      end: prev.end + pageSize,
    }));
  };

  const handleBackPage = () => {
    setPageValues((prev: PageValues) => ({
      start: prev.start - pageSize,
      end: prev.end - pageSize,
    }));
  };

  return { pageValues, handleNextPage, handleBackPage };
};
