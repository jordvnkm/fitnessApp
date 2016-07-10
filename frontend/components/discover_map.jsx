const React = require("react");
const ReactDOM = require("react-dom");
const hashHistory = require("react-router").hashHistory;

const DiscoverMap = React.createClass({
  componentDidMount: function(){
    let centerMap = {lat: 37.7758, lng: -122.435};
    if (this.props.location){
      centerMap = {lat: parseFloat(this.props.location.center_lat),
                lng: parseFloat(this.props.location.center_lng)};

    }
    const mapDOMNode = ReactDOM.findDOMNode(this.refs.discoverMap);
    const mapOptions = {
      center: centerMap , // this is SF
      zoom: 12,
      scrollwheel: false
    };

    this.map = new google.maps.Map(mapDOMNode, mapOptions);

    this.markers = [];
    if (this.props.routes){
      this.placeMarkers(this.props.routes);
    }
  },

  componentWillReceiveProps: function(newProps){
    if (newProps.location){
      let centerLat = parseFloat(newProps.location.center_lat);
      let centerLng = parseFloat(newProps.location.center_lng);
      this.map.setCenter({lat: centerLat, lng: centerLng});
    }
    this.markers.forEach((marker) => {
      marker.setMap(null);
    });
    this.markers = [];

    if (newProps.routes){
      this.placeMarkers(newProps.routes);
    }
  },


  placeMarkers: function(routes){
    let iconImage = "http://maps.google.com/mapfiles/ms/icons/orange-dot.png";
    routes.forEach((route) => {
      const contentString = `<div class="infoWindow" id="route${route.id}" ref="infowindow">`  +
              `<h3 class="iw-header">${route.name}</h3>` +
              `<div class="iw-content">` +
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
      <div className="discoverMap" ref="discoverMap">
      </div>
    );
  }
});


module.exports = DiscoverMap;
