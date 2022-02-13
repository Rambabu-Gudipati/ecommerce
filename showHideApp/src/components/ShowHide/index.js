// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    showFirstName: false,
    showLastName: false,
  }

  onShowLastName = () => {
    this.setState(prevState => ({showLastName: !prevState.showLastName}))
  }

  onShowFirstName = () => {
    this.setState(prevState => ({showFirstName: !prevState.showFirstName}))
  }

  render() {
    const {showFirstName, showLastName} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="buttons-container">
          <div className="first-name-container">
            <button
              type="button"
              className="firstname"
              onClick={this.onShowFirstName}
            >
              Show/Hide FirstName
            </button>
            {showFirstName && <p className="name">Joe</p>}
          </div>
          <div className="first-name-container">
            <button
              type="button"
              className="firstname"
              onClick={this.onShowLastName}
            >
              Show/Hide LastName
            </button>
            {showLastName && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
