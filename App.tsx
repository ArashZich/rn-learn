import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/store';
import Home from './src/screens/home';
import HomeFun from './src/screens/homeFun';

const App = () => {
  return (
    <Provider store={store}>
      <HomeFun />
    </Provider>
  );
};

export default App;
