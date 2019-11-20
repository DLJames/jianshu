import React from 'react';
import Header from './common/Header';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import Write from './pages/write';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Header />
          <Route path="/" exact component={Home}/>
          <Route path="/detail/:id" exact component={Detail}/>
          <Route path="/login" exact component={Login} />
          <Route path="/write" exact component={Write} />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
