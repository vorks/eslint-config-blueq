module.exports = {
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['error', 'as-needed', {
      requireForBlockBody: true,
    }],
    'constructor-super': 'error',
    'generator-star-spacing': ['error', {
      before: true,
      after: false,
    }],
    'no-class-assign': 'error',
    'no-confusing-arrow': ['error', {
      allowParens: true,
    }],
    'no-dupe-class-members': 'error',
    'no-duplicate-imports': ['error', {
      includeExports: true,
    }],
    'no-new-symbol': 'error',
    'no-restricted-imports': 'off',
    'no-this-before-super': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': ['error', {
      ignoreDestructuring: false,
      ignoreImport: false,
      ignoreExport: false,
    }],
    'no-var': 'error',
    'object-shorthand': ['error', 'always'],
    'prefer-arrow-callback': ['error', {
      allowNamedFunctions: true,
      allowUnboundThis: true,
    }],
    'prefer-const': ['error'],
    'prefer-destructuring': ['off'],
    'prefer-numeric-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'require-yield': 'error',
    'rest-spread-spacing': ['error', 'never'],
    'sort-imports': 'off',
    'symbol-description': 'error',
    'template-curly-spacing': ['error', 'never'],
    'yield-star-spacing': ['error', {
      before: true,
      after: false,
    }],
  },
}
