import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Pages from "./pages";
import { Provider } from "react-redux";
import store from "./redux/store";
export default () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Pages.App} />
          <Route exact path="/app" component={Pages.Chat} />
        </Switch>
      </Router>
    </Provider>
  );
};
