const Uku = require('./node_modules/uku');
const config = require('./config');
const plugins = require('./plugins');

const manifest = {
  server: {
    load: config.get('/server/load'),
    debug: {
      request: ['error']
    }
  },

  connections: [{
    port: config.get('/server/port')
  }],

  plugins: plugins
};

const options = {
  // paths specified in `plugins` above are relative to this value:
  relativeTo: require('path').join(__dirname, './node_modules')
};


exports.run = function run () {

  return Uku.run(manifest, options);
};
