module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'jsx-a11y',
    'react',
  ],
  rules: {
    'jsx-a11y/accessible-emoji': 'error',
    'jsx-a11y/anchor-has-content': ['error', {
      components: [''],
    }],
    'jsx-a11y/aria-activedescendant-has-tabindex': 'error',
    'jsx-a11y/aria-props': 'error',
    'jsx-a11y/aria-proptypes': 'error',
    'jsx-a11y/aria-role': ['error', {
      ignoreNonDom: false,
    }],
    'jsx-a11y/aria-unsupported-elements': 'error',
    'jsx-a11y/click-events-have-key-events': 'error',
    'jsx-a11y/heading-has-content': ['error', {
      components: [''],
    }],
    'jsx-a11y/href-no-hash': ['error', {
      components: ['a'],
    }],
    'jsx-a11y/html-has-lang': 'error',
    'jsx-a11y/iframe-has-title': 'error',
    'jsx-a11y/img-has-alt': 'error',
    'jsx-a11y/img-redundant-alt': 'error',
    'jsx-a11y/label-has-for': ['error', {
      components: ['label'],
    }],
    'jsx-a11y/lang': 'error',
    'jsx-a11y/mouse-events-have-key-events': 'error',
    'jsx-a11y/no-access-key': 'error',
    'jsx-a11y/no-autofocus': 'error',
    'jsx-a11y/no-distracting-elements': 'error',
    'jsx-a11y/no-onchange': 'error',
    'jsx-a11y/no-redundant-roles': 'error',
    'jsx-a11y/no-static-element-interactions': 'error',
    'jsx-a11y/onclick-has-focus': 'error',
    'jsx-a11y/onclick-has-role': 'error',
    'jsx-a11y/role-has-required-aria-props': 'error',
    'jsx-a11y/role-supports-aria-props': 'error',
    'jsx-a11y/scope': 'error',
    'jsx-a11y/tabindex-no-positive': 'error',
  },
}