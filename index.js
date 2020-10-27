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
    {
      files: ['**/*.ts?(x)'],
      rules: {
        '@typescript-eslint/array-type': 'error',
        '@typescript-eslint/ban-types': 'error',
        '@typescript-eslint/no-extra-non-null-assertion': 'warn',
        '@typescript-eslint/no-floating-promises': 'warn',
        '@typescript-eslint/no-misused-promises': 'warn',
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'warn',
        '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
        '@typescript-eslint/prefer-optional-chain': 'warn',
        '@typescript-eslint/unbound-method': 'error'
      }
    },
    {
      files: ['**/*.stories.*'],
      rules: {
        'import/no-anonymous-default-export': 'off'
      }
    }
  ],
}
