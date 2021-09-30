import './App.css';
import 'materialize-css/dist/css/materialize.min.css';

import M from 'materialize-css/dist/js/materialize.min.js';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Register from './pages/Register';

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });

  return (
    <Provider store={store}>
      {/* <div>Hello World</div> */}
      <Router>
        <Switch>
          <Route path='/register' component={Register} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
