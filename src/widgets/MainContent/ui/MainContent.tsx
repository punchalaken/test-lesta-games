import style from "./MainContent.module.scss";
import { AppLink } from "@/shared/ui/AppLink/AppLink";

export const MainContent = () => {
  return (
    <main className={style.mainContent}>
      <AppLink to={"/ships"}>Взглянуть на корабли</AppLink>
    </main>
  );
};

export default MainContent;
