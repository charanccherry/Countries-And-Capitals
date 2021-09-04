import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {
    activeCapitalID: countryAndCapitalsList[0].id,
  }

  onChangeCountry = event => {
    this.setState({activeCapitalID: event.target.value})
  }

  getCountry = () => {
    const {activeCapitalID} = this.state

    const activeCapitalCountryID = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === activeCapitalID,
    )

    return activeCapitalCountryID.country
  }

  render() {
    const {activeCapitalID} = this.state

    const country = this.getCountry(activeCapitalID)

    return (
      <div className="country-Cont">
        <div className="country-card">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="country-select">
            <select
              className="select-option"
              onChange={this.onChangeCountry}
              value={activeCapitalID}
            >
              {countryAndCapitalsList.map(eachCapital => (
                <option
                  className="option"
                  key={eachCapital.id}
                  value={eachCapital.id}
                >
                  {eachCapital.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="country-display">is capital of which country?</p>
          </div>
          <p className="country-display-text">{country}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
