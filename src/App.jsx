import './App.css';
import 'materialize-css/dist/css/materialize.min.css';

import M from 'materialize-css/dist/js/materialize.min.js';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import AddEventModal from './modals/AddEventModal';
import EditEventModal from './modals/EditEventModal';

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });

  return (
    <Provider store={store}>
      {/* <div>Hello World</div> */}
      <Router>
        <AddEventModal />
        <EditEventModal />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
