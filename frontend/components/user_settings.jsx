const React = require("react");
const UserStore = require("../stores/users_store");
const UserActions = require("../actions/user_actions");
const UserConstants = require("../constants/user_constants");
const hashHistory = require("react-router").hashHistory;

const Button = require("react-bootstrap").Button;

const FormGroup = require("react-bootstrap").FormGroup;
const ControlLabel = require("react-bootstrap").ControlLabel;
const FormControl = require("react-bootstrap").FormControl;
const HelpBlock = require("react-bootstrap").HelpBlock;


const UserSettings = React.createClass({
  getInitialState: function(){
    let user = UserStore.currentUser();
    return {currentUser: user, username: user.username,
            password: "", passwordConfirm: "", email: user.email, profileImgUrl: user.profile_img_url};
  },

  componentDidMount: function(){
    this.userListener = UserStore.addListener(this.updateUser);
  },

  componentWillUnmount: function(){
    this.userListener.remove();
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

  updateUser: function(){
    let user = UserStore.currentUser();
    if (parseInt(this.props.params.userId) !== user.id){
      alert("cannot view another users settings")
      hashHistory.push("/")
    }
    else {
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
    console.log("update account settings")
    if (password !== passwordConfirm){
      UserActions.handleError({
        responseJSON: {errors: ["passwords must match"]}
      });
    }
    else {
      UserActions.updateUser({
        username: this.state.username,
        email: this.state.email,
        password: myPassword,
        profile_img_url: this.state.profileImgUrl
      })
    }
  },

  profileUpload: function(event){
    event.preventDefault();
    cloudinary.openUploadWidget(window.cloudinary_options,
      (error, images) => {
        if (error === null){
          console.log(images[0].url);
          this.setState({profileImgUrl: images[0].url})
        }
    });
  },

  profilePicture: function(){
    if (this.state.profileImgUrl){
      return (
        <div className="profilePic">
          <img className="image" src={this.state.profileImgUrl} />
        </div>
      );
    }
    else {
      return (
        <div className="profilePic">
          <img className="image" src="https://www.b1g1.com/assets/admin/images/no_image_user.png" />
        </div>
      )
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


  render: function(){
    return (
      <div>
        {this.errors()}
        {this.profilePicture()}
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

            <Button onClick={this.profileUpload}>Upload Profile Picture</Button>

            <div className="formSubmit">
              <Button type="submit">Update Settings</Button>
            </div>
          </form>
        </div>
      </div>

    );
  }
});


module.exports = UserSettings;
