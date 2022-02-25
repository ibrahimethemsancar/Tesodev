import MainPage from './components/mainPage';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import More from './components/More';
import { MyProvider } from './context/MyContext';
import Add from './components/add';
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
