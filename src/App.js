import "./App.css";
import { Route, Switch } from "react-router-dom";
import React, { useEffect, useState } from "react";
import AuthService from "./services/Auth.service";
import Diary from "./containers/Diary";
import Login from "./containers/Login";
import Header from "./containers/Header";
import Registration from "./containers/Registration";

function App() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser;

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  // const user = AuthService.getCurrentUser().username;

  return (
    <div className="App">
      <Header
        user={currentUser}
        showAddForm={showAddForm}
        onAdd={setShowAddForm}
      />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/registration" component={Registration} />
        <Route
          exact
          path="/diary"
          render={(props) => (
            <Diary
              {...props}
              showAddForm={showAddForm}
              onAdd={setShowAddForm}
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
