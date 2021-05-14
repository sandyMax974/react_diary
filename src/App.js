import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { useState } from "react";
import Diary from "./containers/Diary";
import Login from "./containers/Login";
import Header from "./containers/Header";

function App() {
  const [token, setToken] = useState();

  if (!token) {
    return (
      <div className="App">
        <Header />
        <Login setToken={setToken} />
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Public Access</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/diary">
            <Diary />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
