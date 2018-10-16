/* React */
import React, { Component } from "react";
import PropTypes from 'prop-types'; // ES6

import InputControl from "./components/common/InputControl";
import ButtonControl from "./components/common/ButtonControl";
import ApiCurrency from "./services/ApiCurrency";

class App extends Component {
  constructor(props) {
    super(props);
    this.ApiCurrency = new ApiCurrency();
    this.state = {
      exchangeRate: 0.0
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit () {}

  componentDidMount () {
    this.ApiCurrency.getExchangeRate("USD", "EUR")
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
      <form onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <InputControl placeholder="Enter the USD amount" />
          </div>
          <div className="col-md-6">
            <InputControl placeholder="EUR amount" readOnly={true} />
          </div>

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