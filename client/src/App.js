// import react libraries
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import pages for routing
import LoginPage from './pages/loginPage';
import ActivityPage from './pages/activityPage';
import SignUpCreateActivityPage from './pages/SignUpCreateActivityPage';
import TimerPage from './components/activities/timer';
import Navbar from './components/navbar/navbar'
// import tailwind css file
import './input.css';

//import apollo libraries
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import BgDecorations from './components/global/backgroundDecorations';

//set graphql route
const gqlLink = createHttpLink({
  uri: '/graphql',
});

// configure apollo
const client = new ApolloClient({
  // set client to use gql with httplink
  link: gqlLink,
  cache: new InMemoryCache(),
});


const App = () => {
  return (
    <>
    <Navbar/>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/activities" element={<ActivityPage />} />
          <Route path="/signupcreateactivity" element={<SignUpCreateActivityPage/>} />
          <Route path="/timer" element={<TimerPage />} />
        </Routes>
      </BrowserRouter>
      <BgDecorations />
    </ApolloProvider>
    </>
  );
};
export default App;
