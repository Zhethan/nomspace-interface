import "react-app-polyfill/stable";
import "@celo-tools/use-contractkit/lib/styles.css";
import "react-toastify/dist/ReactToastify.min.css";
import "index.css";

import {
  Alfajores,
  Avalanche,
  Celo,
  ContractKitProvider,
  Fuji,
} from "@celo-tools/use-contractkit";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "state";
import theme from "theme";
import { ThemeProvider } from "theme-ui";
import { HashRouter as Router } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { UserNonce } from "hooks/useUserNonce";
import { ReverseResolution } from "hooks/useReverseResolution";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { UserNomsProvider } from "hooks/useUserNoms";

const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/name/nomspace/nomspacetest",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ContractKitProvider
      dapp={{
        name: "Nomspace",
        description: "Protocol for name registration",
        url: "https://app.nom.space",
        icon: "https://www.nom.space/favicon-32x32.png",
        supportedNetworks: [Celo, Alfajores, Avalanche, Fuji],
      }}
    >
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Router>
            <RecoilRoot>
              <UserNonce.Provider>
                <ReverseResolution.Provider>
                  <ApolloProvider client={client}>
                    <UserNomsProvider>
                      <App />
                    </UserNomsProvider>
                  </ApolloProvider>
                </ReverseResolution.Provider>
              </UserNonce.Provider>
            </RecoilRoot>
          </Router>
        </Provider>
      </ThemeProvider>
    </ContractKitProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
