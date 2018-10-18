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
   * @param {string} base    Currency symbol base, e.g: USD
   * @param {string} symbols  Currencies symbols to convert, e.g: EUR,GBP,PEN
   * @return {JSON} a JSON object with the exchange rates
   */
  getExchangeRate (base, symbols) {
    store.removeExpiredKeys();

    if ( store.get('exchange_rates') ) {
      return Promise.resolve( store.get('exchange_rates') );
    }
    else {
      return axios({
        method: 'get',
        url: this.endpoint + '&source=' + base + '&currencies=' + symbols,
        responseType: "json"
      })
      .then( response => {
        let duration = 600000 // 10 min
        store.set('exchange_rates', response.data, new Date().getTime() + duration);
        return response.data;
      });
    }
  }
}