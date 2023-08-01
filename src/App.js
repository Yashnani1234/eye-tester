// import { BrowserRouter, Route, Switch } from "react-router-dom"
// import Home from './components/home';
// import Tester from './components/tester';
// import Login from "./components/login/login";
// import signup from "./components/login/signup";
import './App.css';
import Camera from './components/tester/camera';

const App =() => (
  <Camera />
  // <BrowserRouter>
  //   <Switch>
  //     <Route exact path="/" component={Login} />
  //     <Route path="/createaccount" component={signup} />
  //     <Route exact path="/home" component={Home} />
  //     <Route path="/cam" component={Tester} />
  //   </Switch>
  // </BrowserRouter>

)
export default App;
