const React = require("react");
const ReactDOM = require("react-dom");

const ProfileMap = React.createClass({
  componentDidMount: function(){
    const mapDOMNode = ReactDOM.findDOMNode(this.refs.profileMap);
    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435} , // this is SF
      zoom: 12
    };

    this.map = new google.maps.Map(mapDOMNode, mapOptions);

    this.placeCompletedMarkers();
    this.placeAuthoredMarkers();
    this.placeFavoritedMarkers();
  },

  placeCompletedMarkers: function(){
    let routes = this.props.routes.completed;
    let iconImage = "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png";
    routes.forEach((route) => {

      let start = route.waypoints[0];
      let marker = new google.maps.Marker({
        position: {lat: parseFloat(start.lat), lng: parseFloat(start.lng)},
        map: this.map,
        icon: iconImage,
      });
    });
  },

  placeAuthoredMarkers: function(){
    let routes = this.props.routes.authored;
    let iconImage = "http://maps.google.com/mapfiles/ms/icons/blue-dot.png";
    routes.forEach((route) => {

      let start = route.waypoints[0];
      let marker = new google.maps.Marker({
        position: {lat: parseFloat(start.lat), lng: parseFloat(start.lng)},
        map: this.map,
        icon: iconImage,
      });
    });
  },

  placeFavoritedMarkers: function(){
    let routes = this.props.routes.favorited;
    let iconImage = "http://maps.google.com/mapfiles/ms/icons/red-dot.png";
    routes.forEach((route) => {

      let start = route.waypoints[0];
      let marker = new google.maps.Marker({
        position: {lat: parseFloat(start.lat), lng: parseFloat(start.lng)},
        map: this.map,
        icon: iconImage,
      });
    });
  },

  render: function(){
    return (
      <div className="map" ref="profileMap">

      </div>
    );
  }
});


module.exports = ProfileMap;
