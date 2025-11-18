import stylistic from '@stylistic/eslint-plugin';
import vue from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';

export default [
  {
    plugins: {
      '@stylistic': stylistic
    },
    rules: {
      // Code quality rules (built into ESLint)
      "no-unused-vars": "error",
      "no-undef": "error",

      // Formatting rules (from stylistic plugin)
      '@stylistic/indent': ['error', 2],
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/comma-spacing': 'error',
      '@stylistic/space-before-function-paren': ['error', 'never']
    }
  },
  ...vue.configs['flat/recommended'],
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    },
    rules: {
      // Vue-specific rules
      'vue/multi-word-component-names': 'off',
      'vue/html-indent': ['error', 2],
      'vue/html-self-closing': 'off',
      'vue/max-attributes-per-line': ['error', {
        singleline: 3,
        multiline: 1
      }]
    }
  }
];
