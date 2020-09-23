// jest.config.js
const { defaults: tsjPreset } = require('ts-jest/presets')

module.exports = {
  ...tsjPreset,
  preset: 'react-native',
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
  testPathIgnorePatterns: ['<rootDir>/__tests__/e2e'],

  // This is the only part which you can keep
  // from the above linked tutorial's config:
  cacheDirectory: '.jest/cache',
}
