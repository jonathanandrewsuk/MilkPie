import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button, Image, List, Checkbox, Icon, Grid, Segment, Input } from 'semantic-ui-react'

// https://github.com/fullstackreact/google-maps-react
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { androidstudio } from 'react-syntax-highlighter/styles/hljs'

import updateApp from '../../../state-manager/updateApp'

import { convertPlaces, fetchPlaceDetail, addressToCountry, extractHours } from './services'

import { LocateForm, SearchForm } from './components'

const DEFAULT_CENTER = {
  lat: -1.94366, lng: 29.88044
}

class Container extends Component {

  componentDidMount() {
    this.props.triggerLoading({ loadingGoogle: true })
  }

  fetchDetails(e, google_place_id) {
    let {service} = this.state
    return fetchPlaceDetail(service, google_place_id).then(placeDeatil => {
      let locationAddress;
      let phoneNumber;
      let websiteUrl;
      let hours;

      let { formatted_address, international_phone_number, formatted_phone_number, website, address_components, opening_hours } = placeDeatil
      console.log(formatted_address, address_components, placeDeatil)
      locationAddress = formatted_address
      phoneNumber = international_phone_number || formatted_phone_number
      websiteUrl = website

      
      // @TODO 
      hours = extractHours(opening_hours)
      let { city, state, locationCountryCode } = addressToCountry(address_components)

      
      let places = this.state.places
      let place = places.find(p => p.google_place_id === google_place_id)
      place.locationAddress = locationAddress;
      place.phoneNumber = phoneNumber;
      place.websiteUrl = websiteUrl;
      place.hours = hours;
      place.locationCountryCode = locationCountryCode;
      place.state = state;
      place.city = city;

      this.setState({ places })
    })
  }

  createListing = (e, place) => {
    debugger
  }

  fetchPlaces(mapProps, map) {
    const { google } = mapProps;
    let service = this.state && this.state.service;
    if(!service) {
      service = new google.maps.places.PlacesService(map);    
      this.setState({ service })
    }
    
    // let rwandaCoords = {lat: 45.15755, lng: 51.85514}
    let center = map.center;
    let coords = { lat: center.lat(), lng: center.lng() }
    this.setState({ places: [] })    
    this.searchNearby(service, coords, google)
  }

  locate = (values) => {
    let center = values.toJS()
    center = {lat: Number(center.lat), lng: Number(center.lng)}    
    this.setState({ center })
  }

  search = (values) => {
    let { radius, query, searchType } = values.toJS()
    this.setState({ radius, query, searchType })    
    const { mapProps, map } = this.state
    this.fetchPlaces(mapProps, map)
  }

  onMapReady(mapProps, map) {
    this.setState({ mapProps, map })
    this.fetchPlaces(mapProps, map);
  }
  onMapMoved = (mapProps, map) => {
    let center = map.center;
      center = { lat: center.lat(), lng: center.lng() }
      console.log(center)
  }

  onMapClicked = (props, marker, e) => {
    let center = e.latLng;
    
    center = { lat: center.lat(), lng: center.lng() }

    this.setState({ center })    
  }

  searchNearby(googleService, location, google) {
    const service = googleService;
    // Specify location, radius and place types for your Places API search.
    let radius = Number(this.state.radius || '5000')
    // let type = this.state.searchType
    const request = {
      location,
      radius
      // types: ['hospital', 'shopping_mall', 'local_government_office', 'school']
    };

    this.setState({ pagination: null })      
    service.nearbySearch(request, (results, status, pagination) => {
      if (status == google.maps.places.PlacesServiceStatus.OK) {

        // @TODO how to achieve this without using state
        if (pagination.hasNextPage) {
          this.setState({ pagination })
        } 

        let convertedPlaces = convertPlaces(results)
        let places = this.state && this.state.places || []
        places = [...convertedPlaces, ...places]
        this.setState({ places })
        // @TODO send request to save search info in the store

        this.props.triggerLoading({ loadingGoogle: false })

      } else {
        console.log(status)
        this.props.triggerLoading({ loadingGoogle: false })
        
      }
    })
  }
  searchNextNearby(pagination) {
    pagination.nextPage()
  }


  render() {
    let { places, pagination, center, mapProps, map } = this.state || {}
    let { google, loaded } = this.props
    // let { googleSearchManager, google, loaded } = this.props
    // let { places } = googleSearchManager @TODO fetch places from redux store
    // console.log(places, loaded, pagination)

    return (
      <div className="ui internally celled grid">
        

        <GridPlacement1 locate={this.locate} search={this.search} mapProps={mapProps} map={map}
          loaded={loaded} google={google} center={center||DEFAULT_CENTER} onMapMoved={this.onMapMoved}  onMapClicked={this.onMapClicked} onMapReady={(mapProps, map) => this.onMapReady(mapProps, map)}
          places={places} pagination={pagination} searchNextNearby={(pagination) => this.searchNextNearby(pagination)} fetchDetails={(e, google_place_id) => this.fetchDetails(e, google_place_id)} createListing={this.createListing} />


      </div>
    )
  }
}

