import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

// import logo from './logo.svg';
import './App.css';

import RecordAudio from './components/RecordAudio';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
      <div className="flex-column justify-flex-start min-100-vh">
        <div className="container">
          <RecordAudio />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
