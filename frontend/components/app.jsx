const React = require("react");
const UserStore = require("../stores/users_store");
const hashHistory = require("react-router").hashHistory;
const UserActions = require("../actions/user_actions");
const Modal = require("react-modal");

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

  componentDidMount: function(){
    this.userListener = UserStore.addListener(this.onUserChange);
  },

  onUserChange: function(){
    this.setState({currentUser: UserStore.currentUser(), userErrors: UserStore.errors()});
  },

  closeModal: function(){
    this.setState({modalOpen: false});
  },

  logout: function(event){
    event.preventDefault();
    UserActions.logout();
  },

  login: function(event){
    event.preventDefault();
    this.setState({modalForm: <LoginForm onSubmit={this.closeModal}/>, modalOpen: true});

  },

  signup: function(event){
    event.preventDefault();
    this.setState({modalForm: <SignUpForm onSubmit={this.closeModal}/>, modalOpen: true});
  },



  button: function(){
    if (this.state.currentUser){
      return (
        <span>
          <button onClick={this.logout} className="loginButton">Log Out</button>
        </span>
      );
    }
    else {
      return (
        <span>
          <button onClick={this.login} className="loginButton">Log In</button> &nbsp;
          <button onClick={this.signup} className="loginButton">Sign Up</button>
        </span>
      );
    }
  },

  currentUser: function(){
    let user;
    if (this.state.currentUser){
      user = <span>hello {this.state.currentUser.username}</span>
    }
    return user;
  },

  logo: function(){
    return <span><img id="logo" src="http://www.clipartbest.com/cliparts/7ia/Rdd/7iaRddzxT.jpeg"></img></span>
  },

  modal: function(){
    const modalStyle = {
      overlay: {
        position        : 'fixed',
        top             : 0,
        left            : 0,
        right           : 0,
        bottom          : 0,
        backgroundColor : 'rgba(255, 255, 255, 0.75)',
      },
      content: {
        position        : 'fixed',
        top             : '100px',
        left            : '150px',
        right           : '150px',
        bottom          : '100px',
        border          : '1px solid #ccc',
        padding         : '50px'
      }
    };


    return (
      <Modal isOpen={this.state.modalOpen} onRequestClose={this.closeModal} style={modalStyle}>
        <button onClick={this.closeModal}>X</button>
        {this.state.modalForm}
      </Modal>
    )
  },

  render: function(){
    return (
      <div>
        <div className="nav">
          {this.logo()}
          {this.button()}
          {this.currentUser()}
        </div>
        {this.errors()}
        {this.modal()}
        {this.props.children}
      </div>
    );
  }
});


module.exports = App;
