import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import ProductDetail from "./components/ProductDetail";
import ProductListing from "./components/ProductListing";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" exact component={ProductDetail} />
          <Route> 404 Not Found! </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
