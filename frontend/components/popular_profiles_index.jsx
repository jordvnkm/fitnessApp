const React = require("react");

const PopularProfilesIndex = React.createClass({

  profiles: function(){

  },

  render: function(){
    return (
      <div>
        {
          this.props.profiles.map((user) => {
            return <div key={user.id}>{user.username} : follower count = {user.follower_count}</div>
          })
        }
      </div>
    )
  }
});


module.exports = PopularProfilesIndex;
