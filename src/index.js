import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from './style';
import { GlobalIconFontStyle } from '../src/statics/iconfont/iconfont';

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <GlobalIconFontStyle />
    <App />
  </React.Fragment>, document.getElementById('root')
);

