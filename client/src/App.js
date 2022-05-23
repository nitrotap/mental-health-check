import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';


// import logo from './logo.svg';
import './App.css';

import AudioRecorder from './components/AudioRecorder';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Header from './components/Header';
import Homepage from './pages/Homepage'

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          {<Header />}
          <div className="container">
            <Routes>
              {/* <Route path="/" element={<Homepage />} /> */}
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />

            </Routes>
          </div>

        </div>
      </Router>

    </ApolloProvider>
  );
}

export default App;
