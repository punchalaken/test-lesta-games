import { FC } from "react";
import { LinkProps, NavLink } from "react-router";

import style from "./AppLink.module.scss";

export const AppLink: FC<LinkProps> = ({ children, to }) => {
  return (
    <div className={`${style.AppLink}`}>
      <NavLink
        to={to}
        className={({ isActive }) => (isActive ? `${style.active}` : "")}
      >
        {children}
      </NavLink>
    </div>
  );
};
