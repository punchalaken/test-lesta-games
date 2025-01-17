import { ShipsContent } from "@widgets/ShipsContent/ui/ShipsContent";
import style from "./ShipsPage.module.scss";

export const ShipsPage = () => {
	return (
		<div className={`${style.ShipsPage}`}>
			<ShipsContent />
		</div>
	);
};

export default ShipsPage;
