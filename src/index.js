import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ScrollToTop from './/utils/scrollToTop'
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import "typeface-josefin-sans";

import './index.scss';

import * as serviceWorker from './serviceWorker';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Josefin Sans, sans-serif',
  },

});



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/admin/">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ScrollToTop>
          <App />
          
        </ScrollToTop>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
