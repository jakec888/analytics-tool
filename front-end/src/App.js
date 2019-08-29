import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import Router from "./Router";
import Layout from "./Layout";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
