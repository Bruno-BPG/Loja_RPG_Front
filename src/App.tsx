import { Switch, Route } from "react-router-dom";

import Home from "./pages/home"

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>
    </Switch>
  );
}

export default App;
