import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";

import "./App.scss";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from './pages/Register';
import Notfound from './pages/Notfound';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Header/>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" exact component={Login} />
              <Route path="/register" exact component={Register} />
              <Route component={Notfound}></Route>
            </Switch>
          <Footer/>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
