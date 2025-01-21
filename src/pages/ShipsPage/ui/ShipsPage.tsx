import { ShipList } from "@widgets/ShipList";

import style from "./ShipsPage.module.scss";
import { ShipSort } from "@/widgets/ShipList/ui/ShipSort";

export const ShipsPage = () => {
  return (
    <main className={style.ShipsPage}>
      <ShipSort />
      <ShipList />
    </main>
  );
};

export default ShipsPage;
