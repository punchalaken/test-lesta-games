import { ShipList } from "@widgets/ShipList";

import style from "./ShipsPage.module.scss";
import { ShipSort } from "@widgets/ShipList";
import { ShipsFilterOptionsGroup } from "@widgets/ShipList";
import { ShipFilterInput } from "@/widgets/ShipList/ui/ShipFilterInput";

export const ShipsPage = () => {
  return (
    <main className={style.ShipsPage}>
      <ShipSort />
      <ShipFilterInput/>
      <ShipsFilterOptionsGroup />
      <ShipList />
    </main>
  );
};

export default ShipsPage;
