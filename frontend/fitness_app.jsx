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

let routes = (<Router history={hashHistory}>
  <Route path="/" component={App}>
    <Route path="users/:userId" component={UserProfile}></Route>
  </Route>
</Router>);


document.addEventListener("DOMContentLoaded", ()=>{
  if (window.currentUser){
    UserActions.receiveCurrentUser(window.currentUser);
  }
  Modal.setAppElement(document.body);
  ReactDOM.render(routes, document.getElementById("content"))
})
