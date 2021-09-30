import './App.css';
import 'materialize-css/dist/css/materialize.min.css';

import M from 'materialize-css/dist/js/materialize.min.js';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });

  return (
    <Provider store={store}>
      <div className='App'>Hi</div>
    </Provider>
  );
};

export default App;
