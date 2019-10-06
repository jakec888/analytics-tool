import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ApolloProvider } from 'react-apollo';

import Root from './Root';
import Router from './Router';
import Layout from './Layout';

import { client } from './api';

function App() {
  return (
    <ApolloProvider client={client}>
      <Root>
        <BrowserRouter>
          <Layout>
            <Router />
          </Layout>
        </BrowserRouter>
      </Root>
    </ApolloProvider>
  );
}

export default App;
