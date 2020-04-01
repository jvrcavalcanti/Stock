import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            Home
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
