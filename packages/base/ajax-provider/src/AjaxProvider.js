import { AjaxProviderMixin } from './AjaxProviderMixin.js';

/**
 * A class that provides AJAX functionality with event handling capabilities.
 * @extends {AjaxProviderMixin}
 * @extends {EventTarget}
 */
export class AjaxProvider extends AjaxProviderMixin(EventTarget) {
  /**
   * Creates an instance of AjaxProvider.
   * @param {Object} [config={}] - Configuration options for the AjaxProvider.
   */
  constructor(config = {}) {
    super();

    /**
     * The context for dispatching events.
     * @type {AjaxProvider}
     */
    this.dispatchEventContext = this;

    /**
     * The last AJAX response object.
     * @type {Object}
     */
    this.lastResponse = {};

    /**
     * The last error object.
     * @type {Object}
     */
    this.lastError = {};

    /**
     * A custom event prefix for events related to HTTP requests.
     * @type {string}
     */
    this.customEventPrefix = 'ajax';

    /**
     * Set to `true` to stop delegating the use of boundaries for multipart requests to the browser.
     * Only change this to `true` if you know what you are doing.
     * @type {boolean}
     */
    this.avoidBoundary = false;

    /**
     * Assigns configuration options to the AjaxProvider instance.
     * @param {Object} options - Configuration options to be assigned.
     */
    this._assignAjaxProviderConfig(config);
  }

  /**
   * Assigns configuration options to the AjaxProvider instance.
   * @param {Object} config - Configuration config to be assigned.
   */
  _assignAjaxProviderConfig(config) {
    if (config && typeof config === 'object') {
      Object.assign(this, config);
    }
  }
}
