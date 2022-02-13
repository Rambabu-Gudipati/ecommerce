// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    randomNumber: 0,
  }

  onRandomGenerator = () => {
    const getRandomNumber = Math.ceil(Math.random() * 100)
    this.setState({randomNumber: getRandomNumber})
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="main-container">
        <div className="inner-container">
          <h1 className="heading">Random Number</h1>
          <p className="paragraph">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="button"
            onClick={this.onRandomGenerator}
          >
            Generate
          </button>
          <p className="number">{randomNumber}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
