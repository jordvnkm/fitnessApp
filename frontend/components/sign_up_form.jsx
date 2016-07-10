const React = require("react");
const UserStore = require("../stores/users_store");
const UserActions = require("../actions/user_actions");
const hashHistory = require("react-router").hashHistory;
const Button = require("react-bootstrap").Button;
const LocationStore = require("../stores/location_store");

const FormGroup = require("react-bootstrap").FormGroup;
const ControlLabel = require("react-bootstrap").ControlLabel;
const FormControl = require("react-bootstrap").FormControl;
const HelpBlock = require("react-bootstrap").HelpBlock;

const SignUpForm = React.createClass({
  getInitialState: function(){
    return {username: "", password: "", email: "", homeLocation: null};
  },

  componentDidMount: function(){
    this.userListener = UserStore.addListener(this.updateUser);
  },

  componentWillUnmount: function(){
    this.userListener.remove();
  },

  emailChange: function(event){
    this.setState({email: event.target.value});
  },


  updateUser: function(){
    if (UserStore.currentUser()){
      hashHistory.push("/");
      return;
    }
    else{
      this.setState({userErrors: UserStore.errors()});
    }

  },


  usernameChange: function(event){
    this.setState({username: event.target.value});
  },

  passwordChange: function(event){
    this.setState({password: event.target.value});
  },

  onSubmit: function(event){
    let homeLocationId = null;
    if (this.state.homeLocation && this.state.homeLocation.id !== null){
      homeLocationId = this.state.homeLocation.id
    }
    event.preventDefault();
    UserActions.signUp({
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      home_location_id: homeLocationId
    });
  },

  guestLogin: function(event){
    event.preventDefault();
    event.stopPropagation();
    UserActions.logIn({
      username: "Guest",
      password: "password",
    });
  },

  passwordValidation: function(){
    const length = this.state.password.length;
    if (length >= 6) {
      return "success";
    }
    else if (length > 0){
      return "error";
    }
  },

  locationChange: function(event){
    event.preventDefault();
    event.stopPropagation();
    this.setState({homeLocation: LocationStore.find(event.target.value)});
  },

  render: function(){
    return (
      <div className="modalForm">
        <form onSubmit={this.onSubmit}>
          <FormGroup controlId="formControlsText">
            <ControlLabel>Username</ControlLabel>
            <FormControl type="text" placeholder="Enter Username"
              onChange={this.usernameChange} value={this.state.username} />
          </FormGroup>

          <FormGroup controlId="formControlsEmail">
            <ControlLabel>Email</ControlLabel>
            <FormControl type="email" placeholder="Enter Email"
              onChange={this.emailChange} value={this.state.email} />
          </FormGroup>

          <FormGroup controlId="formControlsPassword" validationState={this.passwordValidation()}>
            <ControlLabel>Password</ControlLabel>
            <FormControl type="password" placeholder="Enter Password"
              onChange={this.passwordChange} value={this.state.password}/>
            <FormControl.Feedback />
            <HelpBlock>Passwords must be at least 6 characters</HelpBlock>
          </FormGroup>

          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Select Home City</ControlLabel>
            <FormControl onChange={this.locationChange} componentClass="select" placeholder="select">
              <option key="start" value="0">select city</option>
              {this.props.locations.map((location) => {
                return <option key={location.id} value={location.id}>{location.name}</option> ;
              })}
            </FormControl>
          </FormGroup>

          <div className="formSubmit">
            <Button type="submit">Sign Up</Button>
            <span>Or</span>
            <Button onClick={this.guestLogin}>Login as Guest</Button>
          </div>
        </form>
      </div>
    );
  }
});


module.exports = SignUpForm
