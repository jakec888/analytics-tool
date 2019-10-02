import React from "react";
import { BrowserRouter } from "react-router-dom";

import Root from "./Root";
import Router from "./Router";
import Layout from "./Layout";

function App() {
  return (
    <Root>
      <BrowserRouter>
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>
    </Root>
  );
}

export default App;
