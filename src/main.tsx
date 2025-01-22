import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { ApolloProvider } from "@apollo/client";
import { client } from "@shared/config/apolloClient/apolloClient.ts";
import { Provider } from "react-redux";
import { store } from "./store";

import { registerSW } from "virtual:pwa-register";

registerSW({immediate: true});

import App from "@app/App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ApolloProvider>
    </Provider>
  </StrictMode>,
);
