import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Tester from "./components/Tester/Tester";
import Camera from "./components/camera/camera";
import ConcernedDoctor from "./components/Tester/concerneddoctor";
import Precautions from "./components/Tester/precautions";
import QuickRemedies from "./components/Tester/quickremedies";

const App = () => (
  //  < Camera />
  <BrowserRouter>
    <Switch>
      {/* <Route exact path="/" component={Login} />
      <Route path="/createaccount" component={signup} /> */}
      <Route exact path="/" component={Home} />
      <Route exact path="/tester" component={Tester} />
      <Route exact path="/camera" component={Camera} />
      <Route exact path="/concerneddoctor" component={ConcernedDoctor} />
      <Route exact path="/remedies" component={QuickRemedies} />
      <Route exact path="/precautions" component={Precautions} />
    </Switch>
  </BrowserRouter>
);
export default App;
