import React from 'react';
import {Main} from "./pages/main";
import * as css from './app.css'

function App() {
  return (
    <div className={css.app}>
      <header className={css.header}>
        <h3>Welcome to Cat Heaven!</h3>
      </header>
      <Main />
    </div>
  );
}

export default App;
