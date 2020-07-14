import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './App.css';

var polygons = [{
    "type": "Feature",
    "properties": {},
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                [
                    1.704387,
                    50.779846
                ],
                [
                    1.702294,
                    50.777841
                ],
                [
                    1.702344,
                    50.77608
                ],
                [
                    1.704166,
                    50.775511
                ],
                [
                    1.70601,
                    50.776878
                ],
                [
                    1.706196,
                    50.77809
                ],
                [
                    1.707002,
                    50.778706
                ],
                [
                    1.704387,
                    50.779846
                ]
            ]
        ]
    }
}];

var latlngs = [
    [
        50.779846,
        1.704387
    ],
    [
        50.777841,
        1.702294
    ],
    [
        50.77608,
        1.702344
    ],
    [
        50.775511,
        1.704166
    ],
    [
        50.776878,
        1.70601
    ],
    [
        50.77809,
        1.706196
    ],
    [
        50.778706,
        1.707002
    ],
    [
        50.779846,
        1.704387
    ]
];

class Map extends React.Component {

    constructor(props){
        super(props);

        this.map = null;
    }

    componentDidMount() {
        this.map = L.map('map').setView([50.777,1.703], 15);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
        
        // this.geojson = L.geoJSON(polygons, {
        //     style: function(feature) {
        //         return {
        //             color: "#ff0000",
        //             className: 'polygonclassname'
        //         };
        //     },
        //     onEachFeature: function (feature, layer) {
        //         layer.setStyle({className: 'polygonclassname'});
        //     }
        // });
        // this.geojson.setStyle({className: 'polygonclassname'}); //will add the required class
        // this.map.addLayer(this.geojson);

        // il faut affecter la classe lors de la création du layer
        L.polygon(latlngs, { className: 'polygon_classname' }).addTo(this.map);
    }
    
    render() {
        return (
            <div id='map' className="map"></div>
        )
    }
}

export default Map;
