
import { Provider } from './src/context/BlogContext';
import React from 'react'
import NavigationScreen from './src/screens/navigationScreen';

const App1 = () => {
  return (
    <NavigationScreen></NavigationScreen>
  );
};

const App = App1;

export default () => {

  return (
  <Provider> 
  <App />
  </Provider>
  )
}