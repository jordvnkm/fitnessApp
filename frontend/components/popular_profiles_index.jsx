const React = require("react");
const PopularIndexItem = require("./popular_index_item");

const PopularProfilesIndex = React.createClass({


  render: function(){
    return (
      <div className="popularIndex">
        {
          this.props.profiles.map((user) => {
            return <PopularIndexItem key={user.id} user={user}/>
          })
        }
      </div>
    )
  }
});


module.exports = PopularProfilesIndex;
