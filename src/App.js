import React from 'react';
import Header from './common/Header';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store';
import Home from './pages/home';
import Detail from './pages/detail';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Header />
          <Route path="/" exact component={Home}/>
          <Route path="/detail" exact component={Detail}/>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
