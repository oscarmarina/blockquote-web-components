const refBaseSizes = {
  size100: 11, // px
  size200: 12, // px
  size300: 14, // px
  size400: 16, // px
  size500: 22, // px
  size600: 24, // px
  size700: 28, // px
  size800: 32, // px
  size900: 36, // px
  size1000: 45, // px
  size1100: 57, // px
};

const refSizes = {
  size100: `${refBaseSizes.size100 / 16}rem`, // 11px
  size200: `${refBaseSizes.size200 / 16}rem`, // 12px
  size300: `${refBaseSizes.size300 / 16}rem`, // 14px
  size400: `${refBaseSizes.size400 / 16}rem`, // 16px
  size500: `${refBaseSizes.size500 / 16}rem`, // 22px
  size600: `${refBaseSizes.size600 / 16}rem`, // 24px
  size700: `${refBaseSizes.size700 / 16}rem`, // 28px
  size800: `${refBaseSizes.size800 / 16}rem`, // 32px
  size900: `${refBaseSizes.size900 / 16}rem`, // 36px
  size1000: `${refBaseSizes.size1000 / 16}rem`, // 45px
  size1100: `${refBaseSizes.size1100 / 16}rem`, // 57px
};

const refLineHeights = {
  line100: '1rem', // 16px
  line200: '1.25rem', // 20px
  line300: '1.5rem', // 24px
  line400: '1.75rem', // 28px
  line500: '2rem', // 32px
  line600: '2.25rem', // 36px
  line700: '2.5rem', // 40px
  line800: '2.75rem', // 44px
  line900: '3.25rem', // 52px
  line1000: '3.5rem', // 56px
  line1100: '4rem', // 64px
};

const refWeight = {
  light: 300,
  book: 350,
  regular: 400,
  medium: 500,
  bold: 700,
};

// eslint-disable-next-line no-unused-vars
const refStyle = {
  normal: 'normal',
  italic: 'italic',
};

const refFamilies = {
  brand: 'serif',
  monospace: 'monospace',
  plain: 'sans-serif',
};

const refTracking = {
  tracking0: '0', // display-medium-tracking - display-small-tracking - headline-large-tracking - headline-medium-tracking - headline-small-tracking - title-large-tracking
  tracking100: '-0.016rem', // -0.256px - display-large-tracking
  tracking200: '0.006rem', // 0.096px - label-large-tracking
  tracking300: '0.009rem', // 0.144px - title-medium-tracking
  tracking400: '0.016rem', // 0.256px - body-medium-tracking
  tracking500: '0.025rem', // 0.4px - body-small-tracking
  tracking600: '0.031rem', // 0.496px - label-medium-tracking - label-medium-tracking - body-large-tracking
  tracking700: '0.063rem', // 1.008px
  tracking800: '0.125rem', // 2px
};

const refFont = {
  type100: `${refWeight.medium} ${refSizes.size100}/${refLineHeights.line100} ${refFamilies.plain}`,
  type200: `${refWeight.medium} ${refSizes.size200}/${refLineHeights.line100} ${refFamilies.plain}`,
  type300: `${refWeight.medium} ${refSizes.size300}/${refLineHeights.line200} ${refFamilies.plain}`,

  type400: `${refWeight.regular} ${refSizes.size200}/${refLineHeights.line100} ${refFamilies.plain}`,
  type500: `${refWeight.regular} ${refSizes.size300}/${refLineHeights.line200} ${refFamilies.plain}`,
  type600: `${refWeight.regular} ${refSizes.size400}/${refLineHeights.line300} ${refFamilies.plain}`,

  type700: `${refWeight.regular} ${refSizes.size300}/${refLineHeights.line200} ${refFamilies.brand}`,
  type800: `${refWeight.medium} ${refSizes.size400}/${refLineHeights.line300} ${refFamilies.plain}`,
  type900: `${refWeight.medium} ${refSizes.size500}/${refLineHeights.line400} ${refFamilies.plain}`,

  type1000: `${refWeight.regular} ${refSizes.size600}/${refLineHeights.line500} ${refFamilies.brand}`,
  type1100: `${refWeight.regular} ${refSizes.size700}/${refLineHeights.line600} ${refFamilies.brand}`,
  type1200: `${refWeight.regular} ${refSizes.size800}/${refLineHeights.line500} ${refFamilies.brand}`,

  type1300: `${refWeight.regular} ${refSizes.size900}/${refLineHeights.line800} ${refFamilies.brand}`,
  type1400: `${refWeight.regular} ${refSizes.size1000}/${refLineHeights.line900} ${refFamilies.brand}`,
  type1500: `${refWeight.regular} ${refSizes.size1100}/${refLineHeights.line1000} ${refFamilies.brand}`,
};

