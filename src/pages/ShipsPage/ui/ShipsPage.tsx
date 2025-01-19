import { ShipsContent } from "@widgets/ShipsContent/ui/ShipsContent";
import style from "./ShipsPage.module.scss";

export const ShipsPage = () => {
	return (
		<main className={`${style.ShipsPage}`}>
			<ShipsContent />
		</main>
	);
};

export default ShipsPage;
