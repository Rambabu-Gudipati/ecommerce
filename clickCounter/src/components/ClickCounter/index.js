// Write your code here
import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {
    increment: 0,
  }

  onIncrement = () => {
    this.setState(prevState => ({increment: prevState.increment + 1}))
  }

  render() {
    const {increment} = this.state
    return (
      <div className="main-container">
        <div className="inner-container">
          <h1 className="heading">
            The Button has been clicked
            <br />
            <span className="count">{increment} </span>
            times
          </h1>
          <p className="paragraph">Click the button to increase the count!</p>
          <button type="button" className="button" onClick={this.onIncrement}>
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}
export default ClickCounter
