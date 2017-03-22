const openBrowser = require('react-dev-utils/openBrowser');

function OpenBrowserPlugin(options) {
  const defaultOptions = {
    port: 8080
  };

  this.options = {
    port: options.port || defaultOptions.port
  }
}

OpenBrowserPlugin.prototype.apply = function (compiler) {
  compiler.plugin('done', () => {
    openBrowser('http://localhost:' + this.options.port);
  })
};

module.exports = OpenBrowserPlugin;