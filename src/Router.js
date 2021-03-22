import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Shop from "./Shop";
import Home from "./Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
