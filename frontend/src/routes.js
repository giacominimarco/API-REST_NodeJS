//Todas as rotas do sistema
import React from "react";
import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom";

import SignUp from "./pages/signup";
import Profile from "./pages/profile";
import Doctorlist from "./pages/doctorlist";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SignUp} />
      <Route path={`/Profile/:id`}>
        <Profile />
      </Route>
      <Route path="/doctorlist" component={Doctorlist} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;