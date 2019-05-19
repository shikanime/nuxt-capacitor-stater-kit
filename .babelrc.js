module.exports = {
  presets: [
    '@vue/babel-preset-jsx',
    '@babel/preset-typescript',
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ]
  ]
}
