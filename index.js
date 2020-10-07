let legacyConfig = JSON.parse(JSON.stringify(require('./javascript')))

module.exports = {
  parser: '@typescript-eslint/parser',

  extends: [
    'react-app',

    // NB: Disable rules that Prettier covers
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],

  settings: {
    // We use `babel-plugin-module-alias` to map `src` to `./app/javascript`,
    // this makes the "import/order" eslint plugin aware of those module aliases.
    'import/resolver': {
      'babel-module': {},
    },
  },

  overrides: [
    {
      files: ['**/*.js?(x)'],
      ...legacyConfig,
    },
  ],

  rules: {},
}
