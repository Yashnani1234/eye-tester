import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from './components/home';
import Tester from './components/tester';
import './App.css';

const App =() => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/cam" component={Tester} />
    </Switch>
  </BrowserRouter>
)

export default App;
