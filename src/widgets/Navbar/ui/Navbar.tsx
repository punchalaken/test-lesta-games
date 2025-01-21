import style from "./Navbar.module.scss";

import { FC } from "react";
import { AppLink } from "@shared/ui/AppLink/AppLink";

const navbarObject: { id: number; text: string; to: string }[] = [
  {
    id: 0,
    text: "Главная",
    to: "/",
  },
  {
    id: 1,
    text: "Виды кораблей",
    to: "/ships",
  },
];

export const Navbar: FC = () => {
  return (
    <nav className={style.navbar}>
      {navbarObject.map((item) => (
        <AppLink to={item.to} key={item.id}>
          {item.text}
        </AppLink>
      ))}
    </nav>
  );
};

export default Navbar;
