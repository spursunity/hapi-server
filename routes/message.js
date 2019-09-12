const Joi = require('joi');


const sendSimpleMessage = {
  method: 'GET',
  path: '/sms',
  handler: async (request, h) => {
    try {
      return { message: 'I am Hapi' };
    } catch(err) {
      console.log('error route /sms: ', err.message);
    }
  },
  options: {
    response: {
      status: {
        200: Joi.object(),
      },
    },
  },
};

const getNumber = {
  method: 'GET',
  path: '/num',
  handler: async (request, h) => {
    try {
      const number = request.query.num;
      const type = typeof number;

      console.log(typeof number);

      return h.response({ number, type }).code(200);
    } catch(err) {
      console.log('error route /num: ', err.message);
    }
  },
  options: {
    validate: {
      query: {
        num: Joi.number().integer().default(32),
      },
    },
    response: {
      status: {
        200: Joi.object(),
      },
    },
  },
};

const getName = {
  method: 'GET',
  path: '/user/{name}',
  handler: async (request, h) => {
    try {
      const { name } = request.params;

      return h.response({ name }).code(200);
    } catch(err) {
      console.log('error route /user: ', err.message);
    }
  },
  options: {
    validate: {
      params: {
        name: Joi.string().min(3).max(7).default('erik'),
      },
    },
    response: {
      status: {
        200: Joi.object(),
      },
    },
  },
};


module.exports = [ sendSimpleMessage, getNumber, getName ];