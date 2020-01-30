const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.(js|jsx||mdx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-knobs/register'
  ],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../')
    })
    return config
  }
}
