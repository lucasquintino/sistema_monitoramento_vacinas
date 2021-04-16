import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Vaccines from "./pages/Vaccines";
import Freezers from "./pages/Freezers";
import Managers from "./pages/Managers";
const Routes = () => {
  return (
    <Switch>
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/vaccines" component={Vaccines} />
      <Route path="/freezers" component={Freezers} />
      <Route path="/managers" component={Managers} />
    </Switch>
  );
};

export default Routes;
