import { ButtonHTMLAttributes, FC } from "react";
import style from "./Button.module.scss";

interface ButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: string;
}

export const Button: FC<ButtonProps> = ({
	children,
	...otherProps
}) => {
	return (
		<button className={`${style.Button}`} {...otherProps}>
			{children}
		</button>
	);
};
