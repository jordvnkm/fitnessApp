const React = require("react");
const UserStore = require("../stores/users_store");
const hashHistory = require("react-router").hashHistory;
const UserActions = require("../actions/user_actions");
const Modal = require("react-bootstrap").Modal;

const Navbar = require("react-bootstrap").Navbar;
const Nav = require("react-bootstrap").Nav;
const NavItem = require("react-bootstrap").NavItem;
const NavDropdown = require("react-bootstrap").NavDropdown;
const MenuItem = require("react-bootstrap").MenuItem;


const LoginForm = require("./log_in_form");
const SignUpForm = require("./sign_up_form");

const App = React.createClass({
  getInitialState: function(){
    return {currentUser: UserStore.currentUser(), modalOpen: false,
            modalForm: null, userErrors: UserStore.errors()};
  },

  errors: function(){
    if (!this.state.userErrors){
      return;
    }
    var self = this;
    return (<ul>
    {
      Object.keys(this.state.userErrors).map(function(key, i){
        return (<li key={i}>{self.state.userErrors[key]}</li>);
      })
    }
    </ul>);
  },

  closeModal: function(){
    this.setState({modalOpen: false})
  },

  componentDidMount: function(){
    this.userListener = UserStore.addListener(this.onUserChange);
  },

  onUserChange: function(){
    this.setState({modalOpen: false, currentUser: UserStore.currentUser(), userErrors: UserStore.errors()});
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
        </Navbar.Collapse>
      </Navbar>
    );
  },

  modal: function(){
    const FormModal = React.createClass({

      render: function(){

        return (
          <Modal {...this.props} bsSize="small" aria-labelledby="contained-modal-title-sm">
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-sm">GoTheDistance</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {this.props.modalForm}
            </Modal.Body>
          </Modal>
        );
      }
    });

    return <FormModal modalForm={this.state.modalForm} show={this.state.modalOpen} onHide={this.closeModal}/>
  },

  render: function(){
    return (
      <div className="modal-container">
        {this.navBar()}
        {this.errors()}
        {this.modal()}
        {this.props.children}
      </div>
    );
  }
});


module.exports = App;
