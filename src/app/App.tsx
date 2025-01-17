import "./styles/App.scss";
import "./styles/normalize.scss";
import "./styles/varialbles/global.scss";
import "./styles/varialbles/fonts.scss";

import { Navbar } from "@widgets/Navbar";
import { AppRouter } from "./providers/router";

function App() {
	return (
		<>
			<Navbar />
			<AppRouter />
		</>
	);
}

export default App;
