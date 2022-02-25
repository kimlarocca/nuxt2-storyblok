module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  plugins: [],
  // add your custom rules here
  "rules": {
    "vue/multi-word-component-names": 0,
    // we trust the content from our API so we can safely ignore these warnings
    "vue/no-v-html": 0,
    "vue/html-self-closing": 0,
    "vue/space-before-function-paren": 0,
    "space-before-function-paren": 0
  }
}
