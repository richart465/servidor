import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Clients from "./pages/Clients";
import History from "./pages/History";
import Pay from "./pages/Pay";
import Settings from "./pages/Settings";
import Preview from "./pages/preview";

import './assets/css/global.css'


function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/" component={Auth} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route path="/dashboard/clients" component={Clients} />
      <Route path="/dashboard/history" component={History} />
      <Route path="/dashboard/pay" component={Pay} />
      <Route path="/dashboard/settings" component={Settings} />
      <Route path="/dashboard/preview/:contract/:invoice" component={Preview} />
    </Switch>
    </Router>
  )
}

export default App