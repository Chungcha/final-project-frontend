import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = compose(
  withProps({
    center: { lat: 38.9072, lng: -77.0369 },
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={19}
    defaultCenter={props.center}
    center={{ lat:props.restaurantCenter.latitude, lng:props.restaurantCenter.longitude }}
  >
    {props.isMarkerShown && <Marker position={{ 
        lat: props.restaurantCenter.latitude, 
        lng: props.restaurantCenter.longitude 
    }} onClick={props.onMarkerClick} 
    />}
  </GoogleMap>
)

class MyFancyComponent extends React.PureComponent {
  state = {
    isMarkerShown: false,
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render() {
    return (
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    )
  }
}

export default MyMapComponent
// import React from 'react'
// import GoogleMapReact from 'google-map-react'

// export default class MyMapComponent extends React.Component{

//   static defaultProps = {
//     center: {
//       lat: 38.9072,
//       lng: -77.0369
//     },
//     zoom:11
//   }

//   render() {
//     console.log(this.props)
//     return (
//       <div style={{ height: '100vh', width: '100%'}}>
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
//           defaultCenter={this.props.center}
//           center={{ lat:this.props.restaurantCenter.latitude, lng:this.props.restaurantCenter.longitude }}
//           defaultZoom={this.props.zoom}
//           onChildMouseEnter={this.onChildMouseEnter}
//           onChildMouseLeave={this.onChildMouseLeave}
//         />
//       </div>
//     )
//   }

// };
