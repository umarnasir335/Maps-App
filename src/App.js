import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './App.css';

function App() {
  state = {
    location: {
      lat: 51.505,
      lng: -0.09,
    }
  }
    componentDidMount() {
      getMessages()
        .then(messages => {
          this.setState({
            messages
          });
        });
    }
  
    showMessageForm = () => {
      this.setState({
        showMessageForm: true
      });
      getLocation()
      .then(location => {
        this.setState({
          location,
          haveUsersLocation: true,
          zoom: 13
        });
      });
    }
  
  
  return (
    <div className="App" >
        
        <p>
          Leaflet Map
        </p>
        <div className="map">
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                       A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
              </Marker>
      </MapContainer>

      
    </div>
  </div>
  );
}

export default App;
