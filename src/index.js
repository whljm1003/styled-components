import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';

/* 
  theme은 꼭 2가지 이상 있어야 하고 property의 이름들이 똑같아야 한다!
*/
const darkTheme = {
  textColor: "whitesmoke",
  backgroundColor: "#111"
}

const lightTheme = {
  textColor: "#111",
  backgroundColor: "whitesmoke",
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

