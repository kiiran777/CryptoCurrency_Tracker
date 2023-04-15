// Write your JS code here
import {Component} from 'react'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  renderCryptocurrencyHeader = () => (
    <div className="header-container">
      <p className="coin-type">Coin Type</p>
      <div className="usd-euro-container">
        <p className="value">USD</p>
        <p className="value">EURO</p>
      </div>
    </div>
  )

  renderCryptocurrencyVeiw = () => {
    const {crypotcurrencyData} = this.props
    return (
      <div className="cryptocurrency-container" data-testis="loader">
        {this.renderCryptocurrencyHeader()}
        <ul className="list">
          {crypotcurrencyData.map(eachCurrency => (
            <CryptocurrencyItem
              key={eachCurrency.id}
              cryptocurrencyDetails={eachCurrency}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="container" data-testid="loader">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="img"
        />
        {this.renderCryptocurrencyVeiw()}
      </div>
    )
  }
}

export default CryptocurrenciesList
