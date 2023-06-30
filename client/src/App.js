// import react libraries
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import pages for routing
import LoginPage from './pages/loginPage';
import ActivityPage from './pages/activityPage';
// import tailwind css file
import './input.css';

//import apollo libraries
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';

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
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="activities" element={<ActivityPage />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
};
export default App;
