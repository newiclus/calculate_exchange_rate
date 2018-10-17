/* React */
import React, { Component } from "react";
//import PropTypes from 'prop-types'; // ES6

import BaseCurrency from "./components/BaseCurrency";
import ConverCurrency from "./components/ConvertCurrency";
import ButtonControl from "./components/common/ButtonControl";
import ApiCurrency from "./services/ApiCurrency";
import {numberWithCommas} from "./services/utils";

class App extends Component {
  constructor(props) {
    super(props);
    this.ApiCurrency = new ApiCurrency();
    this.state = {
      base: "USD",
      symbols: "EUR,GBP,JPY",
      currency: "EUR",
      exchangeRate: {},
      amount: "",
      result: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBase = this.handleBase.bind(this);
  }

  handleBase (event) {
    this.setState({
      amount: parseInt(event.target.value)
    });
  }

  handleSubmit (event) {
    event.preventDefault();

    let code = this.state.base + this.state.currency;
    let rate = this.state.exchangeRate[code];
    let result = this.state.amount * rate;

    this.setState({
      result: numberWithCommas(result.toFixed(2))
    });
  }

  componentDidMount () {
    let base = this.state.base;
    let symbols = this.state.symbols;

    this.ApiCurrency.getExchangeRate(base, symbols)
    .then( result => {
      this.setState({
        exchangeRate: result.quotes
      });
    })
    .catch( err => {
      console.error("Error:", err);
    });
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit} noValidate>
        <div className="row">
          <BaseCurrency 
            idName="amountBase" 
            placeholder="Enter the amount" 
            onChange={this.handleBase} 
            prepend={this.state.base} />

          <ConverCurrency 
            idName="amountResult" 
            placeholder="amount" 
            result={this.state.result} 
            prepend={this.state.currency} />

          <div className="col-md-12 actions text-center">
            <ButtonControl 
              idName="btnCalculate" 
              btnClass="btn-primary btn-lg" 
              title="Calculate" 
              typeButton="submit" />
          </div>
        </div>
      </form>
    );
  }
}

export default App;