import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import {
  MainPage,
  LoginPage,
  EditorPage,
  PostPage,
  NotFoundPage
} from "../pages";
import "./App.scss";

class App extends Component {
  loginAccess = true;
  render() {
    return (
      <div className={"App"}>
        <Switch>
          <Route
            exact
            path="/"
            component={this.loginAccess ? MainPage : LoginPage}
          />
          <Route path="/editor" component={EditorPage} />
          <Route path="/post/:id" component={PostPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
