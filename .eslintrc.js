module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'no-console': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        singleQuote: true,
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'import/no-unresolved': 'off',
    'no-use-before-define': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': 'off',
    'import/no-named-as-default-member': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-console': 'off',
    'import/prefer-default-export': 'off',
    'no-case-declarations': 'off',
    'consistent-return': 'off',
    'react/require-default-props': 'off',
  },
};
