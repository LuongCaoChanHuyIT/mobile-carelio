// eslint.config.js
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ['dist/*'],
    plugins: {
      import: require('eslint-plugin-import'),
      'unused-imports': require('eslint-plugin-unused-imports'),
    },
    rules: {
      'unused-imports/no-unused-imports': 'warn',
      'unused-imports/no-unused-vars': [
        'warn',
        { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
      ],
      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']],
          'newlines-between': 'always',
        },
      ],
    },
    settings: {
      'import/resolver': {
        typescript: true,
      },
    },
  },
]);
