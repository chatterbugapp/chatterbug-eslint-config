// NB: You can't put `extends` in an overrides section because /shrug, so we
// fake it out by just direcly including it
const eslintRecommended = require('eslint/conf/eslint-recommended')

let legacyConfig = JSON.parse(JSON.stringify(require('./javascript')))
delete legacyConfig.extends

module.exports = {
  parser: '@typescript-eslint/parser',

  extends: [
    // NB: We use the default preset from `create-react-app` as our base,
    // because one of the great things it does is disable ESLint rules that
    // are better covered by the TypeScript compiler, such as 'no-unused-var'.
    'react-app',

    // NB: Disable rules that Prettier covers
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],

  overrides: [
    {
      files: ['**/*.js?(x)'],
      ...eslintRecommended,
      ...legacyConfig,
    },
  ],

  rules: {
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/ban-types': 'error',
  },
}
