// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    total: 0,
    heads: 0,
    tails: 0,
    coinImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onClickCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        total: prevState.total + 1,
        heads: prevState.heads + 1,
        coinImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      }))
    } else {
      this.setState(prevState => ({
        total: prevState.total + 1,
        tails: prevState.tails + 1,
        coinImage: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      }))
    }
  }

  render() {
    const {total, heads, tails, coinImage} = this.state

    return (
      <div className="container">
        <div className="sub-container">
          <h1 className="heading">Coin Toss Game</h1>
          <h1 className='heading2'>Heads (or) Tails</h1>
          <img src={coinImage} alt="toss result" className="image" />
          <button type="button" className="button" onClick={this.onClickCoin}>
            Toss Coin
          </button>
          <div className='result'>
          <p>Total:{total}</p>
          <p>Heads:{heads}</p>
          <p>Tails:{tails}</p>
         </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
