const React = require("react");
const ReactDOM = require("react-dom");
const hashHistory = require("react-router").hashHistory;

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
    let iconImage = "http://maps.google.com/mapfiles/ms/icons/green-dot.png";
    routes.forEach((route) => {
      const contentString = `<div class="infoWindow" id="route${route.id}" ref="infowindow">`  +
              `<h3 class="iw-header">Completed Route</h3>` +
              `<h4>Route name : ${route.name}</h4>` +
              `<h4>Route author : ${route.author}</h4>` +
              `<div>` +
                `<h5>Starting waypoint latitude: ${route.waypoints[0].lat}</h5>` +
                `<h5>Starting waypoint longitude: ${route.waypoints[0].lng}</h5>` +
              `</div>` +
            `</div>`;

      const infoWindow = new google.maps.InfoWindow({
        content: contentString
      });


      google.maps.event.addListener(infoWindow, 'domready', () => {
        document.getElementById(`route${route.id}`).addEventListener("click", (event) => {
          event.preventDefault();
          event.stopPropagation();
          hashHistory.push(`/routes/${route.id}`);
        })
      });

      let start = route.waypoints[0];
      let marker = new google.maps.Marker({
        position: {lat: parseFloat(start.lat), lng: parseFloat(start.lng)},
        map: this.map,
        icon: iconImage,
      });

      marker.addListener('click', function(){
        infoWindow.open(this.map, marker);
      });
    });
  },

  placeAuthoredMarkers: function(){
    let routes = this.props.routes.authored;
    let iconImage = "http://maps.google.com/mapfiles/ms/icons/blue-dot.png";
    routes.forEach((route) => {
      const contentString = `<div class="infoWindow" id="route${route.id}" ref="infowindow">`  +
              `<h3 class="iw-header">My Route</h3>` +
              `<h4>Route name : ${route.name}</h4>` +
              `<h4>Created at : ${route.created_at}</h4>` +
              `<div>` +
                `<h5>Starting waypoint latitude: ${route.waypoints[0].lat}</h5>` +
                `<h5>Starting waypoint longitude: ${route.waypoints[0].lng}</h5>` +
              `</div>` +
            `</div>`;

      const infoWindow = new google.maps.InfoWindow({
        content: contentString
      });


      google.maps.event.addListener(infoWindow, 'domready', () => {
        document.getElementById(`route${route.id}`).addEventListener("click", (event) => {
          event.preventDefault();
          event.stopPropagation();
          hashHistory.push(`/routes/${route.id}`);
        })
      });

      let start = route.waypoints[0];
      let marker = new google.maps.Marker({
        position: {lat: parseFloat(start.lat), lng: parseFloat(start.lng)},
        map: this.map,
        icon: iconImage,
      });

      marker.addListener('click', function(){
        infoWindow.open(this.map, marker);
      });
    });
  },

  placeFavoritedMarkers: function(){
    let routes = this.props.routes.favorited;
    let iconImage = "http://maps.google.com/mapfiles/ms/icons/red-dot.png";
    routes.forEach((route) => {
      const contentString = `<div class="infoWindow" id="route${route.id}" ref="infowindow">`  +
              `<h3 class="iw-header">Favorited Route</>` +
              `<h4>Route name : ${route.name}</h4>` +
              `<h4>Route author : ${route.author} </h4>` +
              `<div>` +
                `<h5>Starting waypoint latitude: ${route.waypoints[0].lat}</h5>` +
                `<h5>Starting waypoint longitude: ${route.waypoints[0].lng}</h5>` +
              `</div>` +
            `</div>`;

      const infoWindow = new google.maps.InfoWindow({
        content: contentString
      });


      google.maps.event.addListener(infoWindow, 'domready', () => {
        document.getElementById(`route${route.id}`).addEventListener("click", (event) => {
          event.preventDefault();
          event.stopPropagation();
          hashHistory.push(`/routes/${route.id}`);
        })
      });


      let start = route.waypoints[0];
      let marker = new google.maps.Marker({
        position: {lat: parseFloat(start.lat), lng: parseFloat(start.lng)},
        map: this.map,
        icon: iconImage,
      });

      marker.addListener('click', function(){
        infoWindow.open(this.map, marker);
      });
    });
  },

  render: function(){
    return (
      <div className="profileMap" ref="profileMap">

      </div>
    );
  }
});


module.exports = ProfileMap;
