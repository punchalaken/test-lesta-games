import { useState } from "react";
import { PageValues } from "../types";

export const usePagination = (initialStart = 0, pageSize = 10) => {
  const [pageValues, setPageValues] = useState<PageValues>({
    start: initialStart,
    end: pageSize,
  });

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
