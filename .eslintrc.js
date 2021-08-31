module.exports = {
  root: true,
  extends: '@react-native-community',
  overrides: [
    {
      files: ['*.tsx', '*.ts'],
      rules: {
        'react-native/no-inline-styles': 'off',
      },
    },
  ],
};
