const Hapi = require('@hapi/hapi');
const inert = require('inert');

const routes = require('./routes');

const server = Hapi.server({
  port: 3000,
  host: 'localhost',
});

const init = async () => {
  await server.start();
  server.register(inert);
  server.route(routes);

  console.log('Server running on %s', server.info.uri); // eslint-disable-line no-console
};

process.on('unhandledRejection', (err) => {
  console.log(err); // eslint-disable-line no-console
  process.exit(1);
});

init();
