import { routeConfig } from "@/shared/config/routeConfig/routeConfig";
import { PageLoader } from "@/widgets/PageLoader/PageLoader";
import { Suspense } from "react";
import { Route, Routes } from "react-router";

export const AppRouter = () => {
	return (
		<Routes>
			{Object.values(routeConfig).map(({ path, element }) => (
				<Route
					key={path}
					path={path}
					element={
						<Suspense fallback={<PageLoader />}>
							{element}
						</Suspense>
					}
				/>
			))}
		</Routes>
	);
};

export default AppRouter;
