module.exports = {
  parser: 'babel-eslint',

  plugins: ['babel', 'jsx-a11y', 'react', 'react-hooks'],

  extends: ['eslint:recommended', 'plugin:react/recommended'],

  settings: {
    react: {
      version: 'detect',
    },
    // We use `babel-plugin-module-alias` to map `src` to `./app/javascript`,
    // this makes the "import/order" eslint plugin aware of those module aliases.
    'import/resolver': {
      'babel-module': {},
    },
  },

  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
    mocha: true,
  },

  globals: {
    $: true,
    Popper: true,
    // TEST
    sinon: true,
    expect: true,
    chai: true,
    renderComponent: true,
    fireEvent: true,
  },

  rules: {
    'prettier/prettier': 'warn',
    'no-console': 'off',
    'prefer-object-spread': 'warn',
    'prefer-spread': 'warn',
    'no-unused-expressions': [
      'warn',
      { allowShortCircuit: true, allowTernary: true },
    ],
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'no-useless-escape': 'off',

    camelcase: ['warn', { properties: 'never', allow: ['smart_count'] }],
    'no-new': 'warn',
    'new-cap': ['error', { newIsCap: true, capIsNew: false }],
    'import/order': [
      'warn',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
      },
    ],
    // React Rules
    'react/prop-types': [
      'warn',
      {
        skipUndeclared: true,
        ignore: ['style', 'children', 'className', 'theme', 'sx'],
      },
    ],
    'react/jsx-uses-react': 'warn',
    'react/jsx-uses-vars': 'warn',
    'react/no-danger-with-children': 'warn',
    'react/no-unused-prop-types': 'error',
    'react/require-default-props': 'off',
    'react/jsx-no-bind': [
      'error',
      {
        allowArrowFunctions: true,
      },
    ],
    // We use this rule because our strings should be marked as
    // translated
    'react/jsx-no-literals': 'error',
    'react/require-render-return': 'error',
    'react/no-direct-mutation-state': 'warn',
    'react/no-is-mounted': 'warn',
    'react/no-typos': 'error',
    'react/no-unescaped-entities': 'off',
    'react/react-in-jsx-scope': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/display-name': 'off',
  },
}
