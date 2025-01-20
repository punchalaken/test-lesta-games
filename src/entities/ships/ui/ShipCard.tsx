import { FC } from "react";
import style from "./Ships.module.scss";
import { Ship } from "../model/types";

interface ShipCardProps {
	item: Ship;
}

export const ShipCard: FC<ShipCardProps> = ({ item }) => {
	return (
		<div className={style.ShipCard}>
			<div className={style.ShipCard__header}>
				<div
					className={`${style.ShipCard__title} ${style.ShipCard__header__flex} ${style.Mobile_width}`}
				>
					{item.title}
				</div>
				<div
					className={`${style.ShipCard__type} ${style.ShipCard__header__flex} ${style.Mobile_width}`}
				>
					{item.type.title}
				</div>
				<div
					className={`${style.ShipCard__level} ${style.ShipCard__header__flex} ${style.Mobile_width}`}
				>
					{item.level} уровень
				</div>
			</div>
			<div className={style.ShipCard__content}>
				<div
					className={style.ShipCard__image}
					style={{
						backgroundImage: `url(${item.nation.icons.large})`,
						backgroundSize: "cover",
					}}
				>
					<img
						src={item.icons.medium}
						alt={`Великолепный ${item.title}`}
						className={style.ShipCard__iamge__ship}
					/>
				</div>

				<div className={style.ShipCard__description}>
					{item.description}
				</div>
			</div>
		</div>
	);
};
