// vue.config.js
module.exports = {
  runtimeCompiler: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? 'nandemokawaii.github.io/'
    : '/'
};
