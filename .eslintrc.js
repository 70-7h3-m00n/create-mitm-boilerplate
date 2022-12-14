module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'next',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'prettier',
    'plugin:storybook/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.tsx']
      }
    ],
    'react/react-in-jsx-scope': 0,
    'react/jsx-uses-react': 0,
    quotes: ['error', 'single']
  },
  globals: {
    JSX: 'readonly'
  },
  overrides: [
    {
      files: ['./app/**/layout.tsx'],
      rules: {
        '@next/next/no-head-element': 0
      }
    },
    {
      files: ['./**/*.stories.tsx'],
      rules: {
        'import/no-extraneous-dependencies': 0,
        'react/function-component-definition': 0
      }
    },
    {
      files: ['./**/*.tsx'],
      rules: {
        'react/jsx-props-no-spreading': 0,
        'import/extensions': 0
      }
    }
  ]
}
