import Home from "./pages/Home"
import Add from "./pages/Add"
import Get from "./pages/Get"
import Del from "./pages/Del"
import { Switch, Route } from "react-router-dom"

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/add" component={Add} />
        <Route path="/get" component={Get} />
        <Route path="/del" component={Del} />
      </Switch>
    </div>
  );
}

export default App;
