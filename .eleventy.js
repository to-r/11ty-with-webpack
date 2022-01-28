const path = require('path')

module.exports = (config) => {
  const manifestPath = path.resolve(__dirname, '_site/assets/webpack/manifest.json')

  config.addPassthroughCopy('src/assets/static')

  config.setBrowserSyncConfig({
    ...config.browserSyncConfig,
    // Reload when manifest file changes
    files: [manifestPath],
    // Speed/clean up build time
    ui: false,
    ghostMode: false
  })

  return {
    dir: {
      input: 'src',
      output: '_site',
      includes: '_includes',
      data: '_data'
    },
    templateFormats: ['njk', '11ty.js'],
    htmlTemplateEngine: 'njk'
  }
}