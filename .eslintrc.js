module.exports = {
  plugins: ['@typescript-eslint', 'react-native', 'eslint-comments', 'promise', 'unicorn'],
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:eslint-comments/recommended',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    'prettier'
  ],
  env: {
    node: true,
    browser: true,
    jest: false,
    es2022: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'no-prototype-builtins': 'off',
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'react/require-default-props': 'off',
    'eslint-comments/disable-enable-pair': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'consistent-return': 'off',
    'no-underscore-dangle': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    'no-restricted-syntax': 'off',
    'react/jsx-props-no-spreading': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    'no-param-reassign': ['error', { props: false }],
    'react/destructuring-assignment': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    'react/jsx-filename-extension': 'off',
    'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: false, classes: true, variables: true, typedefs: true }
    ],
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/no-array-for-each': 'off',
    'import/no-extraneous-dependencies': 'off',
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          camelCase: true,
          pascalCase: true
        }
      }
    ],
    'import/no-relative-packages': 'off',
    'import/no-cycle': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        leadingUnderscore: 'allow'
      }
    ],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_'
      }
    ],
    'unicorn/no-null': 'off',
    'promise/catch-or-return': ['error', { allowFinally: true }],
    'global-require': 'off',
    'unicorn/prefer-module': 'off',
    'react/jsx-no-bind': 'off',
    'unicorn/consistent-function-scoping': 'off',
    'no-continue': 'off',
    'unicorn/no-array-reduce': 'off',
    'react/state-in-constructor': 'off',
    'react/sort-comp': 'off',
    'react/jsx-no-constructed-context-values': 'off',
    'react/no-access-state-in-setstate': 'off',
    'react/no-unstable-nested-components': 'off',
    'react/no-array-index-key': 'off',
    'unicorn/numeric-separators-style': 'off'
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        // Allow CJS until ESM support improves
        '@typescript-eslint/no-var-requires': 'off',
        'unicorn/prefer-module': 'off'
      }
    }
  ]
}
