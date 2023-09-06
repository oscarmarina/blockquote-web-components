import { AjaxProvider } from '../index.js';

/**
 * A class for managing currency-related operations.
 * @extends EventTarget
 */
export class DmCurrencies extends EventTarget {
  constructor(config = {}) {
    super();

    /**
     * The base URL for the AJAX request.
     * @type {string}
     */
    this.url = '';

    this._assignConfig(config);
  }

  _assignConfig(config) {
    if (config && typeof config === 'object') {
      Object.assign(this, config);
    }
  }

  /**
   * Get the available currencies.
   *
   * @throws {Error} If there is an error while fetching available currencies.
   * @returns {Promise<Object|null>} A promise that resolves to the available currencies or null if there's an error.
   * @fires DmCurrencies#success-get-currency
   * @fires DmCurrencies#error-currency
   */
  async getCurrencies() {
    try {
      const ajaxProvider = new AjaxProvider({
        url: this.url,
      });

      const data = await ajaxProvider.generateRequest();
      const { currencies } = data.response;

      /**
       * Fired after a successful response.
       *
       * @event success-currencyy
       * @type {Object}
       * @property {Object} detail.currencies - All info of the available currencies.
       */
      this._dispatchEvent('success-currency', {
        currencies,
      });

      return currencies;
    } catch (error) {
      /**
       * Fired after an error response.
       *
       * @event error-currency
       * @type {Object}
       * @property {Error} detail.error - The error object.
       */
      this._dispatchEvent('error-currency', { error });

      throw error; // Re-throw the error to indicate that it wasn't handled here.
    }
  }

  /**
   * Get the available currencies from a country code.
   *
   * @param {String} countryCode - Country code in two-character ISO format.
   * @returns {Promise<Object|null>} A promise that resolves to the currency for the given country code or null if there's an error.
   * @fires DmCurrencies#success-get-currency-from-country-code
   */
  async getCurrenciesFromCountryCode(countryCode) {
    const currencies = await this.getCurrencies();

    const currency = (currencies || []).find(currentCurrency => {
      const { countries } = currentCurrency;
      return countries.some(country => country.code === countryCode);
    });

    /**
     * Fired after a successful response.
     *
     * @event success-get-currency-from-country-code
     * @type {Object}
     * @property {Object} detail.currency - The currency of a country.
     */
    this._dispatchEvent('success-currency-from-country-code', {
      currency,
    });

    return currency;
  }

  /**
   * Trigger a custom event with the specified event name and detail.
   *
   * @param {string} eventName - The name of the event.
   * @param {Object} detail - The event detail object.
   * @private
   */
  _dispatchEvent(eventName, detail) {
    this.dispatchEvent(
      new CustomEvent(eventName, {
        detail,
        bubbles: true,
        composed: true,
      }),
    );
  }
}
