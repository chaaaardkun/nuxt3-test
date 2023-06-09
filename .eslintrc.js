module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: 'vue-eslint-parser',
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],

  rules: {
    semi: 'off',
    'vue/multi-word-component-names': 'off',
    'vue/setup-compiler-macros': 0,
    'comma-dangle': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'arrow-parens': 'off',
    'vue/html-self-closing': 'off',
    'no-extra-boolean-cast': 'off',
    'import/no-named-as-default-member': 'off',
    'import/default': 'off',
    'vue/script-indent': ['warning', 2, { baseIndent: 1 }],
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off',
      },
    },
  ],
  globals: {
    useRoute: false,
  },
};
