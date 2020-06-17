import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter, HashRouter} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './Redux/Redux-store';

ReactDOM.render(
  // <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
          <App />
      </Provider>
    </HashRouter>
  // </React.StrictMode>
  ,
  document.getElementById('root')
);
