module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'eslint:recommended',
    'next',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    allowImportExportEverywhere: true,
  },
  ignorePatterns: ['node_modules/*', '.next/*', '.out/*', '!.prettierrc.js'],
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    semi: [2, 'never'],
    'max-len': [
      'warn',
      {
        ignoreComments: true,
        ignoreStrings: true,
        ignoreUrls: true,
        ignoreTemplateLiterals: true,
        code: 140,
        tabWidth: 2,
      },
    ],
    'no-plusplus': 'off',
    'prefer-rest-params': 'off',
    quotes: ['warn', 'single'],
    'jsx-a11y/no-static-element-interactions': [
      'warn',
      {
        handlers: [],
      },
    ],
    'jsx-a11y/click-events-have-key-events': [
      'warn',
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tx', '.tsx'] }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'arrow-body-style': ['warn', 'as-needed'],
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      settings: { react: { version: 'detect' } },
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:prettier/recommended',
      ],
      rules: {
        'prettier/prettier': ['warn', { semi: false }, { usePrettierrc: false }],
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'jsx-a11y/anchor-is-valid': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/explicit-function-return-type': [
          'warn',
          {
            allowExpressions: true,
            allowConciseArrowFunctionExpressionsStartingWithVoid: true,
          },
        ],
        'react/no-unescaped-entities': 0,
        'jsx-a11y/no-static-element-interactions': [
          'warn',
          {
            handlers: [],
          },
        ],
        'jsx-a11y/click-events-have-key-events': [
          'warn',
        ],
        'jsx-a11y/no-noninteractive-element-interactions': [
          'warn',
        ],
        'react/function-component-definition': 'off',
        'react/require-default-props': 'off',
        'react/no-unused-prop-types': 'off',
        'consistent-return': 'off',
        'no-console': 'off',
        'import/no-import-module-exports': 'off',
      },
    },
  ],
}
