import { MapContainer, TileLayer } from 'react-leaflet'
import React from 'react';


const Map = () => {
    const campus_center = [42.7294, -73.6797];

    return (
        <MapContainer center={campus_center} zoom={17} style={{ width: "100%", height: "100vh" }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

        </MapContainer>
    );
}

export default Map;


