const path = require('path')
const fs = require('fs')

const appDirectory = fs.realpathSync(process.cwd())
const resolvePath = relativePath => path.resolve(appDirectory, relativePath)

module.exports = {
  build: resolvePath('build'),
  builtHtml: resolvePath('build/index.html'),
  postcssConfig: resolvePath('config/postcss.config.js'),
  devEnv: resolvePath('config/development.env'),
  prodEnv: resolvePath('config/production.env'),
  public: resolvePath('public'),
  html: resolvePath('public/index.html'),
  src: resolvePath('src'),
  api: resolvePath('src/api'),
  components: resolvePath('src/components'),
  firebase: resolvePath('src/firebase'),
  icons: resolvePath('src/icons'),
  redux: resolvePath('src/redux'),
  styledComponents: resolvePath('src/styled-components'),
  mainJs: resolvePath('src/main.js'),
  mainScss: resolvePath('src/styles/main.scss')
}
