const axios = require('axios');

//Session Storage
const engine = require('store/src/store-engine');
const storage = {session: [require('store/storages/sessionStorage')]};
const plugins = { expire: [require('store/plugins/expire')] };
const store = engine.createStore(storage.session, plugins.expire);

const ACCESS_KEY = "18b6e05a209167c2642d625468e52d8b";

export default class ApiCurrency {
  constructor() {
    this.endpoint = "http://www.apilayer.net/api/live?access_key=" + ACCESS_KEY;
  }

  /**
   * @param {string} base    Currency symbol base
   * @param {string} symbol  Currency symbol to convert
   * @return {JSON} a JSON object with the exchange rate
   */
  getExchangeRate (base, symbol) {
    store.removeExpiredKeys();

    if ( store.get('exchange_rate') ) {
      return Promise.resolve( store.get('exchange_rate') );
    }
    else {
      return axios({
        method: 'get',
        url: this.endpoint + '&source=' + base + '&currencies=' + symbol,
        responseType: "json"
      })
      .then( response => {
        let duration = 600000 // 10 min
        store.set('exchange_rate', response.data, new Date().getTime() + duration);
        return response.data;
      });
    }
  }
}