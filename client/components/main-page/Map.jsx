import React from 'react'
import { browserHistory } from 'react-router';

let GoogleMapLoaded = false;
let map = null;

function fromLatLngToPoint(latLng, map) {
  var topRight = map.getProjection().fromLatLngToPoint(map.getBounds().getNorthEast());
  var bottomLeft = map.getProjection().fromLatLngToPoint(map.getBounds().getSouthWest());
  var scale = Math.pow(2, map.getZoom());
  var worldPoint = map.getProjection().fromLatLngToPoint(latLng);
  return new google.maps.Point((worldPoint.x - bottomLeft.x) * scale, (worldPoint.y - topRight.y) * scale);
}

const Map = React.createClass({
  getInitialState() {
    return {
      isMapReady: false
    };
  },

  componentDidMount() {
    if (GoogleMapLoaded) {
      this.handleScriptOnLoad();
    } else {
      let scriptTag = document.createElement('script');
      scriptTag.setAttribute('src', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCf9LEFx4-NkNFr-WnbVP-DnIVAndzSF04');
      scriptTag.onload = this.handleScriptOnLoad;
      GoogleMapLoaded = true;

      document.body.appendChild(scriptTag);
    }
  },

  handleMapCenterChanged() {
    if (this.state.isMapReady) {
      // Force update markers
      this.setState({});
    }
  },

  componentWillUnmount() {
    google.maps.event.clearListeners(map, 'center_changed');
  },

  handleScriptOnLoad() {
    var self = this;
    const KAISTLatLng = {lat: 36.369535, lng: 127.362564};

    map = new google.maps.Map(document.getElementById('google-map'), {
      center: KAISTLatLng,
      zoom: 15,
      scrollwheel: false,
      navigationControl: false,
      mapTypeControl: false,
      scaleControl: false,
      draggable: true,
      disableDefaultUI: true,
      disableDoubleClickZoom: true
    });

    map.addListener('center_changed', self.handleMapCenterChanged);

    google.maps.event.addListenerOnce(map, 'idle', () => {
      self.setState({
        isMapReady: true
      });
    });

    let marker = new google.maps.Marker({
      position: KAISTLatLng,
      map: map,
      title: 'KAIST'
    });
  },

  handleOnSelectMarker(id) {
    if (this.props.restaurantId != id) {
      browserHistory.push(`/database/restaurant/${id}`);
    }
  },

  render() {
    return (
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          height: '100%'
        }}
      >
        <div
          id='google-map'
        />
      </div>
    );
  }
});

export default Map