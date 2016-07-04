const React = require("react");
const ReactDOM = require("react-dom");
const Modal = require("react-modal");

const reactRouter = require("react-router");
const Router = reactRouter.Router;
const Route = reactRouter.Route;
const hashHistory = reactRouter.hashHistory;
const IndexRoute = reactRouter.IndexRoute;

const UserActions = require("./actions/user_actions");
const App = require("./components/app");
const SignUpForm = require("./components/sign_up_form");
const LoginForm = require("./components/log_in_form");
const UserProfile = require("./components/user_profile");
const UserSettings = require("./components/user_settings");
const RouteDetail = require("./components/route_detail");
const RouteForm = require("./components/route_form");


let routes = (<Router history={hashHistory}>
  <Route path="/" component={App}>
    <Route path="users/:userId/settings" component={UserSettings}></Route>
    <Route path="users/:userId" component={UserProfile}></Route>
    <Route path="routes/create" component={RouteForm}></Route>
    <Route path="routes/:routeId" component={RouteDetail}></Route>
  </Route>
</Router>);


document.addEventListener("DOMContentLoaded", ()=>{
  if (window.currentUser){
    UserActions.receiveCurrentUser(window.currentUser);
  }
  Modal.setAppElement(document.body);
  ReactDOM.render(routes, document.getElementById("content"))
})
