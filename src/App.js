import "./App.css";
import Employeelist from "./components/Employeelist";
import Editemployee from "./components/Editemployee";
import Addemployee from "./components/Addemployee";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="container body-content">
      <Router>
        <Switch>
          <Route path="/" exact component={Employeelist} />
          <Route path="/editemployee/:id" exact component={Editemployee} />
          <Route path="/addemployee" exact component={Addemployee} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
