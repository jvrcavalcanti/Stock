import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";

import "./App.scss";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home"
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Header/>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/register" exact component={Register} />
            </Switch>
          <Footer/>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
