import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  getRandomNUmber = () => {
    const number = Math.ceil(Math.random() * 100)
    console.log(number)
    this.setState({randomNumber: number})
  }

  render() {
    const {randomNumber} = this.state

    return (
      <div className="main-container">
        <div className="bg-container">
          <div className="container">
            <h1 className="heading">Random Number</h1>
            <p className="text">
              Generate a random number in the range of 0 to 100
            </p>
            <button
              type="button"
              className="button"
              onClick={this.getRandomNUmber}
            >
              Generate
            </button>
            <p className="random-number">{randomNumber}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
