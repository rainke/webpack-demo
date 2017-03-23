const openBrowser = require('react-dev-utils/openBrowser');

function OpenBrowserPlugin(options) {
  const defaultOptions = {
    port: 8080
  };

  this.options = {
    port: options.port || defaultOptions.port
  }
  this.firstRun = true;
}

OpenBrowserPlugin.prototype.apply = function (compiler) {
  compiler.plugin('done', () => {
    if(this.firstRun) {
      this.firstRun = false;
      openBrowser('http://localhost:' + this.options.port);
    }
  })
};

module.exports = OpenBrowserPlugin;