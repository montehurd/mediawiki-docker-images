import stylistic from '@stylistic/eslint-plugin';

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
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/comma-spacing': 'error',
      '@stylistic/space-before-function-paren': ['error', 'never']
    }
  }
];