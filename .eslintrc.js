module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'global-require': 'off',
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    'no-unused-expressions': 'off',
    'no-underscore-dangle': 'off',
    'func-names': 'off',
    'import/extensions': 'off',
    'import/no-cycle': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-shadow': 'off',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'max-len': ['error', { code: 150 }],
    camelcase: 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'import/prefer-default-export': 'off',
    'arrow-body-style': 'off',
    'react/function-component-definition': 'off'
  },
};
