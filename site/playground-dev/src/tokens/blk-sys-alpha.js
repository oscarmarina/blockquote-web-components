import refAlpha from './blk-ref-alpha.js';

const reference = refAlpha;
const namespace = 'blk-sys-state';

const light = {
  'fully-clear': 'alpha98', // opacity: 0
  'very-clear': 'alpha100', // opacity: 0.08
  'semi-clear': 'alpha200', // opacity: 0.12
  'semi-solid': 'alpha300', // opacity: 0.16
  'very-solid': 'alpha400', // opacity: 0.38
  'fully-solid': 'alpha500', // opacity: 1

  'dragged-state-layer-opacity': 'alpha300', // opacity: 0.16
  'focus-state-layer-opacity': 'alpha200', // opacity: 0.12
  'hover-state-layer-opacity': 'alpha100', // opacity: 0.08
  'pressed-state-layer-opacity': 'alpha200', // opacity: 0.12
};

const sysAlpha = {
  refToken: reference,
  namespace,
  scheme: light,
};

export default sysAlpha;
