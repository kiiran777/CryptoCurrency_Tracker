// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

class CryptocurrencyTracker extends Component {
  state = {
    crypotcurrencyData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCryptocurrency()
  }

  getCryptocurrency = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()

    this.setState({
      crypotcurrencyData: data.map(eachCurrency => ({
        id: eachCurrency.id,
        currencyLogoUrl: eachCurrency.currency_logo,
        currencyName: eachCurrency.currency_name,
        usdValue: eachCurrency.usd_value,
        euroValue: eachCurrency.euro_value,
      })),
      isLoading: false,
    })
  }

  renderCryptocurrencyList = () => {
    const {crypotcurrencyData} = this.state

    return <CryptocurrenciesList crypotcurrencyData={crypotcurrencyData} />
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="Rings" color="#ffffff" height={80} width={80} />
    </div>
  )

  render() {
    const {isLoading} = this.state

    return (
      <div className="app-container">
        {isLoading ? this.renderLoader() : this.renderCryptocurrencyList()}
      </div>
    )
  }
}

export default CryptocurrencyTracker
