import Home from "./pages/Home"
import Add from "./pages/Add"
import Get from "./pages/Get"
import { Switch, Route } from "react-router-dom"

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/add" component={Add} />
        <Route path="/get" component={Get} />
      </Switch>
    </div>
  );
}

export default App;
