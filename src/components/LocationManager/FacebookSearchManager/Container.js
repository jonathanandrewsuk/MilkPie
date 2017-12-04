import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button, Image, List } from 'semantic-ui-react'

import updateApp from '../../../state-manager/updateApp'

class Container extends Component {
  componentDidMount() {
    updateApp('fetchCountries')
    // updateApp('searchPlaces', { country: 'Rwanda' })
  }
  fetchDetails(e, countryId) {
    debugger
  }

  render() {
    let { countries } = this.props.locationManager;
    console.log(countries)

    return (
      <div className="ui internally celled grid">
        <CountryListComponent countries={countries} fetchDetails={(e, countryId) => this.fetchDetails(e, countryId)} />
      </div>
    )
  }
}


const CountryListComponent = ({ countries, fetchDetails }) => (
  <List divided verticalAlign='middle'>
    {
      countries.map((country, key) => <CountryComponent {...country} fetchDetails={fetchDetails} key={key}/>)
    }
  </List>
)

const CountryComponent = ({ countryId, countryFlg, countryName, fetchDetails }) => (
  <List.Item>
    <List.Content floated='right'>
      <Button onClick={(e) => fetchDetails(e, countryId)}>Add</Button>
    </List.Content>
    <Image avatar src={countryFlg} />
    <List.Content>
      {countryName}
    </List.Content>
  </List.Item>
)

function mapStateToProps(state) {
  return { 
    locationManager: state.locationManager.toJS(),
  }
}

export default connect(mapStateToProps)(Container)