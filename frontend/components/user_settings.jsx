const React = require("react");
const UserStore = require("../stores/users_store");
const UserActions = require("../actions/user_actions");
const UserConstants = require("../constants/user_constants");
const hashHistory = require("react-router").hashHistory;
const ErrorStore = require("../stores/error_store");

const Button = require("react-bootstrap").Button;

const FormGroup = require("react-bootstrap").FormGroup;
const ControlLabel = require("react-bootstrap").ControlLabel;
const FormControl = require("react-bootstrap").FormControl;
const HelpBlock = require("react-bootstrap").HelpBlock;


const UserSettings = React.createClass({
  getInitialState: function(){
    let user = UserStore.currentUser();

    let name = "";
    let myemail = "";
    let myprofileImgUrl = "";
    if (user){
      name = user.username;
      myemail = user.email;
      myprofileImgUrl = user.profile_img_url;
      this.profile_img_url = user.profile_img_url;
      this.username = user.username;
      this.email = user.email;
      this.password = "";
      this.successfullSave = false;
    }

    return {currentUser: user, username: name,
            password: "", passwordConfirm: "", email: myemail, profileImgUrl: myprofileImgUrl};
  },

  componentDidMount: function(){
    if (!this.state.currentUser){
      hashHistory.push("/");
    }
    this.userListener = UserStore.addListener(this.updateUser);
    this.errorListener = ErrorStore.addListener(this.updateErrors);
  },

  componentWillUnmount: function(){
    this.userListener.remove();
    this.errorListener.remove();
  },

  componentWillReceiveProps: function(newProps){
    let user = UserStore.currentUser();
    if (parseInt(newProps.params.userId) !== user.id){
      alert("cannot view another users settings")
      hashHistory.push("/")
    }
    else {
      this.setState({currentUser: UserStore.currentUser()});
    }
  },

  updateErrors: function(){
    this.setState({errors: ErrorStore.all()});
  },

  updateUser: function(){
    let user = UserStore.currentUser();
    if (parseInt(this.props.params.userId) !== user.id){
      alert("cannot view another users settings")
      hashHistory.push("/")
    }
    else {
      if (this.profile_img_url !== UserStore.currentUser().profile_img_url
          || this.password !== this.state.password || this.email !== UserStore.currentUser().email
          || this.username !== UserStore.currentUser().username){
        this.successfullSave = true;
      }
      this.setState({currentUser: UserStore.currentUser()});
    }
  },

  usernameChange: function(event){
    this.setState({username: event.target.value});
  },

  emailChange: function(event){
    this.setState({email: event.target.value});
  },


  passwordChange: function(event){
    this.setState({password: event.target.value});
  },

  passwordConfirmChange: function(event){
    this.setState({passwordConfirm: event.target.value})
  },

  passwordValidation: function(){
    const length1 = this.state.password.length;
    const length2 = this.state.passwordConfirm.length;
    if (length1 >= 6 && this.state.password === this.state.passwordConfirm){
      return "success";
    }
    else if (length1 > 0){
      return "error";
    }
  },

  onSubmit: function(event){
    event.preventDefault();
    event.stopPropagation();
    if (this.state.password !== this.state.passwordConfirm){
      UserActions.handleError({
        responseJSON: {errors: ["passwords must match"]}
      });
    }
    else {
      if (this.state.password === ""){
        UserActions.updateUser({
          username: this.state.username,
          email: this.state.email,
          profile_img_url: this.state.profileImgUrl,
          id: this.state.currentUser.id
        })
      }
      else {
        UserActions.updateUser({
          username: this.state.username,
          email: this.state.email,
          password: this.state.password,
          profile_img_url: this.state.profileImgUrl,
          id: this.state.currentUser.id
        })
      }
    }
  },

  profileUpload: function(event){
    event.preventDefault();
    let self = this;
    cloudinary.openUploadWidget(window.cloudinary_options,
      function(error, images){
        if (error === null){
          self.setState({profileImgUrl: images[0].url})
        }
    });
  },

  profilePicture: function(){
    if (this.state.profileImgUrl){
      return (
        <div className="profilePic">
          <img className="image" src={this.state.profileImgUrl} />
          <Button onClick={this.profileUpload}>Upload Profile Picture</Button>
        </div>
      );
    }
  },

  errors: function(){
    if (!(this.state.errors)){
      return;
    }
    var self = this;
    return (<ul>
    {
      Object.keys(self.state.errors).map(function(key, i){
        return (<li key={i}>{self.state.errors[key]}</li>);
      })
    }
    </ul>);
  },

  success: function(){
    if (this.successfullSave){
      return <div>Settings Saved!</div>
    }
  },


  render: function(){
    return (
      <div className="userSettings">
        {this.errors()}
        {this.success()}
        <div className="settingsContainer">
          <h2 className="settingsHeader">Settings</h2>
          <div className="settingsInfo">
            {this.profilePicture()}
            <div className="mySettingsForm">
              <form className="settingsForm" onSubmit={this.onSubmit}>
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
                  <ControlLabel>New Password</ControlLabel>
                  <FormControl type="password" placeholder="Enter Password"
                    onChange={this.passwordChange} value={this.state.password}/>
                  <FormControl.Feedback />
                  <HelpBlock>Passwords must be at least 6 characters</HelpBlock>
                </FormGroup>

                <FormGroup controlId="formControlsPassword" validationState={this.passwordValidation()}>
                  <ControlLabel>Password Confirmation</ControlLabel>
                  <FormControl type="password" placeholder="Re enter password"
                    onChange={this.passwordConfirmChange} value={this.state.passwordConfirm}/>
                  <FormControl.Feedback />
                  <HelpBlock>Passwords must be at least 6 characters</HelpBlock>
                </FormGroup>

                <div className="formSubmit">
                  <Button type="submit">Update Settings</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    );
  }
});


module.exports = UserSettings;
