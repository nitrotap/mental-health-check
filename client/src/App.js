import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

//CSS
import './components/CSS/App.css';

//routes
//import AudioRecorder from './components/AudioRecorder';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Quiz from './pages/Quiz';
import Dashboard from './pages/Dashboard';
import Homepage from './pages/Homepage'
import Footer from './components/Elements/Footer';
import Header from './components/Elements/Header';

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

<<<<<<< HEAD

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

=======
function App() {

  return (
    <ApolloProvider client={client}>
      <Router>
          <Header />
          <div className="container">
          <Routes>
              {/* <Route path="/" element={<Homepage />} /> */}
              <Route path="/" element={<Homepage />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
          </Routes>
          </div>
          <Footer />
      </Router>
>>>>>>> 20c2547a0ccf3edeb3e64464164f4bfc7519448d
    </ApolloProvider>
  );
}

export default App;
