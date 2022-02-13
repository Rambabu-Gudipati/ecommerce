// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsContainer extends Component {
  state = {
    mangoesCount: 0,
    bananasCount: 0,
  }

  inMangoes = () => {
    this.setState(prevState => ({mangoesCount: prevState.mangoesCount + 1}))
  }

  inBananas = () => {
    this.setState(prevState => ({bananasCount: prevState.bananasCount + 1}))
  }

  render() {
    const {mangoesCount, bananasCount} = this.state
    return (
      <div className="main-container">
        <div className="inner-container">
          <h1 className="heading">
            Bob ate<span className="count-color"> {mangoesCount} </span>
            mangoes<span className="count-color"> {bananasCount} </span>bananas
            <div className="image-container">
              <div className="mango">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                  alt="mango"
                  className="image"
                />
                <button
                  type="button"
                  className="button"
                  onClick={this.inMangoes}
                >
                  Eat Mangoes
                </button>
              </div>
              <div className="mango">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                  alt="banana"
                  className="image"
                />
                <button
                  type="button"
                  className="button"
                  onClick={this.inBananas}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </h1>
        </div>
      </div>
    )
  }
}
export default FruitsContainer
