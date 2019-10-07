import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ApolloProvider } from 'react-apollo';
import { client } from './api';

import Root from './Root';
import Router from './Router';
import Layout from './Layout';

function App() {
  return (
    <Root>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Layout>
            <Router />
          </Layout>
        </BrowserRouter>
      </ApolloProvider>
    </Root>
  );
}

export default App;
