import "./styles/App.scss";
import "./styles/normalize.scss";
import "./styles/varialbles/global.scss";
import "./styles/varialbles/fonts.scss";

import { Navbar } from "@widgets/Navbar";
import { MainContent } from "@/widgets/MainContent";

function App() {
	return (
		<>
			<Navbar />
			<MainContent />
		</>
	);
}

export default App;