const refTypeface = {
  // label-small
  type100: refFont.type100,
  type101: refWeight.medium,
  type102: refSizes.size100,
  type103: refLineHeights.line100,
  type104: refFamilies.plain,
  type105: refTracking.tracking600,
  type106: refBaseSizes.size100,
  // label-medium
  type200: refFont.type200,
  type201: refWeight.medium,
  type202: refSizes.size200,
  type203: refLineHeights.line100,
  type204: refFamilies.plain,
  type205: refTracking.tracking600,
  type206: refBaseSizes.size100,
  // label-large
  type300: refFont.type300,
  type301: refWeight.medium,
  type302: refSizes.size300,
  type303: refLineHeights.line200,
  type304: refFamilies.plain,
  type305: refTracking.tracking200,
  type306: refBaseSizes.size300,
  // body-small
  type400: refFont.type400,
  type401: refWeight.regular,
  type402: refSizes.size200,
  type403: refLineHeights.line100,
  type404: refFamilies.plain,
  type405: refTracking.tracking400,
  type406: refBaseSizes.size200,
  // body-medium
  type500: refFont.type500,
  type501: refWeight.regular,
  type502: refSizes.size300,
  type503: refLineHeights.line200,
  type504: refFamilies.plain,
  type505: refTracking.tracking400,
  type506: refBaseSizes.size300,
  // body-large
  type600: refFont.type600,
  type601: refWeight.regular,
  type602: refSizes.size400,
  type603: refLineHeights.line300,
  type604: refFamilies.plain,
  type605: refTracking.tracking600,
  type606: refBaseSizes.size400,
  // title-small
  type700: refFont.type700,
  type701: refWeight.regular,
  type702: refSizes.size300,
  type703: refLineHeights.line200,
  type704: refFamilies.brand,
  type705: refTracking.tracking200,
  type706: refBaseSizes.size300,
  // title-medium
  type800: refFont.type800,
  type801: refWeight.medium,
  type802: refSizes.size400,
  type803: refLineHeights.line300,
  type804: refFamilies.plain,
  type805: refTracking.tracking300,
  type806: refBaseSizes.size400,
  // title-large
  type900: refFont.type900,
  type901: refWeight.medium,
  type902: refSizes.size500,
  type903: refLineHeights.line400,
  type904: refFamilies.plain,
  type905: refTracking.tracking0,
  type906: refBaseSizes.size500,
  // headline-small
  type1000: refFont.type1000,
  type1001: refWeight.regular,
  type1002: refSizes.size600,
  type1003: refLineHeights.line500,
  type1004: refFamilies.brand,
  type1005: refTracking.tracking0,
  type1006: refBaseSizes.size600,
  // headline-medium
  type1100: refFont.type1100,
  type1101: refWeight.regular,
  type1102: refSizes.size700,
  type1103: refLineHeights.line600,
  type1104: refFamilies.brand,
  type1105: refTracking.tracking0,
  type1106: refBaseSizes.size700,
  // headline-large
  type1200: refFont.type1200,
  type1201: refWeight.regular,
  type1202: refSizes.size800,
  type1203: refLineHeights.line500,
  type1204: refFamilies.brand,
  type1205: refTracking.tracking0,
  type1206: refBaseSizes.size800,
  // display-small
  type1300: refFont.type1300,
  type1301: refWeight.regular,
  type1302: refSizes.size900,
  type1303: refLineHeights.line800,
  type1304: refFamilies.brand,
  type1305: refTracking.tracking0,
  type1306: refBaseSizes.size900,
  // display-medium
  type1400: refFont.type1400,
  type1401: refWeight.regular,
  type1402: refSizes.size1000,
  type1403: refLineHeights.line900,
  type1404: refFamilies.brand,
  type1405: refTracking.tracking0,
  type1406: refBaseSizes.size1000,
  // display-large
  type1500: refFont.type1500,
  type1501: refWeight.regular,
  type1502: refSizes.size1100,
  type1503: refLineHeights.line1000,
  type1504: refFamilies.brand,
  type1505: refTracking.tracking100,
  type1506: refBaseSizes.size1100,

  'type-prominent': refWeight.bold,
};

export default { ...refTypeface };
