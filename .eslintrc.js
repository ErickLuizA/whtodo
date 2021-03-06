module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'detox'],
  rules: {
    "semi": 'off' 
  },
  overrides: [
      {
        files: ['*.e2e.js'],
        env: {
          'detox/detox': true,
          jest: true,
          'jest/globals': true,
        },
      },
    ],
};
