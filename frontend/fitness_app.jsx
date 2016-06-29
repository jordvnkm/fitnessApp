const React = require("react");
const ReactDOM = require("react-dom");
const UserActions = require("./actions/user_actions");

const reactRouter = require("react-router");
const Router = reactRouter.Router;
const Route = reactRouter.Route;
const hashHistory = reactRouter.hashHistory;
const IndexRoute = reactRouter.IndexRoute;

const App = require("./components/app");
const SignUpForm = require("./components/sign_up_form");
const LoginForm = require("./components/log_in_form")

let routes = <Router history={hashHistory}>
  <Route path="/" component={App}>
    <Route path="api/users" component={SignUpForm}></Route>
    <Route path="api/session" component={LoginForm}></Route>
  </Route>
</Router>


document.addEventListener("DOMContentLoaded", ()=>{
  if (window.currentUser){
    UserActions.receiveCurrentUser(currentUser);
  }
  ReactDOM.render(routes, document.getElementById("content"))
})
