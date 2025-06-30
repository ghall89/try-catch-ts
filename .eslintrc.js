module.exports = {
  extends: ['plugin:unicorn/recommended'],
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  plugins: ['prettier'],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
