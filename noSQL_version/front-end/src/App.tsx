import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Root from './Root';
import Router from './Router';
import Layout from './Layout';

function App() {
  return (
    <Root>
      <BrowserRouter>
        {/* https://medium.com/knerd/typescript-tips-series-proper-typing-of-react-redux-connected-components-eda058b6727d */}
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>
    </Root>
  );
}

export default App;
