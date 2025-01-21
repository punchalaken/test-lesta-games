import style from "./NotFoundPage.module.scss";
import { AppLink } from "@/shared/ui/AppLink/AppLink";

export const NotFoundPage = () => {
  return (
    <div className={style.NotFoundPage}>
      <span className={style.NotFoundText}>Страница не найдена</span>
      <AppLink to={"/"}>На главную</AppLink>
    </div>
  );
};

export default NotFoundPage;
