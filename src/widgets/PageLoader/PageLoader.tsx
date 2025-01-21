import { Loader } from "@/shared/ui/Loader/Loader";

import style from "./PageLoader.module.scss";

export const PageLoader = () => {
  return (
    <div className={style.PageLoader}>
      <Loader />
    </div>
  );
};
