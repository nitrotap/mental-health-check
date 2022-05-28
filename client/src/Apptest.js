// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink,
// } from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';

// //mui
// import { makeStyles } from '@material-ui/core/styles';
// import { Grid } from '@material-ui/core';

// //routes
// //import AudioRecorder from './components/AudioRecorder';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import Quiz from './pages/Quiz';
// import Dashboard from './pages/Dashboard';
// import Homepage from './pages/Homepage'
// import Navbar from './components/Elements/Navbar';
// import Leftbar from './components/Elements/Leftbar';

// const httpLink = createHttpLink({
//   uri: '/graphql',
// });

// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem('id_token');
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

// const useStyles = makeStyles({
//   root: {
//     backgroundColor: '#18344A',
//     border: 0,
//     borderRadius: 3,
//     color: 'white',
//     padding: 0,
//     display: 'flex',
//     flexWrap: 'nowrap',
//     height: '100vh',
//   },
//   main: {
//     position: 'relative',
//     height: '100%',
//     paddingTop: '55px',
//   }

// })

// function App() {
//   const classes = useStyles();

//   return (
//     <ApolloProvider client={client}>
//       <Router>
//           <Navbar />
//           <div className={classes.root}>
//             <Grid container className={classes.main}>
//               <Grid item xs={2}>
//                 <Leftbar />
//               </Grid>
//               <Grid item xs={10}>
//                 <Routes>
//                   <Route path="/" element={<Homepage />} />
//                   <Route path="/dashboard" element={<Dashboard />} />
//                   <Route path="/quiz" element={<Quiz />} />
//                   <Route path="/login" element={<Login />} />
//                   <Route path="/signup" element={<Signup />} />
//                 </Routes>
//               </Grid>
//             </Grid>
//           </div>
//       </Router>
//     </ApolloProvider>
//   );
// }

// export default App;
