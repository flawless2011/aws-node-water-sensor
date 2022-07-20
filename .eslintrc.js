module.exports = {
  root: true,
  env: {
    es2018: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['tsconfig.json', 'tsconfig.dev.json'],
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: [
    '/dist/**/*', // Ignore built files.
  ],
  plugins: [
    '@typescript-eslint',
    'import',
  ],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { 'args': 'none' }],
    'arrow-parens': 'off',
    'indent': ['warn', 2],
    'max-len': ['error', {'code': 140}],
    'no-invalid-this': 'off',
    'object-curly-spacing': 'off',
    'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
    'require-jsdoc': 'off',
    'import/no-unresolved': 0,
  },
};
