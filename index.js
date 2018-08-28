module.exports = {
  extends: [
    'eslint-config-airbnb',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  rules: {
    'import/prefer-default-export': 'off',
    'no-plusplus': 'off',
    'import/extensions': 'off',
    'react/no-multi-comp': [
      'error',
      {
        ignoreStateless: true,
      },
    ],
    'react/prop-types': [
      'error',
      {
        skipUndeclared: true,
      },
    ],
    'react/jsx-filename-extension': 'off',
    'react/forbid-prop-types': 'off',
    'react/prefer-stateless-function': ['error'],
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to'],
      },
    ],
    'no-console': 'error',
  },
  parser: 'babel-eslint',
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  globals: {
    __DEV__: true,
    __TEST__: true,
  },
}
