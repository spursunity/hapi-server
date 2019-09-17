const path = require('path');

const getHtml = {
  method: 'GET',
  path: '/{param*}',
  handler: {
    directory: {
      path: path.join(__dirname, '../build'),
    },
  },
};

module.exports = [getHtml];
