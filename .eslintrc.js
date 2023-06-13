module.exports = {
  extends: ['@mate-academy/eslint-config-react-typescript'],
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
  },
}
