module.exports = {
  parser: 'babel-eslint',
  extends: ['eslint-config-airbnb', 'eslint-config-standard'],
  env: {
    jest: true,
  },
  globals: {
    fetch: true,
  },
  rules: {
    'no-console': 0,
    'new-cap': 0,
    'arrow-body-style': 0,
    'comma-dangle': ['error', 'always-multiline'],
    'arrow-parens': ['error', 'as-needed'],
    'import/no-extraneous-dependencies': 0,
    'object-curly-newline': 0,
    'function-paren-newline': 0,
    'prefer-destructuring': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'no-use-before-define': 0,
    'react/jsx-filename-extension': 0,
    'react/prefer-stateless-function': 0,
    'react/forbid-prop-types': 0,
    'react/no-unescaped-entities': 0,
    'react/require-default-props': 0,
    'react/sort-comp': 0,
    'react/prop-types': [
      'error',
      {
        ignore: ['style', 'children'],
      },
    ],
  },
}
