const React = require("react");
const UserStore = require("../stores/users_store");
const hashHistory = require("react-router").hashHistory;
const UserActions = require("../actions/user_actions");
const Modal = require("react-bootstrap").Modal;
const ErrorStore = require("../stores/error_store");

const Navbar = require("react-bootstrap").Navbar;
const Nav = require("react-bootstrap").Nav;
const NavItem = require("react-bootstrap").NavItem;
const NavDropdown = require("react-bootstrap").NavDropdown;
const MenuItem = require("react-bootstrap").MenuItem;
const Button = require("react-bootstrap").Button


const LoginForm = require("./log_in_form");
const SignUpForm = require("./sign_up_form");

const App = React.createClass({
  getInitialState: function(){
    return {currentUser: UserStore.currentUser(), modalOpen: false,
            modalForm: null, userErrors: ErrorStore.all()};
  },

  errors: function(myerrors){
    if (!myerrors){
      return;
    }
    var self = this;
    return (<ul>
    {
      Object.keys(myerrors).map(function(key, i){
        return (<li key={i}>{myerrors[key]}</li>);
      })
    }
    </ul>);
  },

  closeModal: function(){
    this.setState({modalOpen: false, userErrors: null});
  },

  componentDidMount: function(){
    this.userListener = UserStore.addListener(this.onUserChange);
    this.errorListener = ErrorStore.addListener(this.onErrorChange);
  },

  componentWillUnmount: function(){
    this.userListener.remove();
    this.errorListener.remove();
  },

  onUserChange: function(){
    this.setState({modalOpen: false, currentUser: UserStore.currentUser(), userErrors: ErrorStore.all()});
  },

  onErrorChange: function(){
    this.setState({userErrors: ErrorStore.all()});
  },

  logout: function(event){
    event.preventDefault();
    UserActions.logout();
    hashHistory.push("/")
  },

  login: function(event){
    event.preventDefault();
    this.setState({modalForm: <LoginForm />, modalOpen: true});

  },

  signup: function(event){
    event.preventDefault();
    this.setState({modalForm: <SignUpForm />, modalOpen: true});
  },

  profileButton: function(event){
    let url = `users/${this.state.currentUser.id}`;
    hashHistory.push(url);
  },

  settingsButton: function(event){
    let url = `users/${this.state.currentUser.id}/settings`;
    hashHistory.push(url);
  },

  navButtons: function(){
    if (this.state.currentUser === null){
      return (
        <Nav pullRight>
          <NavItem onClick={this.login}>Log In</NavItem>
          <NavItem onClick={this.signup}>Sign Up</NavItem>
        </Nav>
      );
    }
    else {
      let title = this.state.currentUser.username;
      return (
        <Nav pullRight>
          <NavItem onClick={this.logout}>Log Out</NavItem>
          <NavDropdown eventkey={3} title={title} id="basic-nav-dropdown">
            <MenuItem onClick={this.profileButton}>Profile</MenuItem>
            <MenuItem onClick={this.settingsButton}>Settings</MenuItem>
          </NavDropdown>
        </Nav>
      )
    }
  },

  homeButton: function(){
    hashHistory.push("/");
  },

  locationSeach: function(){
    // TODO
  },

  navBar: function(){
    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a onClick={this.homeButton}>GoTheDistance</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
          {this.navButtons()}
          {this.locationSearch()}
        </Navbar.Collapse>
      </Navbar>
    );
  },

  modal: function(errors){
    const FormModal = React.createClass({

      render: function(){

        return (
          <Modal {...this.props} bsSize="small" aria-labelledby="contained-modal-title-sm">
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-sm">GoTheDistance</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {this.props.errorHandler(this.props.errors)}
              {this.props.modalForm}
            </Modal.Body>
          </Modal>
        );
      }
    });

    return <FormModal errorHandler={this.errors} errors={errors}
            modalForm={this.state.modalForm} show={this.state.modalOpen} onHide={this.closeModal}/>
  },

  userSeach: function(){
    return (
      <Navbar>
        <Navbar.Collapse>
          <Navbar.Form pullLeft>
            <FormGroup>
              <FormControl type="text" placeholder="Search Users" />
            </FormGroup>
            <Button type="submit">Submit</Button>
          </Navbar.Form>
        </Navbar.Collapse>
      </Navbar>
    );
  },

  render: function(){
    return (
      <div className="modal-container">
        {this.navBar()}
        {this.errors()}
        {this.modal(this.state.userErrors)}

        {this.userSeach()}
        {this.props.children}
      </div>
    );
  }
});


module.exports = App;
