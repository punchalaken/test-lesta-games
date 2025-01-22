import "./styles/App.scss";
import "./styles/normalize.scss";
import "./styles/varialbles/global.scss";
import "./styles/varialbles/fonts.scss";

import { Navbar } from "@widgets/Navbar";
import { AppRouter } from "./providers/router";
import { ApolloProvider } from "@apollo/client";
import { client } from "@shared/config/apolloClient/apolloClient";

function App() {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <AppRouter />
    </ApolloProvider>
  );
}

export default App;