const GridPlacement1 = ({
  locate, mapProps, map, search,
  loaded, google, center, onMapReady, onMapMoved, onMapClicked,
  places, pagination, searchNextNearby, fetchDetails, createListing
}) => (
  <Grid celled='internally'>

    <Grid.Row stretched>
      <Grid.Column width={3}>
        <LocateForm onSubmit={(values) => locate(values)} />      
      </Grid.Column>
      
      {/* <Grid.Column width={4}>
        <Segment><Input fluid placeholder='lat' /></Segment>
        <Segment><Input fluid placeholder='lng' /></Segment>
        <Segment><Button onClick={() => searchNextNearby(null)} fluid>Locate</Button></Segment>
      </Grid.Column> */}
      <Grid.Column width={10}>
        <Segment>

          {loaded ? <GoogleMap google={google} center={center} onMapMoved={onMapMoved}  onMapClicked={onMapClicked} onMapReady={onMapReady} /> : <div>Waiting for the map ...</div>}

          <br/>
          <hr/>
          <br/>
        </Segment>
      </Grid.Column>
      <Grid.Column width={3}>
        <Grid>
          <Grid.Row>
          <Grid.Column width={16}>
            <SearchForm onSubmit={(values) => search(values)} />
          </Grid.Column>
          <Grid.Column width={16}>
            <Button onClick={() => searchNextNearby(pagination)} fluid disabled={!pagination} icon labelPosition='left' primary size='small'>
              Fetch More
            </Button>
          </Grid.Column>
          </Grid.Row>
        </Grid>    
      </Grid.Column>
      {/* <Grid.Column width={4}>
        <Segment><Input fluid placeholder='radius' /></Segment>
        <Segment><Input fluid placeholder='query' /></Segment>
        <Segment><Button onClick={() => search(null)} fluid>Search</Button></Segment>
        
      </Grid.Column> */}
    </Grid.Row>
    {/* {places ? <PlaceListComponent1 places={places} fetchDetails={(e, google_place_id) => fetchDetails(e, google_place_id)} /> : null} */}
    {places ? places.map((place, key) => <PlaceComponent1 place={place} fetchDetails={(e, google_place_id) => fetchDetails(e, google_place_id)} createListing={createListing} key={key} />) : null}
  </Grid>
)

const PlaceComponent1 = ({ place, fetchDetails, createListing, showRaw }) => {
  let { google_place_id, name, imageUrl } = place
  let keys = [ 'locationLatitude', 'locationLongitude', 'locationAddress', 'locationCountryCode', 'state', 'city', 'hours', 'phoneNumber', 'websiteUrl' ]
  return (
  <Grid.Row style={{ borderTop: 'black 1px solid', boxShadow: '0 15px 10px #d1d1d1', marginTop: '1.5em' }}>
    <Grid.Column width={16}>
      <Grid celled='internally'>
      <Grid.Row stretched>
        <Grid.Column width={12}>
          <Segment>
            <Image src={imageUrl} alt={name} />
          </Segment>
        </Grid.Column>
        <Grid.Column width={4}>
          <Segment>{name}</Segment>
          {keys.map((key, i) => place[key]? <Segment key={i}><small>{key}</small>: {place[key]}</Segment>: null)}
          <Segment>
            <Button.Group fluid>
              <Button onClick={(e) => fetchDetails(e, google_place_id)} >Details</Button>
              <Button.Or />
              <Button onClick={e => createListing(e, place)} positive>Save</Button>
            </Button.Group>
          </Segment>
          
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={16}>
        <Segment>
          <SyntaxHighlighter language='json' style={androidstudio}>{JSON.stringify({...place, google_place_id: undefined, google_reference: undefined, google_raw: undefined, source: undefined}, null, 4)}</SyntaxHighlighter>
          {showRaw? <hr />: null}
          {showRaw? <SyntaxHighlighter language='json' style={androidstudio}>{atob(place.google_raw)}</SyntaxHighlighter>: null}
        </Segment>
        </Grid.Column>    
      </Grid.Row>
      </Grid>
    </Grid.Column>    
  </Grid.Row>
)}







const GoogleMap = ({ google, center, onMapReady, onMapClicked, onMapMoved }) => {
  return (
    <div style={{width: '100%', height: '350px', position: 'relative'}}>
      <Map 
        google={google} onReady={onMapReady} visible={true}
        style={{width: '100%', height: '100%', position: 'relative'}}
        className={'map'}
        zoom={15}
        containerStyle={{}}
        center={center}
        initialCenter={center}
        onClick={onMapClicked}
        onDragend={onMapMoved}
        centerAroundCurrentLocation={false}
      >
      <Marker position={center} />
      </Map>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    googleSearchManager: state.googleSearchManager.toJS(),
  }
}

const GSMContainer = connect(mapStateToProps)(Container)









const Listing = ({ places }) => {
  return (
    <ul>
      {places && places.map(p => {
        return (
          <li key={p.id}>
            {p.name}
          </li>
        )
      })}
    </ul>
  )
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyATGQD8lzsQLVssriEM50gQ6l8czMaVrio',
  libraries: ['places']
})(GSMContainer)
