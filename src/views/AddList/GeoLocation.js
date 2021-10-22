import React, { useEffect } from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";




const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 25.455, lng: 100.788 }}
  >
    {props.isMarkerShown && mapData.map((item) => {
      return (
        <Marker position={item} />
      );
    })
    }
  </GoogleMap>
));

const mapData = [
  {
    lat: 25.455,
    lng: 100.788
  },
  {
    lat: 27.405,
    lng: 100.780
  },
  {
    lat: 28.454444,
    lng: 100.7887893
  },
  {
    lat: 26.255,
    lng: 100.488
  },
];


function GeoLocation(props) {

  useEffect(() => {
    let login = window.localStorage.getItem("loggedin");
    if (login !== "Dashboard") {
      props.history.push("/login");
    }
  }, []);

  return (
    <>
    <text>Geo Location</text>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
          <MyMapComponent isMarkerShown
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `600px`, width: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              />
          </Card>
        </GridItem>
      </GridContainer>
    </>
  );
}

export default GeoLocation;
