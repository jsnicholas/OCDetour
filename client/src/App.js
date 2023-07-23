// import react libraries
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import pages for routing
import LoginPage from './pages/loginPage';
import ActivityPage from './pages/activityPage';
import CreateActivityPage from './pages/createActivityPage';
import infoPage from './pages/infoPage';

// import global page elements
//import Navbar from './components/navbar/navbar'
import BottomMenu from './components/global/bottomMenu';

// import tailwind css file
import './input.css';

//import apollo libraries
import { setContext } from '@apollo/client/link/context'
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';

// import BgDecorations from './components/global/backgroundDecorations';

//set graphql route
const gqlLink = createHttpLink({
  uri: '/graphql',
});

// JWT token context
// https://www.apollographql.com/docs/react/api/link/apollo-link-context/
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

// configure apollo
const client = new ApolloClient({
  // set client to use gql with httplink
  link: authLink.concat(gqlLink),
  cache: new InMemoryCache(),
});

function renderWithBottomMenu(Component) {
  return (
    <>
      <Component /><BottomMenu />
    </>
  )
}

const App = () => {

  return (
    <>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} page="login" />
            <Route path="/activities" element={renderWithBottomMenu(ActivityPage)} />
            <Route path="/createactivity" element={renderWithBottomMenu(CreateActivityPage)} />
            <Route path="/info" element={renderWithBottomMenu(infoPage)} />
            <Route path="/*" element={renderWithBottomMenu(ActivityPage)} />
          </Routes>
        </BrowserRouter>
        {/* disabling bg decoration for now */}
        {/* <BgDecorations /> */}
      </ApolloProvider>


    </>
  );
};
export default App;
