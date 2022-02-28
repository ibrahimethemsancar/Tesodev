import MainPage from './components/main/mainPage';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import More from './components/more/More';
import { MyProvider } from './context/MyContext';
import Add from './components/add/add';
function App() {
  return (
    <MyProvider>
    <Router>

      <Route path="/More">
        <More />
      </Route>

      <Route path="/add">
        <Add/>
        </Route>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>

      </Switch>

    </Router>
    </MyProvider>
  );
}

export default App;
