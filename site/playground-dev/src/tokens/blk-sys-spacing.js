import units from './blk-ref-spacing.js';

const reference = units;
const namespace = 'blk-sys-spacing';

const light = {
  'spacing-unit': 'unit',
  'spacing-relative-unit': 'relative-unit',
};

const sysSpacing = {
  refToken: reference,
  namespace,
  scheme: light,
};

export default sysSpacing;
