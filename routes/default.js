/* eslint-disable no-console */
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

const setCookie = {
  method: 'GET',
  path: '/seco',
  handler: (request, h) => {
    try {
      return h.response({ cookieState: 'set' }).state('auth', { username: 'John', uid: 1234 }).code(200);
    } catch (error) {
      const { message } = error;
      console.log('message :', message);
      return h.response({ message }).code(500);
    }
  },
  options: {
    state: {
      parse: true,
      failAction: 'error',
    },
  },
};

const getCookie = {
  method: 'GET',
  path: '/geco',
  handler: (request, h) => {
    try {
      const { auth } = request.state;

      return h.response({ cookieState: 'get', auth }).code(200);
    } catch (error) {
      const { message } = error;
      console.log('message :', message);
      return h.response({ message }).code(500);
    }
  },
  options: {
    state: {
      parse: true,
      failAction: 'error',
    },
  },
};

module.exports = [getHtml, setCookie, getCookie];
