const React = require("react");
const ReactDOM = require("react-dom");
const hashHistory = require("react-router").hashHistory;

const ProfileMap = React.createClass({
  componentDidMount: function(){
    let centerLat;
    let centerLng;

    if (this.props.location){
      centerLat = parseFloat(this.props.location.center_lat);
      centerLng = parseFloat(this.props.location.center_lng);
    }
    else {
      centerLat = 34.0395;
      centerLng = -118.288;
    }
    const mapDOMNode = ReactDOM.findDOMNode(this.refs.profileMap);
    const mapOptions = {
      center: {lat: centerLat, lng: centerLng} , // this is SF
      zoom: 12,
      scrollwheel: false
    };

    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.markers = [];
    this.placeCompletedMarkers(this.props.routes.completed);
    this.placeAuthoredMarkers(this.props.routes.authored);
    this.placeFavoritedMarkers(this.props.routes.favorited);
  },

  componentWillReceiveProps: function(newProps){
    if (newProps.location){
      let centerLat = parseFloat(newProps.location.center_lat);
      let centerLng = parseFloat(newProps.location.center_lng);
      this.map.setCenter({lat: centerLat, lng: centerLng});
      this.map.setZoom(12);
    }
    this.markers.forEach((marker) => {
      marker.setMap(null);
    });
    this.markers = [];
    this.placeCompletedMarkers(newProps.routes.completed);
    this.placeAuthoredMarkers(newProps.routes.authored);
    this.placeFavoritedMarkers(newProps.routes.favorited);
  },

  placeCompletedMarkers: function(routes){
    // let routes = this.props.routes.completed;
    let iconImage = "http://maps.google.com/mapfiles/ms/icons/green-dot.png";
    routes.forEach((route) => {
      const contentString = `<div class="infoWindow" id="route${route.id}" ref="infowindow">`  +
              `<h3 class="iw-header">Completed Route</h3>` +
              `<div class="iw-content">` +
                `<h5>Route name : ${route.name}</h5>` +
                `<h5>Route author : ${route.author.username}</h5>` +
                `<p class="iw-description">Description: ${route.notes}</p>` +
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
      this.markers.push(marker);
    });
  },

  placeAuthoredMarkers: function(routes){
    // let routes = this.props.routes.authored;
    let iconImage = "http://maps.google.com/mapfiles/ms/icons/blue-dot.png";
    routes.forEach((route) => {
      const contentString = `<div class="infoWindow" id="route${route.id}" ref="infowindow">`  +
              `<h3 class="iw-header">Authored Route</h3>` +
              `<div class="iw-content">` +
                `<h5>Route name : ${route.name}</h5>` +
                `<h5>Favorited ${route.favorite_count} times</h5>` +
                `<p class="iw-description">Description: ${route.notes}</p>` +
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
      this.markers.push(marker);
    });
  },

  placeFavoritedMarkers: function(routes){
    // let routes = this.props.routes.favorited;
    let iconImage = "http://maps.google.com/mapfiles/ms/icons/red-dot.png";
    routes.forEach((route) => {
      const contentString = `<div class="infoWindow" id="route${route.id}" ref="infowindow">`  +
              `<h3 class="iw-header">Favorited Route</h3>` +
              `<div class="iw-content">` +
                `<h5>Route name : ${route.name}</h5>` +
                `<h5>Route author : ${route.author.username}</h5>` +
                `<p class="iw-description">Description: ${route.notes}</p>` +
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

      this.markers.push(marker);
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
