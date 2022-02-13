// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {
    count: 0,
  }

  onIncrement = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  onDecrement = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state

    return (
      <div className="main-container">
        <div className="inner-container">
          <h1 className="heading">SPEEDOMETER</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            className="image"
            alt="speedometer"
          />
          <h1 className="speed">Speed Is {count}mph</h1>
          <p className="paragraph">Min Limit is 0mph, Max Limit is 200mph</p>
          <div className="button-container">
            <button
              type="button"
              className="accelerate"
              onClick={this.onIncrement}
            >
              Accelerate
            </button>
            <button type="button" className="brake" onClick={this.onDecrement}>
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Speedometer
