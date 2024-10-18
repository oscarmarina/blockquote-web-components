// @ts-nocheck
/* c8 ignore start */

/**
 * Determines if the code is running in a standard browser environment.
 *
 * This function checks for specific conditions that indicate whether the code is
 * running in a standard browser environment, allowing Axios to work in various
 * environments like web workers, React Native, or NativeScript.
 *
 * @returns {boolean} True if running in a standard browser environment, false otherwise.
 */
export const isStandardBrowserEnv = (() => {
  /**
   * Check if the `navigator` object is defined, and if so, check the `product`
   * property to see if it indicates a non-standard environment such as React Native
   * or NativeScript.
   */
  if (typeof navigator !== 'undefined') {
    const {product} = navigator;
    return !(product === 'ReactNative' || product === 'NativeScript' || product === 'NS');
  }

  /**
   * If the `navigator` object is undefined, check if `window` and `document` objects
   * are defined, which are typical of standard browser environments.
   */
  return typeof window !== 'undefined' && typeof document !== 'undefined';
})();

/**
 * Determines if the code is running in a standard browser WebWorker environment.
 *
 * This function checks for specific conditions that indicate whether the code is
 * running in a standard browser WebWorker environment. It takes into account the
 * limitations of the `isStandardBrowserEnv` method when working with WebWorkers.
 *
 * @returns {boolean} True if running in a standard browser WebWorker environment, false otherwise.
 */
export const isStandardBrowserWebWorkerEnv = (() =>
  /**
   * Check if the `WorkerGlobalScope` object is defined, and if so, verify that `self`
   * is an instance of `WorkerGlobalScope` and that `importScripts` is a function.
   * These conditions are typical of a standard browser WebWorker environment.
   */
  typeof WorkerGlobalScope !== 'undefined' &&
  // eslint-disable-next-line no-undef
  self instanceof WorkerGlobalScope &&
  typeof self.importScripts === 'function')();

/* c8 ignore stop */

/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
export const isFormData = (thing) =>
  (thing && thing instanceof FormData) ||
  (typeof thing === 'object' &&
    typeof thing.append === 'function' /* c8 ignore next */ &&
    Object.prototype.toString.call(thing) === '[object FormData]');

/**
 * Utility function to assign a property to an object if the value is defined.
 *
 * @param {Object} obj - The object to which the property will be assigned.
 * @param {string} prop - The property name.
 * @param {*} value - The value to assign if it is defined.
 */
export const assignIfDefined = (obj, prop, value) => {
  if (value) {
    obj[prop] = value;
  }
};
