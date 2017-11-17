import React from 'react'
import {withScriptjs, withGoogleMap, GoogleMap, InfoWindow, Marker} from 'react-google-maps'
import { compose, withProps, withState, withHandlers } from 'recompose'
import FaEye from 'react-icons/lib/fa/eye'


const MapWithControlledZoom = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withState('zoom', 'onZoomChange', 8),
  withHandlers(() => {
    const refs = {
      map: undefined,
    }
alert(34);
    return {
      onMapMounted: () => ref => {
        refs.map = ref
      },
      onZoomChanged: ({ onZoomChange }) => () => {
        onZoomChange(refs.map.getZoom())
      }
    }
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultCenter={{ lat: 34.138085, lng: -118.150566 }}
    zoom={props.zoom}
    ref={props.onMapMounted}
    onZoomChanged={props.onZoomChanged}
  >
    <Marker
      position={{ lat: 34.138085 , lng: -118.150566 }}
      onClick={props.onToggleOpen}
    >
      <InfoWindow onCloseClick={props.onToggleOpen}>
        <div>
          <FaEye />
          {" "}
          Controlled zoom: {props.zoom}
        </div>
      </InfoWindow>
    </Marker>
  </GoogleMap>
);

export default MapWithControlledZoom
