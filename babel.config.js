module.exports = {
  presets: [
    ['@babel/preset-env', {
      useBuiltIns: 'entry',
    }]
  ],
  plugins: [
    '@babel/plugin-transform-classes',
    '@babel/plugin-proposal-export-default-from',
  ]
};
