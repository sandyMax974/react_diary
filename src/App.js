import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Diary from "./containers/Diary";
import Login from "./containers/Login";
import Header from "./containers/Header";
import AuthService from "./services/Auth.service";
import Registration from "./containers/Registration";

function App() {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser;

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/diary" component={Diary} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/registration" component={Registration} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
