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
    this.setState({modalOpen: false, currentUser: UserStore.currentUser(), userErrors: UserStore.errors()});
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
    this.setState({modalForm: <LoginForm />, modalOpen: true});

  },

  signup: function(event){
    event.preventDefault();
    this.setState({modalForm: <SignUpForm />, modalOpen: true});
  },



  button: function(){
    if (this.state.currentUser){
      let profileText = this.state.currentUser.username;
      profileText += "'s profile";
      return (
        <div className="navButton">
          <button onClick={this.logout} className="loginButton">Log Out</button>
          <button onClick={this.profileButton} className="loginButton">{profileText}</button>
        </div>
      );
    }
    else {
      return (
        <div className="navButton">
          <button onClick={this.login} className="loginButton">Log In</button>
          <button onClick={this.signup} className="loginButton">Sign Up</button>
        </div>
      );
    }
  },

  profileButton: function(){
    //TODO link to profile page
  },

  logo: function(){
    // return <span id="logo"></span>
    return <img id="logo" src="http://www.clipartbest.com/cliparts/7ia/Rdd/7iaRddzxT.jpeg"></img>
  },

  modal: function(){
    const modalStyle = {
      overlay: {
        position        : 'fixed',
        top             : 0,
        left            : 0,
        right           : 0,
        bottom          : 0,
        backgroundColor : 'rgba(169, 169, 169, 0.75)',
      },
      content: {
        // position        : 'fixed',
        // top             : '100px',
        // left            : '150px',
        // right           : '150px',
        // bottom          : '100px',
        // border          : '1px solid #ccc',
        width           : '30%',
        height          : '40%',
        backgroundColor : 'white'
      }
    };


    return (
      <Modal className="modal" isOpen={this.state.modalOpen} onRequestClose={this.closeModal} style={modalStyle}>
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
        </div>
        {this.errors()}
        {this.modal()}
        {this.props.children}
      </div>
    );
  }
});


module.exports = App;
