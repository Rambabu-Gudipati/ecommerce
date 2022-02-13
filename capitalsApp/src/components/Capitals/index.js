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

// Write your code here
class Capitals extends Component {
  state = {
    activeId: countryAndCapitalsList[0].id,
  }

  onChangeCapital = event => {
    this.setState({activeId: event.target.value})
  }

  getCountry = () => {
    const {activeId} = this.state
    const activeCountryAndCapital = countryAndCapitalsList.find(
      eachCountry => eachCountry.id === activeId,
    )

    return activeCountryAndCapital.country
  }

  render() {
    const {activeId} = this.state
    const country = this.getCountry(activeId)

    return (
      <div className="app-container">
        <div className="capital-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="question-container">
            <select
              onChange={this.onChangeCapital}
              value={activeId}
              className="capital-select"
            >
              {countryAndCapitalsList.map(eachCountry => (
                <option
                  value={eachCountry.id}
                  key={eachCountry.id}
                  className="option"
                >
                  {eachCountry.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="question">is capital of which country?</p>
          </div>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
