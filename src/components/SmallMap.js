import React from 'react'
import {withScriptjs, withGoogleMap, GoogleMap, InfoWindow, Marker} from 'react-google-maps'
import { compose, withProps, withState, withHandlers } from 'recompose'
import FaEye from 'react-icons/lib/fa/eye'


const SmallMap = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `300px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withState('zoom', 'onZoomChange', 12),
  withHandlers(() => {
    const refs = {
      map: undefined,
    }

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

export default SmallMap


/*import React from 'react'
import {withScriptjs, withGoogleMap, GoogleMap, InfoWindow, Marker} from 'react-google-maps'
import { compose, withProps, withStateHandlers} from 'recompose'
import {InfoBox} from 'react-google-maps/lib/components/addons/InfoBox'

const SmallMap = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `300px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
    center: { lat: 34.138085 , lng: -118.150566 },
  }),
  withStateHandlers(() => ({
    isOpen: false,
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen,
    })
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={5}
    defaultCenter={props.center}
  >
    <InfoBox
      options={{ closeBoxURL: ``, enableEventPropagation: true }}
    >
      <div style={{ backgroundColor: `yellow`, opacity: 0.75, padding: `12px` }}>
        <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
          Accident Info
        </div>
      </div>
    </InfoBox>
    <Marker
      position={{ lat: 34.138085 , lng: -118.150566 }}
      onClick={props.onToggleOpen}
    >
      {props.isOpen && <InfoBox
        onCloseClick={props.onToggleOpen}
        options={{ closeBoxURL: ``, enableEventPropagation: true }}
      >
        <div style={{ backgroundColor: `yellow`, opacity: 0.75, padding: `12px` }}>
          <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
            Accident
          </div>
        </div>
      </InfoBox>}
    </Marker>
  </GoogleMap>
);

export default SmallMap*/
