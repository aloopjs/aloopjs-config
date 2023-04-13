// const Path = require('path');

module.exports = {
  register({options}){
    global.Aloop.config = require('./reader/config');
  },
  
  boot({app}) {}
};
