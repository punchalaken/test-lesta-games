import { ShipList } from "@widgets/ShipList";

import style from "./ShipsPage.module.scss";

export const ShipsPage = () => {
	return (
		<main className={`${style.ShipsPage}`}>
			<ShipList />
		</main>
	);
};

export default ShipsPage;
