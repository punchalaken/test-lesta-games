import { RouteProps } from "react-router";
import { MainPage } from "@pages/MainPage";
import { ShipsPage } from "@pages/ShipsPage";
import { NotFoundPage } from "@pages/NotFoundPage";

export enum AppRoutes {
  MAIN = "main",
  SHIPS = "ships",
  NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.SHIPS]: "/ships",
  [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.SHIPS]: {
    path: RoutePath.ships,
    element: <ShipsPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
