import React from 'react';
import LoginPage from './pages/loginPage';
import ActivityPage from './pages/activityPage';
import BreatheIcon from './components/breatheIcon';
import './input.css';

const App = () => {
  return (
    <>
      <BreatheIcon />
      <LoginPage />
      {/* <ActivityPage /> */}
    </>
  );
};
export default App;
